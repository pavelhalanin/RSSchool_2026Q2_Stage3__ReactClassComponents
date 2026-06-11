import { ValidationError } from "yup";
import { getFormSchema } from "../../../form-schemas/useFormSchema";
import {
  useFormDataActions,
  useFormDataErrors,
  useFormDataValue,
} from "../../../store/form-data/hook";
import Form from "../../Form/Form";
import styles from "./../../Form/Form.module.css";
import type { IFormDataState } from "../../../store/form-data/types";
import FormErrors from "../../Form/FormErrors/FormErrors";
import { useArrayFormDataActions } from "../../../store/array-form-data/hook";
import type { IArrayFormDataState } from "../../../store/array-form-data/types";
import getBase64_byFile from "../../../utils/getBase64_byFile/getBase64_byFile";
import { useCountryArray } from "../../../store/countries/hook";
import usePasswordLevel from "../../../hook/usePasswordLevel/usePasswordLevel";

interface IPropsUncontrolledForm {
  closeModal: () => void;
}

export default function UncontrolledForm(props: IPropsUncontrolledForm) {
  const countryArray = useCountryArray();
  const formData = useFormDataValue();
  const formDataErrors = useFormDataErrors();
  const {
    setFormDataErrors,
    reset,
    getEmptyErrors,
    setPassword,
    setConfirmPassword,
  } = useFormDataActions();

  const { pushToArrayFormData } = useArrayFormDataActions();

  const { hasNumber, hasUppercase, hasLowercase, hasSpecialCharacter } =
    usePasswordLevel(formData.password);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      const FORM_TARGET = event.currentTarget;
      console.log("uncontrolledFromSubmit", FORM_TARGET);

      event.preventDefault();
      const FORM_DATA = new FormData(event.currentTarget);
      const SCHEMA = getFormSchema();
      const RAW = await SCHEMA.validate(
        {
          name: FORM_DATA.get("name"),
          age: FORM_DATA.get("age"),
          email: FORM_DATA.get("email"),
          gender: FORM_DATA.get("gender"),
          isAgree: FORM_DATA.get("isAgree") == "on",
          photo: FORM_DATA.get("photo"),
          country: FORM_DATA.get("country"),
          password: FORM_DATA.get("password"),
          confirmPassword: FORM_DATA.get("confirmPassword"),
        },
        { abortEarly: false },
      );

      console.log(RAW);
      console.log("uncontrolledFromSubmit", RAW);

      const DATA: IArrayFormDataState["arrayFormData"][number] = {
        id: new Date().toJSON(),
        name: RAW.name || "",
        age: RAW.age || 0,
        email: RAW.email || "",
        gender:
          RAW.gender == "male"
            ? "male"
            : RAW.gender == "female"
              ? "female"
              : "other",
        isAgree: RAW.isAgree || false,
        photo: await getBase64_byFile(RAW.photo),
        country: RAW.country,
      };
      pushToArrayFormData(DATA);

      FORM_TARGET.reset();
      props.closeModal();
    } catch (exception) {
      if (exception instanceof ValidationError) {
        const DICT: IFormDataState["formData"]["errors"] = getEmptyErrors();

        const ARRAY = exception.inner;
        for (let i = 0; i < ARRAY.length; i++) {
          const ERROR_NAME = ARRAY[i]
            .path as keyof IFormDataState["formData"]["errors"];
          if (!ERROR_NAME) {
            continue;
          }
          const ERROR_MESSAGE = ARRAY[i].message;
          DICT[ERROR_NAME].push(ERROR_MESSAGE);
        }

        setFormDataErrors(DICT);

        return;
      }
      throw exception;
    }
  }

  return (
    <Form>
      <form onSubmit={onSubmit}>
        <div className={styles.input_block}>
          <label htmlFor="form__name">Name</label>
          <input id="form__name" type="text" name="name" />
          <FormErrors errors={formDataErrors.name} />
        </div>
        <div className={styles.input_block}>
          <label htmlFor="form__age">Age</label>
          <input id="form__age" type="number" name="age" />
          <FormErrors errors={formDataErrors.age} />
        </div>
        <div className={styles.input_block}>
          <label htmlFor="form__email">Email</label>
          <input id="form__email" type="text" name="email" />
          <FormErrors errors={formDataErrors.email} />
        </div>
        <div className={styles.input_block}>
          <div className={styles.label}>Gender</div>
          <div className={styles.form_check}>
            <input id="gender_male" type="radio" name="gender" value="male" />
            <label htmlFor="gender_male">Male</label>
          </div>
          <div className={styles.form_check}>
            <input
              id="gender_female"
              type="radio"
              name="gender"
              value="female"
            />
            <label htmlFor="gender_female">Female</label>
          </div>
          <div className={styles.form_check}>
            <input id="gender_other" type="radio" name="gender" value="other" />
            <label htmlFor="gender_other">Other</label>
          </div>
          <FormErrors errors={formDataErrors.gender} />
        </div>
        <div className={styles.form_check}>
          <input id="form__agree" type="checkbox" name="isAgree" />
          <label htmlFor="form__agree">Terms & Conditions</label>
          <FormErrors errors={formDataErrors.isAgree} />
        </div>
        <div className={styles.input_block}>
          <label htmlFor="form__photo">Photo</label>
          <input id="form__photo" type="file" name="photo" />
          <FormErrors errors={formDataErrors.photo} />
        </div>
        <div>
          <label htmlFor="form__country">Country</label>
          <input
            id="form__country"
            type="text"
            name="country"
            list="form__country_datalist"
          />
          <datalist id="form__country_datalist">
            {countryArray.map((e) => {
              return <option key={e.code} value={e.name} />;
            })}
          </datalist>
          <FormErrors errors={formDataErrors.country} />
        </div>
        <div className={styles.input_block}>
          <label htmlFor="form__password">Password</label>
          <input
            id="form__password"
            type="password"
            name="password"
            value={formData.password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormErrors errors={formDataErrors.password} />
          <ul className={styles.password_levels}>
            <li data-is-valid={hasNumber ? "1" : "0"}>1 number</li>
            <li data-is-valid={hasUppercase ? "1" : "0"}>1 uppercase</li>
            <li data-is-valid={hasLowercase ? "1" : "0"}>1 lowercase</li>
            <li data-is-valid={hasSpecialCharacter ? "1" : "0"}>
              1 special character
            </li>
          </ul>
        </div>
        <div className={styles.input_block}>
          <label htmlFor="form__confirm_password">Confirm Password</label>
          <input
            id="from__confirm_password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <FormErrors errors={formDataErrors.confirmPassword} />
          <ul className={styles.password_levels}>
            <li
              data-is-valid={
                formData.password === formData.confirmPassword ? "1" : "0"
              }
            >
              Password is need equals with confirm password
            </li>
          </ul>
        </div>
        <div className={styles.buttons_block}>
          <button className="btn btn-success" type="submit">
            Send
          </button>
          <button className="btn btn-warning" type="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </form>
    </Form>
  );
}
