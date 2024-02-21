import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";
import { useEffect, useState } from "react";

import { ListTeacherItem } from "../ListTeacherItem";

const readDataFromFirestore = async (page) => {
  const database = getFirestore(app);
  const step = 4;
  const startAt = (page - 1) * step;
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
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      readDataFromFirestore(page).then((data) => setTeachers(data));
    };
    getData();
  }, [page]);

  return (
    <>
      <ul className="px-5 lg:px-20 flex flex-col gap-8">
        {teachers.map((el) => (
          <ListTeacherItem el={el} key={el.id} />
        ))}
      </ul>
    </>
  );
};
