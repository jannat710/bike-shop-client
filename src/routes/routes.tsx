import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import App from "../App";
import Home from "../pages/Home/Home";
import Dashboard from "../components/layout/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },

      {
        path: "products",
        element: <Products />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: adminPaths,
  },
]);

export default router;
