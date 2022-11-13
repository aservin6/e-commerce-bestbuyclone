import React from "react";

const MenuToggle = ({ onToggleMenu, showMenu }) => {
  return (
    // Render a button that toggles the Menu onClick
    <button onClick={onToggleMenu} className="flex items-center md:space-x-2">
      {showMenu ? (
        <i className="fa-solid fa-close text-white w-5 text-2xl hover:cursor-pointer"></i>
      ) : (
        <i className="fa-solid fa-bars text-white w-5 text-2xl hover:cursor-pointer"></i>
      )}
      <span className="hidden text-white text-lg font-bold md:block">Menu</span>
    </button>
  );
};

export default MenuToggle;
