import React from "react";
import { createPortal } from "react-dom";

const Backdrop = ({ onToggleMenu }) => {
  return (
    // Backdrop component, displays the grayed out background when the Menu is shown
    <div
      onClick={onToggleMenu}
      className="fixed top-0 left-0 w-full h-screen z-10 bg-dark bg-opacity-50"
    ></div>
  );
};

const MenuPortal = ({ onToggleMenu }) => {
  return (
    <>
      {/* Creates a portal that exists in "backdrop-root" instead of the default "root" */}
      {createPortal(
        <Backdrop onToggleMenu={onToggleMenu} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default MenuPortal;
