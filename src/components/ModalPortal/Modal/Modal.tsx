import { useEffect, useRef, type ReactElement } from "react";
import styles from "./Modal.module.css";

interface IPropsModal {
  children: ReactElement;
  closeModal: () => void;
  title?: string;
}

export default function Modal(props: IPropsModal) {
  const DIV_REF = useRef<HTMLDivElement>(null);

  useEffect(() => {
    DIV_REF.current?.focus();
  }, []);

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      props.closeModal();
    }
  }

  return (
    <div
      ref={DIV_REF}
      className={styles.modal__wrapper}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      <div className={styles.modal__overlay} onClick={props.closeModal}></div>
      <div className={styles.modal__content}>
        <header className={styles.modal__header}>
          {props.title || <span></span>}
          <button
            className={styles.modal__close_button}
            onClick={props.closeModal}
          >
            x
          </button>
        </header>
        <main className={styles.modal__body}>{props.children}</main>
      </div>
    </div>
  );
}
