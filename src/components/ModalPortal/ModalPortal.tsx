import { createPortal } from "react-dom";
import type { ReactElement } from "react";
import Modal from "./Modal/Modal";

interface IPropsModal {
  children: ReactElement;
  isOpen: boolean;
  closeModal: () => void;
}

export default function ModalPortal(props: IPropsModal) {
  if (!props.isOpen) {
    return <></>;
  }

  return createPortal(
    <Modal closeModal={props.closeModal}>{props.children}</Modal>,
    document.body,
  );
}
