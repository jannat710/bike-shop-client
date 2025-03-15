import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Admin Dashboard",
  },
  {
    key: "2",
    label: "Manage Users",
    children: [
      {
        key: "2-1",
        label: "Create Admin",
      },
      {
        key: "2-2",
        label: "Deactivate User",
      },
    ],
  },
  {
    key: "3",
    label: "Manage Products",
  },
  {
    key: "4",
    label: "Manage Orders",
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
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
