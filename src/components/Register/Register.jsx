import { ModalWrapper } from "../../ui/ModalWrapper/ModalWrapper";
import { PopUpTitle } from "../../ui/PopUpTitle";
import RegisterForm from "../RegisterForm/RegisterForm";

export const Register = ({ onClose }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex flex-col gap-5">
        <PopUpTitle>Registration</PopUpTitle>
        <p className="text-neutral-900 text-opacity-80 text-base font-normal leading-snug">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </div>
      <RegisterForm />
    </ModalWrapper>
  );
};
