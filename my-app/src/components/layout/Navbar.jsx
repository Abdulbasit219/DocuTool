import React, { useState } from "react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopMenu
            toolsDropdownOpen={toolsDropdownOpen}
            setToolsDropdownOpen={setToolsDropdownOpen}
          />
          <MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
    </nav>
  );
};

export default Navbar;
