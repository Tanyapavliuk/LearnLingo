import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";
import { useEffect, useState } from "react";

import { ListTeacherItem } from "../ListTeacherItem";

const readDataFromFirestore = async () => {
  const db = getFirestore(app);
  const dataCollection = collection(db, "teachers");
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

  useEffect(() => {
    const getData = async () => {
      readDataFromFirestore().then((data) => setTeachers(data));
    };
    getData();
  }, []);

  console.log(teachers);

  return (
    <ul className="px-20 flex flex-col gap-8">
      {teachers.map((el) => (
        <ListTeacherItem el={el} key={el.id} />
      ))}
    </ul>
  );
};
