import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";
import { useContext, useEffect, useState } from "react";

import { ListTeacherItem } from "../ListTeacherItem";
import { getAuth } from "firebase/auth";
import { Favorite } from "../../helpers/ContextProvider";

const readDataFromFirestore = async () => {
  const database = getFirestore(app);
  const dataCollection = collection(database, "teachers");
  let teachers = [];

  try {
    const querySnapshot = await getDocs(dataCollection);
    querySnapshot.forEach((doc) => {
      teachers.push(doc.data());
    });
  } catch (error) {
    console.error("Помилка при читанні даних:", error);
  }

  return teachers;
};
const readAllFavorites = async () => {
  let favoritesList = [];
  const auth = getAuth(app);
  const database = getFirestore(app);
  const uid = auth.currentUser?.uid;
  const favoritesCollection = collection(database, "users", uid, "favorites");

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

export const ListTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const { setFavoriteValue } = useContext(Favorite);

  useEffect(() => {
    const getData = async () => {
      readDataFromFirestore().then((data) => setTeachers(data));
      readAllFavorites().then((data) => setFavoriteValue(data));
    };
    getData();
  }, []);

  return (
    <ul className="px-20 flex flex-col gap-8">
      {teachers.map((el) => (
        <ListTeacherItem el={el} key={el.id} />
      ))}
    </ul>
  );
};
