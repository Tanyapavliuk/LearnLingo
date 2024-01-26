import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";

export const ListTeachers = () => {
  const readDataFromFirestore = async () => {
    const db = getFirestore(app);
    const dataCollection = collection(db, "teachers");

    try {
      const querySnapshot = await getDocs(dataCollection);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (error) {
      console.error("Помилка при читанні даних:", error);
    }
  };
  readDataFromFirestore();
  return <ul></ul>;
};
