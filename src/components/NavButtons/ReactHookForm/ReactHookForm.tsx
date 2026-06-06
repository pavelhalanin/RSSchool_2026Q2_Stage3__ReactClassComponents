import { useState } from "react";
import ModalPortal from "../../ModalPortal/ModalPortal";

export default function ReactHookForm() {
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
      <ModalPortal isOpen={isOpen} closeModal={closeModal}>
        <div>ReactHookForm content</div>
      </ModalPortal>
    </div>
  );
}
