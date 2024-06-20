import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/add-product", element: <AddProduct /> },
  {
    path: "/edit-product/:id",
    element: <EditProduct />,
  },
  { path: "/product-detail/:id", element: <ProductDetail /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
