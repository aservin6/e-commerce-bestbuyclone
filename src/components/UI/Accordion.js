import React from "react";

const Accordion = ({ title, content, object }) => {
  return (
    // Create a collapsable accordion that displays the contents and title passed to the component
    <div className="collapse border-t border-dark border-opacity-30 text-dark">
      <input type="checkbox" />
      <div className="collapse-title text-base font-bold flex justify-between md:text-lg xl:text-[25px]">
        <span>{title}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {content && (
        <div className="collapse-content">
          <p className="border-dark text-[13px]">{content}</p>
        </div>
      )}
      {object && (
        <div className="collapse-content space-y-2">
          {object.map((item, index) => {
            return (
              <p className="text-xs border-dark md:text-sm" key={index}>{item.includedItem}</p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
