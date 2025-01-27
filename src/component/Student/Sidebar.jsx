import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdDashboard, MdAdd } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { IoAddSharp } from "react-icons/io5";


const Sidebar = ({passIsOpen }) => {
  const [isOpen, setIsOpen] = useState(true); // For toggling the sidebar
  const [isMobileOpen, setIsMobileOpen] = useState(false); // For mobile devices

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/chats/userchats`, {
        credentials: "include",
        body: JSON.stringify({
          userId: "user_2rzHVJFMuvGHRd07bO8oT0FzX4o" | undefined
        }),
      }).then((res) => res.json()),
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // setGlobalIsOpen(!isOpen); // Pass updated state to parent component if provided
    passIsOpen(!isOpen)
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`h-screen bg-slate-100 border-r transition-all duration-300
        ${isOpen ? "w-64" : "w-14"}
        fixed top-0 left-0 z-10 hidden lg:flex flex-col`}
      >
        {/* Header Section with Toggle Button */}
        <div className="flex items-center justify-between p-4 bg-slate-100 text-white">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none text-xl text-stone-500"
          >
            <FaBars />
          </button>
          <span
            className={`font-bold text-lg transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"
              }`}
          >
          </span>
        </div>

        {/* Menu Items */}
        <ul className="flex-1 mt-4">
          <Link className="mb-3" to="/dashboard">
            <button
              className="px-4 py-2 hover:bg-blue-100 flex items-center gap-2"
            >
              <MdAdd className="text-xl flex-shrink-0" />
              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-200 ease-in-out ${isOpen ? "max-w-full opacity-100" : "max-w-0 opacity-0"}`}
              >
                New Chat
              </span>
            </button>
          </Link>
          <Link className="mb-3" to="/workspace">
            <button
              className="px-4 py-2 hover:bg-blue-100 flex items-center gap-2"
            >
              <MdDashboard className="text-xl flex-shrink-0" />
              <span
                className={`overflow-hidden whitespace-nowrap transition-all duration-200 ease-in-out ${isOpen ? "max-w-full opacity-100" : "max-w-0 opacity-0"}`}
              >
                Workspace
              </span>
            </button>
          </Link>
          <hr />
          <div className="px-4 mt-3 font-semibold text-sm">Recent Chats</div>
          <div className="list">
            {isPending
              ? "Loading..."
              : error
                ? "Something went wrong!"
                : data?.map((chat) => (
                  <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                    {chat.title}
                  </Link>
                ))}
          </div>
        </ul>


        {/* Recent Chats Sections */}
        <div className="chatList">
          <hr />

          <hr />
        </div>

        {/* Footer Section */}
        <div
          className={`p-4 text-sm text-gray-500 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
        >
        </div>
      </div>


      {/* Mobile Sidebar */}
      <div>
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden bg-blue-600 text-white p-2 fixed top-2 left-2 z-50 rounded-full"
        >
          <FaBars className="text-xl" />
        </button>

        <div
          className={`h-screen bg-gray-100 border-r fixed top-0 left-0 z-40 transform transition-transform duration-300 
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} w-64`}
        >
          {/* Header Section */}
          <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
            <span className="font-bold text-lg"></span>
            <button
              onClick={toggleMobileSidebar}
              className="focus:outline-none text-xl hidden lg:block"
            >
              <FaBars />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex-1 mt-4">
            <li>
              <Link
                to="/"
                className="px-4 py-2 hover:bg-blue-100 flex items-center gap-2"
                onClick={toggleMobileSidebar} // Close on navigation
              >
                Dashboard
              </Link>
            </li>
          </ul>

          {/* Footer */}
          <div className="p-4 text-sm text-gray-500">© 2025 BordUp™</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
