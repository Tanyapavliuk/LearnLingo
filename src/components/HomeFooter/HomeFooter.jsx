import data from "../../db/homeFooter.json";

export const HeroFooter = () => {
  return (
    <footer className="mx-4 lg:px-[4rem] @container/footer">
      <ul className="grid md:grid-cols-2 md:grid-rows-2 gap-y-3 lg:flex lg:justify-between @[0rem]/footer:px-[9cqw] rounded-[30px] border-accent border-dashed border-2 py-10">
        {data.map(({ value, title }, ind) => (
          <li key={title} className={`flex gap-4 items-center justify-center`}>
            <p className="text-neutral-900 tracking-tighter text-nowrap text-sm md:text-xl lg:text-[28px] font-medium leading-loose">
              {value}
            </p>
            <p
              className={`${
                ind === 0 || ind === 1 ? "w-24" : "w-[74px]"
              } text-neutral-900 tracking-tight text-opacity-70 t text-sm font-normal leading-[18px]`}
            >
              {title}
            </p>
          </li>
        ))}
      </ul>
    </footer>
  );
};
