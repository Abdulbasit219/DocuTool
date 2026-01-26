import React from "react";
import { Menu, X } from "lucide-react";

const MobileMenuButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <button
      className="md:hidden text-gray-700"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
};

export default MobileMenuButton;
