import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

export const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/teachers">teachers</Link>
        <Link to="/favorites">favorites</Link>
      </nav>

      <p>Home</p>
    </div>
  );
};
