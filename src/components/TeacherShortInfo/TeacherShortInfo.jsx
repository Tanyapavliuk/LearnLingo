import { GrayText } from "../../ui/GrayText";
import { CommonText } from "../../ui/CommonText";

export const TeacherShortInfo = ({ el }) => {
  return (
    <ul className="flex flex-col gap-2">
      <li className="flex gap-1">
        <GrayText>Speaks:</GrayText>
        {el.languages.map((el, ind) => (
          <CommonText key={ind} className="underline decoration-gray">
            {el}
          </CommonText>
        ))}
      </li>
      <li className="flex gap-1">
        <GrayText>Lesson Info:</GrayText>
        <CommonText>{el.lesson_info}</CommonText>
      </li>
      <li className="flex gap-1">
        <GrayText>Conditions:</GrayText>
        {el.conditions.map((el, ind) => (
          <CommonText key={ind}>{el}</CommonText>
        ))}
      </li>
    </ul>
  );
};
