import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
  <>
  {isOpen && (
        <>
        <div className="relative z-50 min-h-50 max-w-[80%] m-auto bg-white p-4">
                  <div className="flex justify-end">
                      <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
                  </div>
                  {children}
              </div>
              <div onClick={onClose} className="absolute top-0 z-40 backdrop-blur h-screen w-screen" />
              </>
   )}
  </>
 , document.getElementById("modal-root"));
};

export default Modal;