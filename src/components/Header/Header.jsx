import { useLayoutEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";

import { Logo } from "../../ui/Logo";
import { LogInBtn } from "../../ui/LogInBtn";
import { BtnText } from "../../ui/BtnText";
import { Register } from "../Register";
import { Login } from "../Login";
import { LogOut } from "../LogOut";
import { Navigation } from "../Navigation";
import { BurgerMenu } from "../BurgerMenu";
import { createPortal } from "react-dom";
import { BtnLogReg } from "../BtnLogReg";

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
  const [showModal, setShowModal] = useState(false);

  const auth = getAuth(app);

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [auth]);

  return (
    <header className="px-5 md:px-16 lg:px-[8rem] pb-5 flex justify-between">
      <Logo />
      <div className=" hidden lg:block">
        <Navigation user={user} />
        <BtnLogReg
          user={user}
          auth={auth}
          setLogin={setLogin}
          setRegister={setRegister}
          login={login}
          register={register}
        />
      </div>

      <button className="lg:hidden" onClick={() => setShowModal(true)}>
        Open burger
      </button>
      {showModal &&
        createPortal(
          <BurgerMenu onClose={() => setShowModal(false)} user={user}>
            <BtnLogReg
              user={user}
              auth={auth}
              setLogin={setLogin}
              setRegister={setRegister}
              login={login}
              register={register}
              showModal={showModal}
              setShowModal={() => setShowModal(false)}
            />
          </BurgerMenu>,
          document.body
        )}
    </header>
  );
};
