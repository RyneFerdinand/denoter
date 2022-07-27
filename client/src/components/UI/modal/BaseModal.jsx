import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";
import { useRef } from "react";

const modalNode = document.getElementById("modal-root");

const BaseModal = (props) => {
  const { children, onHideModal, modalTitle, width } = props;

  const overlayRef = useRef();

  const closeOverlayHandler = () => {
    document.body.style.overflow = "visible";
    onHideModal();
  };

  const closeByRefHandler = (e) => {
    if (overlayRef.current === e.target) {
      closeOverlayHandler();
    }
  };

  return createPortal(
    <div
      className="fixed h-screen w-screen flex items-center justify-center bg-black bg-opacity-75 z-10"
      ref={overlayRef}
      onClick={closeByRefHandler}
    >
      <div className="bg-light-main rounded-md shadow-lg relative py-2 w-2/5">
        <div className="flex flex-row justify-between items-center px-4 mb-2">
          <h1 className="font-bold text-xl">{modalTitle}</h1>
          <button className="" onClick={closeOverlayHandler}>
            <IoMdClose className="fill-light-negative w-10 h-10 bg-opacity-0 bg-light-negative rounded-full hover:bg-opacity-20 p-1 transition-opacity duration-75" />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-210px)]">
          {children}
        </div>
      </div>
    </div>,
    modalNode
  );
};

export default BaseModal;
