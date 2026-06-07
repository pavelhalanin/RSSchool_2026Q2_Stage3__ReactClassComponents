import { Controller, useForm } from "react-hook-form";
import Form from "../../Form/Form";
import FormErrors from "../../Form/FormErrors/FormErrors";
import styles from "./../../Form/Form.module.css";
import {
  useFormDataActions,
  useFormDataErrors,
} from "../../../store/form-data/hook";
import { getFormSchema } from "../../../form-schemas/useFormSchema";
import { ValidationError } from "yup";
import type { IFormDataState } from "../../../store/form-data/types";
import type { IArrayFormDataState } from "../../../store/array-form-data/types";
import { useArrayFormDataActions } from "../../../store/array-form-data/hook";

interface IPropsReactHookForm {
  closeModal: () => void;
}

interface IReactHookFormData {
  name: string;
  age: number;
  email: string;
  gender: "male" | "female" | "other";
  isAgree: boolean;
}

export default function ReactHookForm(props: IPropsReactHookForm) {
  const formDataErrors = useFormDataErrors();
  const { setFormDataErrors, clearErrors, getEmptyErrors } =
    useFormDataActions();

  const { pushToArrayFormData } = useArrayFormDataActions();

  const { control, handleSubmit, register } = useForm<IReactHookFormData>({
    defaultValues: {
      name: "",
      age: 0,
      email: "",
      gender: "other",
      isAgree: false,
    },
  });

  async function onSubmit(data: IReactHookFormData) {
    try {
      console.log("reactHookFormSubmit", data);

      const SCHEMA = getFormSchema();
      const RAW = await SCHEMA.validate(
        {
          name: data.name,
          age: data.age,
          email: data.email,
          gender: data.gender,
          isAgree: data.isAgree,
        },
        { abortEarly: false },
      );

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
      };
      pushToArrayFormData(DATA);

      console.log(RAW);
      console.log("reactHookFormSubmit", RAW);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return (
              <div className={styles.input_block}>
                <label htmlFor="form__name">Name</label>
                <input id="form__name" type="text" {...field} />
                <FormErrors errors={formDataErrors.name} />
              </div>
            );
          }}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => {
            return (
              <div className={styles.input_block}>
                <label htmlFor="form__age">Age</label>
                <input id="form__age" type="number" {...field} />
                <FormErrors errors={formDataErrors.age} />
              </div>
            );
          }}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <div className={styles.input_block}>
                <label htmlFor="form__email">Email</label>
                <input id="form__email" type="text" {...field} />
                <FormErrors errors={formDataErrors.email} />
              </div>
            );
          }}
        />

        <div className={styles.input_block}>
          <div className={styles.label}>Gender</div>
          <div className={styles.form_check}>
            <input
              id="gender_male"
              type="radio"
              value="male"
              {...register("gender")}
            />
            <label htmlFor="gender_male">Male</label>
          </div>
          <div className={styles.form_check}>
            <input
              id="gender_female"
              type="radio"
              value="female"
              {...register("gender")}
            />
            <label htmlFor="gender_female">Female</label>
          </div>
          <div className={styles.form_check}>
            <input
              id="gender_other"
              type="radio"
              value="other"
              {...register("gender")}
            />
            <label htmlFor="gender_other">Other</label>
          </div>
          <FormErrors errors={formDataErrors.gender} />
        </div>

        <div className={styles.form_check}>
          <input id="form__agree" type="checkbox" {...register("isAgree")} />
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
