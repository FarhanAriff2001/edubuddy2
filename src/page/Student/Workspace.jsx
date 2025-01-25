import React from 'react'

const Workspace = ({ isVisible, closeDashboard }) => {

    return (
        <div
          className={`fixed top-0 right-0 w-1/2 h-full bg-white transition-transform duration-300 ${
            isVisible ? "transform translate-x-0" : "transform translate-x-full"
          }`}
          style={{
            width: `calc(100% - ${"16rem"})`,
          }}
        >
          <button
            onClick={closeDashboard}
            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
          <h1 className="p-8">Dashboard</h1>
          {/* Your dashboard content */}
        </div>
      );
}

export default Workspace;
