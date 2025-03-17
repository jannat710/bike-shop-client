import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

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
        key: "2-1",
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
];
const Dashboard = () => {
  return (
    <Layout className=" min-h-screen">
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
      <Layout>
        <Header />
        <Content>
          <div className="p-6 min-h-[360px]">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
