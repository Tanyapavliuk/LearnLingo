import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";
import { useEffect, useState } from "react";
import { GrayText } from "../../ui/GrayText";
import { TeacherRaitingList } from "../TeacherRaitingList";

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
    <ul className="px-20">
      {teachers.map((el) => (
        <li
          key={el.lessons_done}
          className="grid grid-cols-[max-content_1fr] gap-[48px]"
        >
          <div className="min-content rounded-[100px] border-2 border-amber-100 p-4">
            <img className="w-24 h-24 rounded-[100px]" src={el.avatar_url} />
          </div>
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <GrayText>Languages</GrayText>
              <p className="text-neutral-900 text-2xl font-medium leading-normal">
                {el.name}
              </p>
            </div>
            <TeacherRaitingList el={el} />
          </div>
        </li>
      ))}
    </ul>
  );
};
