import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import HomePage from "../pages/Home/HomePage";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Menu from "../pages/MenuListing/Menu";
import DetailPage from "../pages/FooddetailPage/DetailPage";
import CartPage from "../pages/cart/CartPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "foodDetail/:id",
        element: <DetailPage />,
      },
      {
        path: "orders",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
