import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter([
  { path: "/", element: <h1>Hello world</h1> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/add-product", element: <AddProduct /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
