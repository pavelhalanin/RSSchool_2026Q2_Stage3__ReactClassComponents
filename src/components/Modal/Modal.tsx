import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const MODAL_ELEMENT = document.getElementById("modal");

export default function Modal() {
  return createPortal(<div className={styles.modal}>modal</div>, MODAL_ELEMENT);
}
