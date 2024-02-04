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
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Favorite } from "../../helpers/ContextProvider";
import { AlertNotUser } from "../AlertNotUser";

export const TeacherRaitingList = ({ className = "", el }) => {
  const auth = getAuth(app);
  const isUserCheck = () => {
    const uid = auth.currentUser?.uid;
    if (uid) {
      return true;
    }
    if (!uid) {
      return false;
    }
  };

  const { favorite } = useContext(Favorite);
  const [inList, setInList] = useState(false);
  const [isUser, setIsUser] = useState(isUserCheck);
  const [collectionRef, setCollectionRef] = useState(null);
  const [showModalNotUser, setShowModalNotUser] = useState(false);

  useEffect(() => {
    if (isUser) {
      const isFavorite = favorite.data.some((item) => item.data.id === el.id);

      if (isFavorite) {
        setInList(true);
      }
      if (!isFavorite) {
        setInList(false);
      }
      return;
    }
  }, [isUser, favorite]);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (uid) {
      const database = getFirestore(app);
      const favoritesCollection = collection(
        database,
        "users",
        uid,
        "favorites"
      );
      setCollectionRef(favoritesCollection);
    }
  }, [auth]);

  const toggleFavorite = async (id) => {
    if (!auth.currentUser) {
      setIsUser(false);
      setShowModalNotUser(true);
      return;
    }
    if (auth.currentUser !== null && auth.currentUser.uid) {
      setIsUser(true);
      setShowModalNotUser(false);
      const isFavorite =
        favorite.data &&
        favorite.data.find((item) => {
          return item.data?.id === id;
        });

      if (isFavorite) {
        setInList(true);
        await deleteDoc(doc(collectionRef, isFavorite.ref));
        setInList(false);
      } else {
        try {
          await addDoc(collectionRef, { ...el });
          setInList(true);
        } catch (error) {}
      }
    }
  };

  return (
    <div className={`w-full flex justify-between lg:gap-[64px] ${className}`}>
      <ul className="grid grid-cols-2  grid-rows-2 md:flex gap-2 lg::gap-4 items-center">
        <li key="Lessons" className="flex items-center gap-2">
          <img src={book} />
          <CommonText className="text-nowrap">Lessons online</CommonText>
        </li>
        <li key="edf" className="hidden md:block">
          <img src={line} />
        </li>
        <li key={el.lessons_done}>
          <CommonText className="text-nowrap">
            Lessons done: {el.lessons_done}
          </CommonText>
        </li>
        <li key="eddff" className="hidden md:block">
          <img src={line} />
        </li>
        <li key={el.rating} className="flex items-center gap-2">
          <img src={star} />
          <CommonText className="text-nowrap"> Rating: {el.rating}</CommonText>
        </li>
        <li key="eddddff" className="hidden md:block">
          <img src={line} />
        </li>
        <li key={el.price_per_hour}>
          <CommonText className="text-nowrap">
            Price / 1 hour:{" "}
            <AccentText className="text-green-500">
              {el.price_per_hour}$
            </AccentText>
          </CommonText>
        </li>
      </ul>
      <button
        onClick={() => toggleFavorite(el.id)}
        className="hover:animate-ping"
      >
        <img
          src={inList ? addedHeart : heart}
          className={`w-[26px] h-[26px]`}
        />
      </button>
      {showModalNotUser ? (
        <AlertNotUser onClose={() => setShowModalNotUser(false)} />
      ) : null}
    </div>
  );
};
