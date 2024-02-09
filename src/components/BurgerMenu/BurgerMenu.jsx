import { Logo } from "../../ui/Logo";
import { ModalWrapper } from "../../ui/ModalWrapper/ModalWrapper";
import { Navigation } from "../Navigation";

export const BurgerMenu = ({ onClose, user, children, closeClassName }) => {
  return (
    <ModalWrapper
      onClose={onClose}
      className="px-5 pt-5 w-full h-screen rounded-none mx-0"
      closeClassName={closeClassName}
    >
      <div className="flex flex-col gap-20 py-10">
        <Logo />
        <Navigation user={user} className="flex flex-col gap-4" />
        <div className="mt-7">{children}</div>
      </div>
    </ModalWrapper>
  );
};
