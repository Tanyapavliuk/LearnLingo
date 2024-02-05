import { BtnText } from "../../ui/BtnText";
import { LogInBtn } from "../../ui/LogInBtn";
import { LogOut } from "../LogOut";
import { Login } from "../Login";
import { Register } from "../Register";

export const BtnLogReg = ({
  user,
  auth,
  register,
  login,
  setLogin,
  setRegister,
  showModal,
  setShowModal,
}) => {
  return (
    <>
      {user === null && (
        <div className="flex gap-4">
          <button
            onClick={() => {
              if (showModal) setShowModal();
              setLogin((state) => !state);
            }}
          >
            <LogInBtn>Log in</LogInBtn>
          </button>
          <button
            onClick={() => {
              if (showModal) setShowModal();
              setRegister((state) => !state);
            }}
            className="w-[166px] h-12 px-[39px] py-3.5 bg-neutral-900 rounded-xl justify-center items-center gap-2 inline-flex"
          >
            <BtnText className="text-white">Registration</BtnText>
          </button>

          {register ? <Register onClose={() => setRegister(false)} /> : null}
          {login ? <Login onClose={() => setLogin(false)} /> : null}
        </div>
      )}
      {user !== null && (
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <p>
            {auth.currentUser === null
              ? "anonimus"
              : auth.currentUser.displayName}
          </p>
          <LogOut />
        </div>
      )}
    </>
  );
};
