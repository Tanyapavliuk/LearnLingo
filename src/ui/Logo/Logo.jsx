import { Link } from "react-router-dom";
import ua from "../../assets/ukraine.svg";
export const Logo = () => {
  return (
    <Link to="/" className="inline-flex items-center gap-2 ">
      <img src={ua} alt="ua" width={28} height={28} />
      <p className="text-neutral-900 text-xs lg:text-xl font-medium leading-normal hover:after:content'' hover:after:block hover:after:h-[1px] hover:after:bg-accent hover:animate-line">
        LearnLingo
      </p>
    </Link>
  );
};
