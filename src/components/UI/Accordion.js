import React from "react";

const Accordion = ({ title, content, object, id }) => {
  return (
    // Create a collapsable accordion that displays the contents and title passed to the component
    <div className="border-t collapse border-dark border-opacity-30 text-dark">
      <label htmlFor={id}></label>
      <input id={id} type="checkbox" />
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
        <div className="space-y-2 collapse-content">
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
