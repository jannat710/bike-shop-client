import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageOrders from "../pages/admin/ManageOrders/ManageOrders";
import ManageProducts from "../pages/admin/ManageProducts/ManageProducts";
import ManageUsers from "../pages/admin/ManageUsers/ManageUsers";

export const adminPaths = [
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
  {
    path: "add-products",
    element: <ManageProducts />,
  },
  {
    path: "edit-product/:id",
    element: <ManageOrders />,
  },
];
