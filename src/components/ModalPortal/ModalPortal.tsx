import { createPortal } from "react-dom";
import type { ReactElement } from "react";
import Modal from "./Modal/Modal";

interface IPropsModal {
  title?: string;
  children: ReactElement;
  isOpen: boolean;
  closeModal: () => void;
}

export default function ModalPortal(props: IPropsModal) {
  if (!props.isOpen) {
    return null;
  }

  return createPortal(
    <Modal closeModal={props.closeModal} title={props.title}>
      {props.children}
    </Modal>,
    document.body,
  );
}
