import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";
import { useContext, useEffect, useState } from "react";

import { ListTeacherItem } from "../ListTeacherItem";
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

export const ListTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const { favorite } = useContext(Favorite);

  useEffect(() => {
    const getData = async () => {
      readDataFromFirestore().then((data) => setTeachers(data));
    };
    console.log(favorite);
    getData();
  }, [favorite]);

  return (
    <ul className="px-20 flex flex-col gap-8">
      {teachers.map((el) => (
        <ListTeacherItem el={el} key={el.id} />
      ))}
    </ul>
  );
};
