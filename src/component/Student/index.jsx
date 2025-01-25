import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Workspace from "../../page/Student/Workspace";

const Layout = () => {
  const [selectedModel, setSelectedModel] = useState("Gemini AI");
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);

  const closeDashboard = () => {
    setIsDashboardVisible(false);
    setIsDashboardVisibleProps(false);
  };
  
  return (
    <div className="flex">
      <Sidebar setIsDashboardVisibleProps={setIsDashboardVisible} />
      <div className="flex-1 flex flex-col">
        <Header selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
        <main className="p-6 bg-gray-50 flex-1">
          <Outlet context={{ selectedModel, setSelectedModel }} />
        </main>
  
        <Workspace isVisible={isDashboardVisible} closeDashboard={closeDashboard} />
      </div>
    </div>
  )
};

export default Layout;
