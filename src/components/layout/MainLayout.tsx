import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
import brandImg from "../../assets/images/brandlogo.png";
import { AiFillCaretDown } from "react-icons/ai";
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
    <span className="flex items-center justify-center">
      {item.label} <AiFillCaretDown className="ml-2" />
    </span>
  ),
}));
const MainLayout = () => {
  return (
    <Layout className="bg-secondary min-h-screen">
      <Header className="bg-transparent border-b-2 flex items-center">
        <div>
          <img className="w-32" src={brandImg} alt="Brand Logo" />
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
      <Content className="px-12">
        <div className="p-6 min-h-[360px]">
          <Outlet />
        </div>
      </Content>
      <CustomFooter />
    </Layout>
  );
};

export default MainLayout;
