import { Link } from "react-router-dom";
import ua from "../../assets/ukraine.svg";

export const Header = () => {
  return (
    <header className="flex justify-between px-10">
      <div className="flex gap-2">
        <img src={ua} />
        <p>LearnLingo</p>
      </div>
      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/teachers">Teachers</Link>
      </nav>
      <div className="flex gap-2">
        <p>Log in</p>
        <p>Registration</p>
      </div>
    </header>
  );
};
