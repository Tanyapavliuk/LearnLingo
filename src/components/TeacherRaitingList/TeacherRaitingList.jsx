import { useEffect, useState } from "react";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";

import { CommonText } from "../../ui/CommonText";
import { AccentText } from "../../ui/AccentText/AccentText";

import line from "../../assets/vector.svg";
import star from "../../assets/star.svg";
import book from "../../assets/book.svg";
import heart from "../../assets/heart.svg";
import addedHeart from "../../assets/addedHeart.svg";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const TeacherRaitingList = ({ el }) => {
  const [favorites, setFavorites] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);
  const [isUser, setIsUser] = useState(false);

  const auth = getAuth(app);
  const uid = auth.currentUser?.uid;
  const database = getFirestore(app);
  const favoritesCollection = collection(database, "users", uid, "favorites");

  const getData = async () => {
    let favoritesList = [];

    if (uid) {
      setIsUser(true);
    }

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
    getData().then((data) => setFavoritesList(data));
  }, []);

  const toggleFavorite = async (id) => {
    if (!isUser) {
      alert("is not user");
      return;
    }
    const isFavorite = favoritesList.find((el) => el.data?.id === id);

    if (isFavorite) {
      await deleteDoc(doc(favoritesCollection, isFavorite.ref));

      setFavoritesList((state) => {
        return state.filter((el) => {
          el.data.id === id;
        });
      });
    } else {
      try {
        const favoriteDocRef = await addDoc(favoritesCollection, { ...el });
        setFavoritesList((prevState) => [
          ...prevState,
          { data: el, ref: favoriteDocRef.id },
        ]);
        console.log("Favorite item added with ID: ", favoriteDocRef.id);
      } catch (error) {
        console.error("Error adding favorite item: ", error);
      }
    }
  };

  return (
    <div className="flex gap-[64px]">
      <ul className="flex gap-4 items-center">
        <li key="Lessons" className="flex items-center gap-2">
          <img src={book} />
          <CommonText>Lessons online</CommonText>
        </li>
        <li key="edf">
          <img src={line} />
        </li>
        <li key={el.lessons_done}>
          <CommonText>Lessons done: {el.lessons_done}</CommonText>
        </li>
        <li key="eddff">
          <img src={line} />
        </li>
        <li key={el.rating} className="flex items-center gap-2">
          <img src={star} />
          <CommonText> Rating: {el.rating}</CommonText>
        </li>
        <li key="eddddff">
          <img src={line} />
        </li>
        <li key={el.price_per_hour}>
          <CommonText>
            Price / 1 hour:{" "}
            <AccentText className="text-green-500">
              {el.price_per_hour}$
            </AccentText>
          </CommonText>
        </li>
      </ul>
      <button
        onClick={() => {
          setFavorites((favorites) => {
            if (isUser) {
              return !favorites;
            }
          });
        }}
      >
        <img
          src={isUser && favorites ? addedHeart : heart}
          className={`w-[26px] h-[26px] `}
          onClick={() => toggleFavorite(el.id)}
        />
      </button>
    </div>
  );
};
