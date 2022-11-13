import React from "react";
import img from "../../images/ipad.jpg";

const IPadWidget = () => {

  return (
    // Create a widget that links to a promo page
    <div className="relative bg-white border border-dark border-opacity-30 md:row-start-1 md:row-end-3">
      <img className="object-contain min-h-full" src={img} alt="" />
      <div className="flex flex-col items-center gap-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[4rem] md:-translate-y-20 xl:-translate-y-24 md:gap-2">
        <span className="text-dark text-[10px]">
          Accessories may be sold separately.
        </span>
        <a
          className="text-xs font-bold text-white bg-bestBuyBlue w-fit rounded-[4px] py-1 px-1.5 md:mx-auto md:text-sm "
          href="/ipad-promo"
        >
          Pre-Order
        </a>
      </div>
    </div>
  );
};

export default IPadWidget;
