import { app } from "../../firebase";
import { useContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { ListTeacherItem } from "../ListTeacherItem";
import { Favorite } from "../../helpers/ContextProvider";
import { CommonText } from "../../ui/CommonText";

import image from "../../assets/addedHeart.svg";

export const ListFavorites = () => {
  const [favoritesList, setFavoritesList] = useState([]);

  const { favorite } = useContext(Favorite);
  useEffect(() => {
    setFavoritesList(() => favorite.data);
  }, [favorite]);

  const getData = async () => {
    let favoritesList = [];
    const auth = getAuth(app);
    const uid = auth.currentUser?.uid;
    if (uid) {
      const database = getFirestore(app);
      const favoritesCollection = collection(
        database,
        "users",
        uid,
        "favorites"
      );

      try {
        const querySnapshot = await getDocs(favoritesCollection);
        querySnapshot.forEach((doc) => {
          favoritesList.push({ ref: doc.id, data: doc.data() });
        });
      } catch (error) {
        console.error("Помилка при читанні даних:", error);
      }
    }

    return favoritesList;
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setFavoritesList(data);
    };

    fetchData();
  }, []);

  return (
    <ul className="px-20 flex flex-col gap-8">
      {favoritesList.length > 0 ? (
        favoritesList.map((favorite) => (
          <ListTeacherItem key={favorite.ref} el={favorite.data} />
        ))
      ) : (
        <li>
          <CommonText>
            While there are no favorites, add them by clicking on the heart
          </CommonText>
          <img src={image} width={50} height={50} />
        </li>
      )}
    </ul>
  );
};
