import { useState } from "react";
import ModalPortal from "../ModalPortal/ModalPortal";
import ReactHookForm from "./ReactHookForm/ReactHookForm";

export default function ReactHookFormRoot() {
  const TITLE = "React hook form";
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>{TITLE}</button>
      <ModalPortal isOpen={isOpen} closeModal={closeModal} title={TITLE}>
        <ReactHookForm closeModal={closeModal} />
      </ModalPortal>
    </div>
  );
}
