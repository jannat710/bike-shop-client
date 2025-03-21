import MyOrders from "../pages/user/MyOrders/MyOrders";
import UserDashboard from "../pages/user/UserDashboard";
import UserProfile from "../pages/user/UserProfile/UserProfile";

export const userPaths = [
  {
    path: "user-dashboard",
    element: <UserDashboard />,
  },
  {
    path: "my-orders",
    element: <MyOrders />,
  },
  {
    path: "profile",
    element: <UserProfile />,
  },
];
