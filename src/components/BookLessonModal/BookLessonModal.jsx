import { ModalWrapper } from "../../ui/ModalWrapper/ModalWrapper";
import { PopUpTitle } from "../../ui/PopUpTitle";
import { GrayText } from "../../ui/GrayText/GrayText";
import { BookForm } from "../BookForm";

export const BookLessonModal = ({ onClose, el }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex flex-col gap-5">
        <PopUpTitle>Book trial lesson</PopUpTitle>
        <p className="w-full text-neutral-900 text-opacity-80 text-base font-normal leading-snug">
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className="flex gap-[14px] mb-10">
          <div className="rounded-[100px] w-[44px] h-[44px] overflow-hidden">
            <img
              src={el.avatar_url}
              className="object-cover w-[44px] h-[44px]"
            />
          </div>
          <div>
            <GrayText className="text-xs">Your teacher</GrayText>
            <p className="text-[16px] font-medium">{el.name}</p>
          </div>
        </div>
        <h2 className="w-full text-neutral-900 leading-8 text-2xl font-medium">
          What is your main reason for learning English?
        </h2>

        <BookForm />
      </div>
    </ModalWrapper>
  );
};
