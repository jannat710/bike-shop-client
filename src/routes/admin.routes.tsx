import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageOrders from "../pages/admin/ManageOrders/ManageOrders";
import ManageProducts from "../pages/admin/ManageProducts/ManageProducts";
import ManageUsers from "../pages/admin/ManageUsers/ManageUsers";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Manage Users",
    children: [
      {
        name: "Manage Users",
        path: "manage-users",
        element: <ManageUsers />,
      },
    ],
  },
  {
    name: "Manage Products",
    path: "manage-products",
    element: <ManageProducts />,
  },
  {
    name: "Manage Orders",
    path: "manage-orders",
    element: <ManageOrders />,
  },
  {
    name: "Add Product",
    path: "add-products",
    element: <ManageProducts />,
  },
  {
    name: "Edit Product",
    path: "edit-product/:id",
    element: <ManageOrders />,
  },
];
