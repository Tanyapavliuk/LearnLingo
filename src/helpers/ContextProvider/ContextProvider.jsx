import { createContext, useState } from "react";

export const Favorite = createContext([]);

export const ContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  const setFavoriteValue = (value) => {
    setFavorite(value);
  };
  return (
    <Favorite.Provider value={{ favorite, setFavoriteValue }}>
      {children}
    </Favorite.Provider>
  );
};
