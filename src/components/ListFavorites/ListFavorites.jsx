import { app } from "../../firebase";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { ListTeacherItem } from "../ListTeacherItem";

export const ListFavorites = () => {
  const [favoritesList, setFavoritesList] = useState([]);

  const auth = getAuth(app);
  const uid = auth.currentUser?.uid;
  const database = getFirestore(app);
  const favoritesCollection = collection(database, "users", uid, "favorites");

  const getData = async () => {
    let favoritesList = [];

    try {
      const querySnapshot = await getDocs(favoritesCollection);
      querySnapshot.forEach((doc) => {
        favoritesList.push({ ref: doc.id, data: doc.data() });
      });
    } catch (error) {
      console.error("Помилка при читанні даних:", error);
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

  console.log(favoritesList);

  return (
    <ul className="px-10">
      {favoritesList.map((favorite) => (
        <ListTeacherItem key={favorite.ref} el={favorite.data} />
      ))}
    </ul>
  );
};
