import React from "react";
import img from "../../images/clearance-banner.jpg";

const OutletDealsWidget = () => {
  // Render a widget that links to the Outlet Deals promo page
  return (
    <div className="flex flex-col justify-between p-5 space-y-4 bg-white border border-dark border-opacity-30 md:space-y-0">
      <div className="bg-bestBuyBlue w-fit px-1.5 py-1">
        <span className="font-bold text-bestBuyYellow">Outlet </span>
        <span className="font-bold text-white">Deals</span>
      </div>
      <a href="/outlet-deals" aria-label="link to outlet deals">
        <img className="px-5 mx-auto" src={img} alt="" />
      </a>
      <a
        href="/outlet-deals"
        className="text-sm text-bestBuyBlue hover:underline hover:text-dark"
      >
        View outlet deals
      </a>
    </div>
  );
};

export default OutletDealsWidget;
