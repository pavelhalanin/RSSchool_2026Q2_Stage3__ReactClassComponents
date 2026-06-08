import { useState } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import UncontrolledForm from "./UncontrolledForm/UncontrolledForm";
import { useFormDataActions } from "../../store/form-data/hook";

export default function UncontrolledFormRoot() {
  const TITLE = "Uncontrolled form";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { reset } = useFormDataActions();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    reset();
  }

  return (
    <div>
      <button onClick={openModal}>{TITLE}</button>
      <ModalPortal isOpen={isOpen} closeModal={closeModal} title={TITLE}>
        <UncontrolledForm closeModal={closeModal} />
      </ModalPortal>
    </div>
  );
}
