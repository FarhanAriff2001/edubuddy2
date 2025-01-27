import { useState } from "react";
import { FaCogs } from "react-icons/fa";
import { MdLogout, MdAdminPanelSettings } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useAuth } from "../../context/JWTContext";
import { FiChevronDown } from "react-icons/fi"; // Importing the chevron icon
import { useNavigate } from "react-router-dom";

const Header = ({ selectedModel, setSelectedModel }) => {
  const { user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleAIModelDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (model) => {
    setSelectedModel(model); // Update selected model
    setIsOpen(false); // Close the dropdown
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4">
      <div className="relative inline-block text-left">
      </div>

      <button onClick={toggleDropdown} className="focus:outline-none flex items-center">
        {user?.photo ? (
          <img src={user.photo} alt="Profile Photo" className="w-8 h-8 rounded-full mr-2" />
        ) : (
          <HiOutlineUserCircle className="text-2xl" />
        )}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-32 w-48 bg-gray-50 border rounded shadow-lg z-10">
          <button
            className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => console.log("Settings Clicked")}
          >
            <FaCogs className="mr-2 text-gray-600" />
            <span>Settings</span>
          </button>
          <button
            className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => (
              console.log("Admin Panel Clicked"),
              navigate(`/adminPanel`)
            )}
          >
            <MdAdminPanelSettings className="mr-2 text-gray-600" />
            Admin Panel
          </button>
          <button
            className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => console.log("Logout Clicked")}
          >
            <MdLogout className="mr-2 text-gray-600" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;