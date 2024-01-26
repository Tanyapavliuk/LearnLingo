import { initializeApp } from "firebase/app";

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "learnlingo-2aa37.firebaseapp.com",
  projectId: "learnlingo-2aa37",
  storageBucket: "learnlingo-2aa37.appspot.com",
  messagingSenderId: "698377611167",
  appId: "1:698377611167:web:043cd841585bdf3d75bfaa",
};

export const app = initializeApp(firebaseConfig);
