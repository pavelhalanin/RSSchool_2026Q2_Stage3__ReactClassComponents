import type { FieldError } from "react-hook-form";
import AlertDanger from "../../AlertDanger/AlertDanger";
import styles from "./../FormErrors/FormErrors.module.css";

interface IPropsReactHookFormError {
  error?: FieldError;
}

export default function ReactHookFormError(props: IPropsReactHookFormError) {
  if (!props.error) {
    return null;
  }

  return (
    <div className={styles.error__wrapper}>
      <div className={styles.error__line}></div>
      <div className={styles.error__content}>
        <AlertDanger>
          <div>{props.error.message}</div>
        </AlertDanger>
      </div>
    </div>
  );
}
