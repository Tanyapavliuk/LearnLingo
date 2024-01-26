import { CommonText } from "../../ui/CommonText";
import { AccentText } from "../../ui/AccentText/AccentText";

import line from "../../assets/vector.svg";
import star from "../../assets/star.svg";
import book from "../../assets/book.svg";

export const TeacherRaitingList = ({ el }) => {
  return (
    <ul className="flex gap-4 items-center">
      <li key="Lessons" className="flex items-center gap-2">
        <img src={book} />
        <CommonText>Lessons online</CommonText>
      </li>
      <li key="edf">
        <img src={line} />
      </li>
      <li key={el.lessons_done}>
        <CommonText>Lessons done: {el.lessons_done}</CommonText>
      </li>
      <li key="eddff">
        <img src={line} />
      </li>
      <li key={el.rating} className="flex items-center gap-2">
        <img src={star} />
        <CommonText> Rating: {el.rating}</CommonText>
      </li>
      <li key="eddddff">
        <img src={line} />
      </li>
      <li key={el.price_per_hour}>
        <CommonText>
          Price / 1 hour:{" "}
          <AccentText className="text-green-500">
            {el.price_per_hour}$
          </AccentText>
        </CommonText>
      </li>
    </ul>
  );
};
