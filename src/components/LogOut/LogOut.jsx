import { getAuth } from "firebase/auth";
import { app } from "../../firebase.js";

export const LogOut = () => {
  const auth = getAuth(app);
  return (
    <button
      onClick={() => {
        try {
          auth.signOut().then(console.log(auth));
        } catch (error) {
          console.log(error);
        }
      }}
      className="w-[166px] h-12 px-[39px] py-3.5 bg-accent  hover:bg-btnHover hover:shadow rounded-xl justify-center items-center gap-2 inline-flex"
    >
      <p className="text-bold">Sign out</p>
    </button>
  );
};
