import data from "../../db/homeFooter.json";

export const HeroFooter = () => {
  return (
    <footer className="px-[4rem] @container/footer">
      <ul className="flex justify-between @[0rem]/footer:px-[9cqw] rounded-[30px] border-accent border-dashed border-2 py-10">
        {data.map(({ value, title }, ind) => (
          <li key={title} className={`flex gap-4 items-center justify-center`}>
            <p className="text-neutral-900 tracking-tighter text-[28px] font-medium leading-loose">
              {value}
            </p>
            <p
              className={`${
                ind === 0 || ind === 1 ? "w-24" : "w-[74px]"
              } text-neutral-900 tracking-tight text-opacity-70 text-sm font-normal leading-[18px]`}
            >
              {title}
            </p>
          </li>
        ))}
      </ul>
    </footer>
  );
};
