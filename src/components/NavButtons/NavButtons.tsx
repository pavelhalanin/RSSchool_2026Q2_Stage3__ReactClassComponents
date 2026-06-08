import ReactHookFormRoot from "../ReactHookFormRoot/ReactHookFormRoot";
import UncontrolledFormRoot from "../UncontrolledFormRoot/UncontrolledFormRoot";
import styles from "./NavButtons.module.css";

export default function FormButtons() {
  return (
    <div className={styles.buttons_block}>
      <UncontrolledFormRoot />
      <ReactHookFormRoot />
    </div>
  );
}
