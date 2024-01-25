import { Link } from "react-router-dom";

import { Logo } from "../../ui/Logo";
import { StyledLink } from "../../ui/Link";
import { LogInBtn } from "../../ui/LogInBtn";
import { BtnText } from "../../ui/BtnText";

export const Header = () => {
  return (
    <header className="px-[8rem] py-5 flex justify-between">
      <Logo />
      <nav className="flex gap-[1.75rem] items-center">
        <Link to="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link to="/teachers">
          <StyledLink>Teachers</StyledLink>
        </Link>
      </nav>
      <div className="flex gap-4">
        <LogInBtn>Log in</LogInBtn>
        <button className="w-[166px] h-12 px-[39px] py-3.5 bg-neutral-900 rounded-xl justify-center items-center gap-2 inline-flex">
          <BtnText className="text-white">Registration</BtnText>
        </button>
      </div>
    </header>
  );
};
