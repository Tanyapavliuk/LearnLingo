import { useState } from "react";

import { CommonText } from "../../ui/CommonText";
import { GrayText } from "../../ui/GrayText";
import { LangList } from "../LangList";
import { TeacherRaitingList } from "../TeacherRaitingList";
import { TeacherShortInfo } from "../TeacherShortInfo";
import { TeacherMoreInfo } from "../TeacherMoreInfo";
import { Btn } from "../../ui/Btn";
import { BookLessonModal } from "../BookLessonModal";

export const ListTeacherItem = ({ el }) => {
  const [more, setMore] = useState(false);
  const [book, setBook] = useState(false);
  return (
    <li className="grid grid-cols-[max-content_1fr] gap-[48px] p-6 rounded-3xl border-2 border-accent">
      <div className="grid grid-rows-[max-content_1fr] ">
        <div className="border-2 border-amber-100 p-4 rounded-[100px]">
          <img className="w-24 h-24 rounded-[100px]" src={el.avatar_url} />
        </div>
      </div>
      <div>
        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col gap-2">
            <GrayText>Languages</GrayText>
            <p className="text-neutral-900 text-2xl font-medium leading-normal">
              {el.name} {el.surname}
            </p>
          </div>
          <TeacherRaitingList el={el} />
        </div>
        <TeacherShortInfo el={el} />
        {more ? <TeacherMoreInfo el={el} /> : null}
        <button
          className="mt-[16px] hover:scale-110"
          onClick={() => {
            setMore((more) => !more);
          }}
        >
          <CommonText className="underline hover:decoration-accent">
            {more ? "Hide more" : "Read more"}
          </CommonText>
        </button>
        <LangList data={el.levels} />
        {more ? (
          <>
            <button onClick={() => setBook(true)}>
              <Btn className="mt-8">Book trial lesson</Btn>
            </button>
          </>
        ) : null}
        {book ? (
          <BookLessonModal el={el} onClose={() => setBook(false)} />
        ) : null}
      </div>
    </li>
  );
};
