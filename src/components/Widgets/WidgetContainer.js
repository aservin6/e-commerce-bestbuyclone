import React from "react";

const WidgetContainer = ({ children }) => {
  return (
    <div className="bg-lightGray container mx-auto grid gap-6 py-6 lg:grid-cols-2 grid-rows-[min-content_1fr]">
      {children}
    </div>
  );
};

export default WidgetContainer;
