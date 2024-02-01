import { NavLink } from "react-router-dom";
import { StyledLink } from "../../ui/Link";

export const Navigation = ({ className = "", user }) => {
  return (
    <nav className={`flex gap-2 lg:gap-[1.75rem] items-center ${className}`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "underline decoration-accent" : ""
        }
      >
        <StyledLink>Home</StyledLink>
      </NavLink>
      <NavLink
        to="/teachers"
        className={({ isActive }) =>
          isActive ? "underline decoration-accent" : ""
        }
      >
        <StyledLink>Teachers</StyledLink>
      </NavLink>
      {user ? (
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "underline decoration-accent" : ""
          }
        >
          <StyledLink>Favorites</StyledLink>
        </NavLink>
      ) : null}
    </nav>
  );
};
