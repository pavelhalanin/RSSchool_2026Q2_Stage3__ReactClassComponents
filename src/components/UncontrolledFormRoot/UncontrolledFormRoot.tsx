import { useState } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import UncontrolledForm from "./UncontrolledForm/UncontrolledForm";
import { useFormDataActions } from "../../store/form-data/hook";

export default function UncontrolledFormRoot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { clearErrors } = useFormDataActions();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    clearErrors();
  }

  return (
    <div>
      <button onClick={openModal}>UncontrolledForm</button>
      <ModalPortal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Uncontrolled form"
      >
        <UncontrolledForm closeModal={closeModal} />
      </ModalPortal>
    </div>
  );
}
