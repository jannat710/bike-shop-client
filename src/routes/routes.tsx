import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import App from "../App";
import Home from "../pages/Home/Home";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Dashboard from "../components/layout/Dashboard";
import ManageUsers from "../pages/admin/ManageUsers/ManageUsers";
import ManageProducts from "../pages/admin/ManageProducts/ManageProducts";
import ManageOrders from "../pages/admin/ManageOrders/ManageOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    children: [
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "manage-orders",
        element: <ManageOrders />,
      },
    ],
  },
]);

export default router;
