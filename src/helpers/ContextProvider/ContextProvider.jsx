import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

export const Favorite = createContext();

export const ContextProvider = ({ children }) => {
  const auth = getAuth(app);

  const [favorite, setFavorite] = useState({
    loading: true,
    data: [],
    message: "",
  });
  useEffect(() => {
    const readAllFavorites = async () => {
      try {
        console.log(auth);

        const uid = auth.currentUser?.uid;
        console.log("uid", uid);

        if (!uid) {
          setFavorite({ loading: false, data: [], message: "Please, log in" });
          return;
        }
        const database = await getFirestore(app);
        const favoritesCollection = collection(
          database,
          "users",
          uid,
          "favorites"
        );

        const unsubscribe = onSnapshot(favoritesCollection, (querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push({ ref: doc.id, data: doc.data() });
          });

          setFavorite({ loading: false, data: list, message: "Ok" });
        });

        return () => {
          unsubscribe();
        };
      } catch (error) {
        console.error("Error reading favorites:", error);
        setFavorite({ loading: false, data: [], message: "Error" });
      }
    };

    readAllFavorites();
  }, [auth]);

  const setFavoriteValue = (value) => {
    setFavorite(value);
  };
  return (
    <Favorite.Provider value={{ favorite, setFavoriteValue }}>
      {children}
    </Favorite.Provider>
  );
};
