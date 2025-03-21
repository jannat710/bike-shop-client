import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout className=" min-h-screen">
      <Sidebar />
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
