import { ReactNode, forwardRef } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, isOpen }: ModalProps, ref) => {
    return (
      <div
        ref={ref}
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 min-h-96 max-h-[500px] overflow-auto h-[-webkit-fill-available] max-w-xl w-[100%] rounded-md p-2 modal ${
          isOpen ? "isOpen" : ""
        }`}
        style={{
          transition: "opacity 300ms, visibility 300ms",
        }}
      >
        {children}
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
