import React from "react";

const MenuItem = ({ name, url }) => {
  return (
    // Create a list item for the urls passed into the component
    <li className="border-b border-dark border-opacity-[.15]">
      <a
        href={url}
        className="hover:text-dark py-2.5 flex justify-between items-center"
      >
        {name} <i className="fa-solid fa-caret-right pr-1"></i>
      </a>
    </li>
  );
};

export default MenuItem;
