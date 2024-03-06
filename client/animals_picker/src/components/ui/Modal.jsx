import { createPortal } from "react-dom";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/store/app-context";
import { Button } from "./Button";

const Modal = () => {
  const dialogRef = useRef();
  const { modalOpen, onCancelRemoveAnimal, onRemoveAnimal } =
    useContext(AppContext);

  useEffect(() => {
    if (modalOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [modalOpen]);

  return createPortal(
    <dialog className="p-5 rounded-md border-2 border-white" ref={dialogRef}>
      <h1 className="font-bold p-3">Remove animal ?</h1>
      <div className="flex gap-2 p-2">
        <Button className="hover:bg-black" onClick={onCancelRemoveAnimal}>
          Cancel
        </Button>
        <Button className="hover:bg-black" onClick={onRemoveAnimal}>
          Remove
        </Button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
