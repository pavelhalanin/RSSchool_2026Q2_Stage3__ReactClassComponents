import { useState } from "react";
import ModalPortal from "../../ModalPortal/ModalPortal";

export default function UncontrolledForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>UncontrolledForm</button>
      <ModalPortal isOpen={isOpen} closeModal={closeModal}>
        <div>UncontrolledForm content</div>
      </ModalPortal>
    </div>
  );
}
