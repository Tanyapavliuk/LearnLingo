import { useLayoutEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";

import { Logo } from "../../ui/Logo";
import { Register } from "../Register";
import { Login } from "../Login";
import { Navigation } from "../Navigation";
import { BurgerMenu } from "../BurgerMenu";
import { createPortal } from "react-dom";
import { BtnLogReg } from "../BtnLogReg";

import burger from "../../assets/burger.svg";

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
    <header className="px-5 md:px-16 lg:px-[8rem] pb-5">
      <div className="hidden smd:flex justify-between">
        <Logo />
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
      <div className="flex justify-between smd:hidden">
        <Logo />
        <button onClick={() => setShowModal(true)}>
          <img src={burger} width={24} height={24} />
        </button>
      </div>

      {showModal &&
        createPortal(
          <BurgerMenu
            onClose={() => setShowModal(false)}
            user={user}
            closeClassName="w-6 h-6 top-10"
          >
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
      {register ? <Register onClose={() => setRegister(false)} /> : null}
      {login ? <Login onClose={() => setLogin(false)} /> : null}
    </header>
  );
};
