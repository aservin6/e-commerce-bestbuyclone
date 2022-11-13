import React from "react";

const Price = ({ regularPrice, salePrice, padding }) => {
  return (
    <>
      {/* Create a component that renders the price data passed in based on whether it is on sale */}
      {regularPrice !== salePrice ? (
        <div
          className={`flex flex-col text-dark text-[15px] leading-4 self-start md:text-lg ${padding}`}
        >
          <span className="font-bold">${salePrice}</span>
          <span className="line-through">${regularPrice}</span>
        </div>
      ) : (
        <div
          className={`flex flex-col  text-dark text-[15px] leading-4 self-start md:text-lg ${padding}`}
        >
          <span className="font-bold h-8">${regularPrice}</span>
        </div>
      )}
    </>
  );
};

export default Price;
