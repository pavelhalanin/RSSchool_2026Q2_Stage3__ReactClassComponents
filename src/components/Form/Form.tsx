import type { ReactElement } from "react";
import styles from "./Form.module.css";

interface IPropsForm {
  children: ReactElement;
}

export default function Form(props: IPropsForm) {
  return <div className={styles.form}>{props.children}</div>;
}
