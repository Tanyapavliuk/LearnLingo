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

export const TeacherRaitingList = ({ el }) => {
  const { favorite } = useContext(Favorite);
  const [inList, setInList] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [collectionRef, setCollectionRef] = useState(null);
  const [showModalNotUser, setShowModalNotUser] = useState(false);

  const auth = getAuth(app);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (uid) {
      setIsUser(true);
      const isFavorite = favorite.data.some((item) => item.data.id === el.id);
      console.log(isFavorite);

      if (isFavorite) {
        setInList(true);
      }
      if (!isFavorite) {
        setInList(false);
      }
      return;
    }
    if (!uid) {
      setIsUser(false);
      return;
    }
  }, [auth, favorite]);

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
    if (!isUser) {
      setShowModalNotUser(true);
      return;
    }

    if (isUser) {
      setIsUser(true);
      setShowModalNotUser(false);

      const isFavorite =
        favorite.data &&
        favorite.data.find((item) => {
          console.log(item.data.id);
          console.log(id);
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
      <button onClick={() => toggleFavorite(el.id)} className="hover:scale-110">
        <img
          src={inList ? addedHeart : heart}
          className={`w-[26px] h-[26px] `}
        />
      </button>
      {showModalNotUser ? (
        <AlertNotUser onClose={() => setShowModalNotUser(false)} />
      ) : null}
    </div>
  );
};
