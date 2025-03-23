import MyOrders from "../pages/user/MyOrders/MyOrders";
import OrderHistory from "../pages/user/OrderHistory/OrderHistory";
import TrackOrder from "../pages/user/TrackOrder/TrackOrder";
import UserDashboard from "../pages/user/UserDashboard";
import UserProfile from "../pages/user/UserProfile/UserProfile";
import UserSettings from "../pages/user/UserSettings/UserSettings";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "My Orders",
    path: "my-orders",
    element: <MyOrders />,
  },
  {
    name: "Profile",
    path: "profile",
    element: <UserProfile />,
  },
  {
    name: "Track Order",
    path: "track-order/:orderId",
    element: <TrackOrder />,
  },
  {
    name: "Order History",
    path: "order-history",
    element: <OrderHistory />,
  },
  {
    name: "User Settings",
    path: "settings",
    element: <UserSettings />,
  },
];
