import { useContext, useEffect, useState } from "react";
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
import { Favorite } from "../../helpers/ContextProvider";

export const TeacherRaitingList = ({ el }) => {
  const [favorites, setFavorites] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { favorite, setFavoriteValue } = useContext(Favorite);
  const [collectionRef, setCollectionRef] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const uid = auth.currentUser?.uid;

    if (uid) {
      setIsUser(true);
      const database = getFirestore(app);
      const favoritesCollection = collection(
        database,
        "users",
        uid,
        "favorites"
      );
      setCollectionRef(favoritesCollection);
    } else {
      setIsUser(false);
    }
  }, [isUser, favorites]);

  const toggleFavorite = async (id) => {
    if (!isUser) {
      alert("is not user");
      return;
    }
    const isFavorite = favorite.data.find((el) => el?.id === id);

    if (isFavorite) {
      await deleteDoc(doc(collectionRef, isFavorite.ref));
    } else {
      try {
        const favoriteDocRef = await addDoc(collectionRef, { ...el });
        // console.log("Favorite item added with ID: ", favoriteDocRef.id);
      } catch (error) {
        // console.error("Error adding favorite item: ", error);
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
