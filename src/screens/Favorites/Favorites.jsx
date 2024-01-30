import { Header } from "../../components/Header/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListFavorites } from "../../components/ListFavorites";

const auth = getAuth(app);
const initValue = onAuthStateChanged(auth, (user) => {
  if (user) {
    return user;
  } else {
    return null;
  }
});

export const Favorites = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initValue);

  const auth = getAuth(app);

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/");
        setUser(null);
      }
    });
  }, [user]);

  return (
    <div className="min-h-screen grid grid-rows-[min-content_1fr_min-content] pb-8 pt-5">
      <Header />
      {/* <ListFavorites /> */}
    </div>
  );
};
