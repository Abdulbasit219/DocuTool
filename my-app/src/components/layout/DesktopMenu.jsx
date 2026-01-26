import React from "react";
import NavLink from "./NavLink";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ToolsDropdown from "./ToolsDropdown";

const DesktopMenu = ({ toolsDropdownOpen, setToolsDropdownOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center gap-8">
      <NavLink onClick={() => navigate("/")}>Home</NavLink>
      <div
        className="relative"
        onMouseEnter={() => setToolsDropdownOpen(true)}
        onMouseLeave={() => setToolsDropdownOpen(false)}
      >
        <button
          onClick={() => navigate("/tools")}
          className="text-gray-700 cursor-pointer hover:text-green-600 transition-colors font-medium flex items-center gap-1"
        >
          Tools
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              toolsDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {toolsDropdownOpen && <ToolsDropdown setToolsDropdownOpen={setToolsDropdownOpen}/>}
      </div>

      <NavLink onClick={() => navigate("/about")}>About</NavLink>

      <button
        onClick={() => navigate("/tools")}
        className="cursor-pointer bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default DesktopMenu;
