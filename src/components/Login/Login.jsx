import { ModalWrapper } from "../../ui/ModalWrapper/ModalWrapper";
import { PopUpTitle } from "../../ui/PopUpTitle";
import { LoginForm } from "../LoginForm/LoginForm";

export const Login = ({ onClose }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex flex-col gap-5">
        <PopUpTitle>Log In</PopUpTitle>
        <p className="text-neutral-900 text-opacity-80 text-base font-normal leading-snug">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>

      <LoginForm onClose={onClose} />
    </ModalWrapper>
  );
};
