import MainLayout from "./components/layout/MainLayout";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#e81938",
            colorBgContainer: "#1A1A1A",
          },
        }}
      >
        <MainLayout />
      </ConfigProvider>
    </>
  );
}

export default App;
