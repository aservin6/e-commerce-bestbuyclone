import React from "react";
import CartButton from "../Cart/CartButton";
import BrandLogo from "../UI/BrandLogo";
import MenuToggle from "../UI/MenuToggle";
import SearchBar from "../UI/SearchBar";
import Menu from "../UI/Menu";
import BackdropPortal from "../UI/BackdropPortal";

const Navbar = ( {onToggleMenu, showMenu }) => {

  return (
    // Create a Navbar that displays the BrandLogo, a toggleable Menu button, SearchBar, and CartButton
    <nav className="sticky left-0 top-0 z-40 bg-bestBuyBlue">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto md:gap-10">
        <BrandLogo />
        <div className="relative">
          <MenuToggle
            onToggleMenu={onToggleMenu}
            showMenu={showMenu}
          />
          <div className="hidden lg:block">
            {showMenu && <Menu onToggleMenu={onToggleMenu} />}
            {showMenu && <BackdropPortal onToggleMenu={onToggleMenu} />}
          </div>
        </div>
        <div className="lg:hidden overflow-y-scroll">
          {showMenu && <Menu onToggleMenu={onToggleMenu} />}
          {showMenu && <BackdropPortal onToggleMenu={onToggleMenu} />}
        </div>
        <SearchBar />
        <CartButton />
      </div>
    </nav>
  );
};

export default Navbar;
