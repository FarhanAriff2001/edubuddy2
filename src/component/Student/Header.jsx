import { useState } from "react";
import { FaCogs } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useAuth } from "../../context/JWTContext";
import { FiChevronDown } from "react-icons/fi"; // Importing the chevron icon

const Header = ({selectedModel, setSelectedModel}) => {
  const { user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          {/* Dropdown Trigger */}
          <button
            onClick={toggleAIModelDropdown}
            className="bg-gray-50 font-bold hover:bg-gray-300 py-2 px-4 rounded-md text-gray-700 flex items-center ml-8 md:ml-10 lg:ml-0"
          >
            {selectedModel} {/* Display the selected model */}
            <FiChevronDown
              className={`ml-2 w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
              {["Gemini AI", "GPT-4", "BERT"].map((model) => (
                <li key={model}>
                  <button
                    onClick={() => handleSelect(model)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {model}
                  </button>
                </li>
              ))}
            </ul>
          )}
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