import { ModalWrapper } from "../../ui/ModalWrapper/ModalWrapper";
import { PopUpTitle } from "../../ui/PopUpTitle";

export const BookLessonModal = ({ onClose, el }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex flex-col gap-5">
        <PopUpTitle>Book trial lesson</PopUpTitle>
        <p className="w-full text-neutral-900 text-opacity-80 text-base font-normal leading-snug">
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <p>{el.name}</p>
      </div>
    </ModalWrapper>
  );
};
