import { ReactNode, forwardRef } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, isOpen }: ModalProps, ref) => {
    if (!isOpen) return null;
    return (
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 min-h-96 max-h-[500px] overflow-auto   max-w-xl w-[100%] transition-all duration-300 rounded-md p-2"
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
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
