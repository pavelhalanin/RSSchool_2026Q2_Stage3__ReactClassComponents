import { type ReactNode } from "react";
import styles from "./AlertDanger.module.css";

interface IPropsAlertDanger {
  children: ReactNode;
}

export default function AlertDanger(props: IPropsAlertDanger) {
  return <div className={styles.alert_danger}>{props.children}</div>;
}
