import { useState } from "react";

import { CommonText } from "../../ui/CommonText";
import { GrayText } from "../../ui/GrayText";
import { LangList } from "../LangList";
import { TeacherRaitingList } from "../TeacherRaitingList";
import { TeacherShortInfo } from "../TeacherShortInfo";
import { TeacherMoreInfo } from "../TeacherMoreInfo";
import { Btn } from "../../ui/Btn";
import { BookLessonModal } from "../BookLessonModal";
import { createPortal } from "react-dom";

export const ListTeacherItem = ({ el }) => {
  const [more, setMore] = useState(false);
  const [book, setBook] = useState(false);
  return (
    <li className="w-full grid lg:grid-cols-[max-content_1fr] gap-5 lg:gap-[48px] p-3 lg:p-6 rounded-3xl border-2 border-accent scale-up-center">
      <div className="w-full md:grid md:grid-cols-[max-content_1fr] items-center lg:items-start  gap-10">
        <div className="grid grid-cols-[max-content_1fr] notXl:items-center lg:grid-rows-[max-content_1fr] notXl:gap-5">
          <div className="border-2 border-amber-100 p-2 lg:p-4 rounded-[100px]">
            <img
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-[100px]"
              src={el.avatar_url}
            />
          </div>
          <p className="lg:hidden text-neutral-900 text-base lg:text-2xl font-medium leading-normal">
            {el.name} {el.surname}
          </p>
        </div>
        <TeacherRaitingList el={el} className="lg:hidden" />
      </div>
      <div>
        <div className="w-full flex flex-row items-start gap-20 mb-8">
          <div className="hidden lg:flex flex-col gap-2">
            <GrayText className="smOnly:text-sm">Languages</GrayText>
            <p className="text-neutral-900 text-base lg:text-2xl font-medium leading-normal text-nowrap">
              {el.name} {el.surname}
            </p>
          </div>
          <TeacherRaitingList el={el} className="notXl:hidden" />
        </div>
        <TeacherShortInfo el={el} />
        {more ? <TeacherMoreInfo el={el} /> : null}
        <button
          className="mt-[16px] hover:scale-110 focus:scale-110"
          onClick={() => {
            setMore((more) => !more);
          }}
        >
          <CommonText className="underline hover:decoration-accent focus:decoration-accent">
            {more ? "Hide more" : "Read more"}
          </CommonText>
        </button>
        <LangList data={el.levels} />
        {more ? (
          <>
            <div onClick={() => setBook(true)}>
              <Btn className="mt-8">Book trial lesson</Btn>
            </div>
          </>
        ) : null}
        {book
          ? createPortal(
              <BookLessonModal el={el} onClose={() => setBook(false)} />,
              document.body
            )
          : null}
      </div>
    </li>
  );
};
