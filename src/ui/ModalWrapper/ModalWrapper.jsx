import { useEffect } from "react";
import x from "../../assets/x.svg";
export const ModalWrapper = ({ className = "", onClose, children }) => {
  function closeModalOnEscape(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    document.addEventListener("keydown", closeModalOnEscape);

    return () => {
      document.body.classList.remove("overflow-y-hidden");
      document.removeEventListener("keydown", closeModalOnEscape);
    };
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
      <div
        className={`relative w-[35.375rem] h-min p-[64px] bg-white rounded-[30px] ${className}`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 hover:scale-110 focus:scale-110 "
        >
          <img src={x} alt="button close" className="hover:animate-spin" />
        </button>
        {children}
      </div>
    </div>
  );
};
