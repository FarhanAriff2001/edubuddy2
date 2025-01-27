import React, {useState} from 'react'
import FileManagement from './Workspace/Document';
import Dashboard from './Workspace/Dashboard';
import NotificationTab from './Workspace/Notification';
import TokenUsageTab from './Workspace/TokenUsage';

const Workspace = () => {

  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    { name: "Dashboard", content: <Dashboard/>  },
    { name: "Document", content: <FileManagement/> },
    { name: "Notification", content: <NotificationTab/> },
    // { name: "Token", content: <TokenUsageTab/> }
  ];


    return (
      <div className="w-full py-1">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.name
                  ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              {/* {tab.icon} */}
              <span className="ml-2">{tab.name}</span>
            </button>
          ))}
        </div>
  
        <div className="p-2">
          {tabs.map(
            (tab) =>
              activeTab === tab.name && (
                <div key={tab.name} className="text-gray-800 dark:text-white">
                  <span className="font-medium">
                    {tab.content}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
    );
}

export default Workspace;
