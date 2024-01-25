import ua from "../../assets/ukraine.svg";
export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={ua} alt="ua" width={28} height={28} />
      <p className="text-neutral-900 text-xl font-medium leading-normal">
        LearnLingo
      </p>
    </div>
  );
};
