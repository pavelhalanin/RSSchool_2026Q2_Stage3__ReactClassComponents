import AlertDanger from "../../AlertDanger/AlertDanger";
import styles from "./FormErrors.module.css";

interface IPropsFormErrors {
  errors: Array<string>;
}

export default function FormErrors(props: IPropsFormErrors) {
  if (props.errors.length == 0) {
    return <></>;
  }

  return (
    <div className={styles.error__wrapper}>
      <div className={styles.error__line}></div>
      <div className={styles.error__content}>
        <AlertDanger>
          {props.errors.map((e, i) => (
            <div key={`${e}${i}`}>{e}</div>
          ))}
        </AlertDanger>
      </div>
    </div>
  );
}
