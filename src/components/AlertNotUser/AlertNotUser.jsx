import { ModalWrapper } from "../../ui/ModalWrapper/ModalWrapper";
import { PopUpTitle } from "../../ui/PopUpTitle";

export const AlertNotUser = ({ onClose }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex flex-col gap-5">
        <PopUpTitle>Please, log in</PopUpTitle>
        <p className="text-neutral-900 text-opacity-80 text-xl font-bold leading-snug">
          Adding to favorites is only available to registered users
        </p>
      </div>
    </ModalWrapper>
  );
};
