import React from "react";

const CheckoutItem = ({ product }) => {
  return (
    // Render a component that displays the product data passed in
    <div className="grid grid-cols-[20%_50%] items-center w-full md:w-2/3">
      <img
        className="h-[50px] w-[50px] object-contain mx-auto aspect-square"
        src={product.image}
        alt=""
      />
      <span className="text-dark text-[13px] line-clamp-2">{product.name}</span>
    </div>
  );
};

export default CheckoutItem;
