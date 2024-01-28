import { useLayoutEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";

import { Logo } from "../../ui/Logo";
import { StyledLink } from "../../ui/Link";
import { LogInBtn } from "../../ui/LogInBtn";
import { BtnText } from "../../ui/BtnText";
import { Register } from "../Register";
import { Login } from "../Login";
import { LogOut } from "../LogOut";

const auth = getAuth(app);
const initValue = onAuthStateChanged(auth, (user) => {
  if (user) {
    return user;
  } else {
    return null;
  }
});

export const Header = () => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(initValue);

  const auth = getAuth(app);

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  return (
    <header className="px-[8rem] pb-5 flex justify-between">
      <Logo />
      <nav className="flex gap-[1.75rem] items-center">
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

      {user === null && (
        <div className="flex gap-4">
          <button onClick={() => setLogin((state) => !state)}>
            <LogInBtn>Log in</LogInBtn>
          </button>
          <button
            onClick={() => setRegister((state) => !state)}
            className="w-[166px] h-12 px-[39px] py-3.5 bg-neutral-900 rounded-xl justify-center items-center gap-2 inline-flex"
          >
            <BtnText className="text-white">Registration</BtnText>
          </button>

          {register ? <Register onClose={() => setRegister(false)} /> : null}
          {login ? <Login onClose={() => setLogin(false)} /> : null}
        </div>
      )}
      {user !== null && (
        <div className="flex gap-4 items-center">
          <p>
            {auth.currentUser === null
              ? "anonimus"
              : auth.currentUser.displayName}
          </p>
          <LogOut />
        </div>
      )}
    </header>
  );
};
