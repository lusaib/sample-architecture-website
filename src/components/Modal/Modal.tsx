import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};
const Modal = ({ isOpen, children }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root");

  // Check if the modalRoot element exists before rendering the portal
  if (!modalRoot || !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(children, modalRoot);
};

export default Modal;
