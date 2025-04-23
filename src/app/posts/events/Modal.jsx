// components/Modal.tsx
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "zoom-out",
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;
