import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Wrapper = ({ children, bgColor }) => {
  // Store the whether the menu is visible in some state
  const [showMenu, setShowMenu] = useState(false);
  // Create a function that toggles the showMenu state
  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  // Create a Wrapper component that can be used for most pages
  return (
    <div
      className={showMenu ? `${bgColor} font-primary h-screen overflow-x-hidden overflow-y-hidden` : `${bgColor} font-primary h-screen overflow-x-hidden`}
    >
      <Navbar onToggleMenu={toggleMenu} showMenu={showMenu} />
      <main>{children}</main>
    </div>
  );
};

export default Wrapper;
