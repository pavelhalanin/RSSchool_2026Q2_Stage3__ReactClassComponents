import { useState } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import ReactHookForm from "./ReactHookForm/ReactHookForm";

export default function ReactHookFormRoot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>ReactHookForm</button>
      <ModalPortal
        isOpen={isOpen}
        closeModal={closeModal}
        title="React hook form"
      >
        <ReactHookForm closeModal={closeModal} />
      </ModalPortal>
    </div>
  );
}
