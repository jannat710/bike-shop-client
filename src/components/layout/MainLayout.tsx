import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content } = Layout;
import brandImg from "../../assets/images/brandlogo.png";
import { IoIosArrowDown } from "react-icons/io";
import CustomFooter from "../CustomFooter/CustomFooter";

const menuItems = [
  { key: "1", label: "Home" },
  { key: "2", label: "About Us" },
  { key: "3", label: "Products" },
  { key: "4", label: "Login" },
  { key: "5", label: "Register" },
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
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          Content
        </div>
      </Content>
      <CustomFooter />
    </Layout>
  );
};

export default MainLayout;
