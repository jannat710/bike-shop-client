import { Layout, Menu, MenuProps } from "antd";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;
const items: MenuProps["items"] = [
  {
    key: "Admin Dashboard",
    label: <NavLink to="/admin/admin-dashboard">Admin Dashboard</NavLink>,
  },
  {
    key: "Manage Users",
    label: "Manage Users",
    children: [
      {
        key: "Manage Users",
        label: <NavLink to="/admin/manage-users">Deactivate User</NavLink>,
      },
    ],
  },
  {
    key: "Manage Products",
    label: <NavLink to="/admin/manage-products">Manage Products</NavLink>,
  },
  {
    key: "Manage Orders",
    label: <NavLink to="/admin/manage-orders">Manage Orders</NavLink>,
  },
  //User
  {
    key: "User Dashboard",
    label: <NavLink to="/user/user-dashboard">User Dashboard</NavLink>,
  },
  {
    key: "My Orders",
    label: <NavLink to="/user/my-orders">View Orders</NavLink>,
  },
  {
    key: "Profile",
    label: <NavLink to="/user/profile">Manage Profile</NavLink>,
  },
  {
    key: "Track Order",
    label: <NavLink to="/user/track-order/:orderId">Track My Order</NavLink>,
  },
  {
    key: "Order History",
    label: <NavLink to="/user/order-history">Order History</NavLink>,
  },
  {
    key: "Settings",
    label: <NavLink to="/dashboard/settings">Settings</NavLink>,
  },
  //Admin
  {
    key: "Add Product",
    label: <NavLink to="/admin/add-products">Add New Product</NavLink>,
  },
  {
    key: "Edit Product",
    label: <NavLink to="/admin/edit-product/:id">Edit Product</NavLink>,
  },
];
const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
