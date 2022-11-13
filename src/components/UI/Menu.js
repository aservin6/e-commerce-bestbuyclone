import React from "react";
import { categories } from "../../categories";
import MenuItem from "./MenuItem";

const Menu = ({ onToggleMenu }) => {
  // Filter out the categories not needed in the Menu
  const menuLinks = categories.filter((cat) => {
    return cat.type !== "promo";
  });
  return (
    <div className="h-[calc(100vh-56px)] overflow-y-scroll bg-white text-dark z-40 absolute top-14 w-screen left-0 md:top-[4.5rem] lg:top-[3.25rem] lg:-translate-x-1/2 lg:left-1/2 lg:w-[300px] lg:h-[calc(100vh-72px)] px-4">
      <i className="hidden fa-solid fa-caret-up text-white text-5xl left-1/2 -translate-x-1/2 -top-6 absolute z-50 lg:block"></i>
      <h3 className="text-dark text-lg py-2 border-b border-dark border-opacity-30">
        Shop by Department
      </h3>
      <ul className="text-[15px] text-bestBuyBlue h-screen">
        {/* Map over the menuLinks and render a list item for each link */}
        {menuLinks.map((link) => {
          return <MenuItem key={link.name} name={link.name} url={link.url} />;
        })}
        <button
        onClick={onToggleMenu}
        className="text-bestBuyBlue flex items-center space-x-2 py-2 mt-auto w-full"
      >
        <i className="fa-solid fa-close text-2xl"></i>
        <span>Close</span>
      </button>
      </ul>
      
    </div>
  );
};
export default Menu;
