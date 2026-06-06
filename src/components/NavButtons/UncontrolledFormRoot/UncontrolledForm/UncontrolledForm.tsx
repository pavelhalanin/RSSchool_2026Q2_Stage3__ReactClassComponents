import { ValidationError } from "yup";
import { getFormSchema } from "../../../../form-schemas/useFormSchema";
import {
  useFormDataActions,
  useFormDataErrors,
} from "../../../../store/form-data/hook";
import Form from "../../../Form/Form";
import styles from "./../../../Form/Form.module.css";
import type { IFormDataState } from "../../../../store/form-data/types";
import FormErrors from "../../../Form/FormErrors/FormErrors";

interface IPropsUncontrolledForm {
  closeModal: () => void;
}

export default function UncontrolledForm(props: IPropsUncontrolledForm) {
  const formDataErrors = useFormDataErrors();
  const { setFormDataErrors, clearErrors, getEmptyErrors } =
    useFormDataActions();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      const FORM_TARGET = event.currentTarget; // сохраняем ссылку
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
        },
        { abortEarly: false },
      );

      console.log(RAW);

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
          <label htmlFor="form__agree">Agree</label>
          <FormErrors errors={formDataErrors.isAgree} />
        </div>
        <div className={styles.buttons_block}>
          <button className="btn btn-success" type="submit">
            Send
          </button>
          <button
            className="btn btn-warning"
            type="reset"
            onClick={clearErrors}
          >
            Reset
          </button>
        </div>
      </form>
    </Form>
  );
}
