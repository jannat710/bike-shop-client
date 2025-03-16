import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
import brandImg from "../../assets/images/brandlogo.png";
import { IoIosArrowDown } from "react-icons/io";
import CustomFooter from "../CustomFooter/CustomFooter";
import { NavLink, Outlet } from "react-router-dom";

const menuItems = [
  { key: "Home", label: <NavLink to="/">Home</NavLink> },
  { key: "About Us", label: <NavLink to="/about">About Us</NavLink> },
  { key: "Products", label: <NavLink to="/products">Products</NavLink> },
  { key: "Login", label: <NavLink to="/login">Login</NavLink> },
  { key: "Register", label: <NavLink to="/register">Register</NavLink> },
];

const items = menuItems.map((item) => ({
  key: item.key,
  label: (
    <span className="flex items-center">
      {item.label} <IoIosArrowDown className="ml-2" />
    </span>
  ),
}));
const MainLayout = () => {
  return (
    <Layout className="bg-secondary min-h-screen">
      <Header
        className="bg-transparent border-b-2"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div>
          <img style={{ width: "120px" }} src={brandImg} alt="Brand Logo" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          className="bg-transparent"
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <CustomFooter />
    </Layout>
  );
};

export default MainLayout;
