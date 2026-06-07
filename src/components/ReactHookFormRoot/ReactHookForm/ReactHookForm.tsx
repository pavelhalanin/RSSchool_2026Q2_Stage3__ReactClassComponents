import { Controller, useForm, type Resolver } from "react-hook-form";
import Form from "../../Form/Form";
import styles from "./../../Form/Form.module.css";
import { getFormSchema } from "../../../form-schemas/useFormSchema";
import type { IArrayFormDataState } from "../../../store/array-form-data/types";
import { useArrayFormDataActions } from "../../../store/array-form-data/hook";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactHookFormError from "../../Form/ReactHookFormError/ReactHookFormError";
import getBase64_byFile from "../../../utils/getBase64_byFile/getBase64_byFile";
import { useCountryArray } from "../../../store/countries/hook";

interface IPropsReactHookForm {
  closeModal: () => void;
}

interface IReactHookFormData {
  name: string;
  age: number;
  email: string;
  gender: "male" | "female" | "other";
  isAgree: boolean;
  photo: File | null;
  country: string;
  password: string;
  confirmPassword: string;
}

export default function ReactHookForm(props: IPropsReactHookForm) {
  const { pushToArrayFormData } = useArrayFormDataActions();
  const countryArray = useCountryArray();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<IReactHookFormData>({
    defaultValues: {
      name: "",
      age: 0,
      email: "",
      gender: "other",
      isAgree: false,
      photo: null,
      country: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(getFormSchema()) as Resolver<IReactHookFormData>,
    mode: "onChange",
  });

  async function onSubmit(data: IReactHookFormData) {
    console.log("reactHookFormSubmit", data);

    const DATA: IArrayFormDataState["arrayFormData"][number] = {
      id: new Date().toJSON(),
      name: data.name,
      age: data.age,
      email: data.email,
      gender: data.gender,
      isAgree: data.isAgree,
      photo: await getBase64_byFile(data.photo),
      country: data.country,
    };

    pushToArrayFormData(DATA);

    console.log("reactHookFormSubmit pushToArrayFormData", DATA);

    props.closeModal();
  }

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <div className={styles.input_block}>
                <label htmlFor="form__name">Name</label>
                <input id="form__name" type="text" {...field} />
                <ReactHookFormError error={error} />
              </div>
            );
          }}
        />
        <Controller
          name="age"
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <div className={styles.input_block}>
                <label htmlFor="form__age">Age</label>
                <input id="form__age" type="number" {...field} />
                <ReactHookFormError error={error} />
              </div>
            );
          }}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <div className={styles.input_block}>
                <label htmlFor="form__email">Email</label>
                <input id="form__email" type="text" {...field} />
                <ReactHookFormError error={error} />
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
          <ReactHookFormError error={errors.gender} />
        </div>

        <div className={styles.form_check}>
          <input id="form__agree" type="checkbox" {...register("isAgree")} />
          <label htmlFor="form__agree">Agree</label>
          <ReactHookFormError error={errors.isAgree} />
        </div>

        <Controller
          name="photo"
          control={control}
          render={({ field }) => (
            <div className={styles.input_block}>
              <label htmlFor="form__photo">Photo</label>
              <input
                id="form__photo"
                type="file"
                name="photo"
                onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
              />
              <ReactHookFormError error={errors.photo} />
            </div>
          )}
        />

        <Controller
          name="country"
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <div className={styles.input_block}>
                <label htmlFor="form__country">Country</label>
                <input
                  id="form__country"
                  type="text"
                  list="form__country_datalist"
                  {...field}
                />
                <datalist id="form__country_datalist">
                  {countryArray.map((e) => {
                    return <option key={e.code} value={e.name} />;
                  })}
                </datalist>
                <ReactHookFormError error={error} />
              </div>
            );
          }}
        />

        <div className={styles.buttons_block}>
          <button className="btn btn-success" type="submit" disabled={!isValid}>
            Send
          </button>
          <button
            className="btn btn-warning"
            type="reset"
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </form>
    </Form>
  );
}
