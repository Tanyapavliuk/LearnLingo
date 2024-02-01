import { useEffect } from "react";
import x from "../../assets/x.svg";
export const ModalWrapper = ({ onClose, children }) => {
  useEffect(() => {
    document.body.classList.add("overscroll-y-none");
    return document.body.classList.remove("overscroll-y-none");
  }, []);
  return (
    <div
      id="backdrop"
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          onClose();
        }
      }}
      className="fixed inset-0 z-10 bg-slate-300/30 flex justify-center items-center"
    >
      <div className="relative w-[35.375rem] h-min-content p-[64px] bg-white rounded-[30px]">
        <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8">
          <img src={x} alt="button close" />
        </button>
        {children}
      </div>
    </div>
  );
};
