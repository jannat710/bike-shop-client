import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import App from "../App";
import Home from "../pages/Home/Home";
import Dashboard from "../components/layout/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { userPaths } from "./user.routes";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";

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
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: <Dashboard />,
    children: routeGenerator(userPaths),
  },
]);

export default router;
