import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./screens/Home";
import { Teachers } from "./screens/Teachers";
import { Favorites } from "./screens/Favorites";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
