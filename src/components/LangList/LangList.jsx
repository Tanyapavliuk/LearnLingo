import { LangBtn } from "../../ui/LangBtn";

export const LangList = ({ data }) => {
  return (
    <ul className="flex gap-2 mt-8">
      {data.map((el, ind) => (
        <li key={ind}>
          <LangBtn
            className={`${ind === 0 ? "bg-accent border-transparent" : ""}`}
          >
            {el}
          </LangBtn>
        </li>
      ))}
    </ul>
  );
};
