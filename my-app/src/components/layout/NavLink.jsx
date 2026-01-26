import React from "react";

const NavLink = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-700 cursor-pointer hover:text-green-600 transition-colors font-medium flex items-center"
    >
      {children}
    </button>
  );
};

export default NavLink;
