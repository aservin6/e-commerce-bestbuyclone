import React from "react";
import RemoveFromCartButton from "../UI/RemoveFromCartButton";

const CartItem = ({ product }) => {
  return (
    // Render a list item with the product information passed to the component
    <li className="border border-opacity-30 border-dark bg-white py-5">
      <div className="flex flex-col w-10/12 space-y-3 mx-auto md:items-center md:justify-between md:space-y-0 md:flex-row md:w-11/12">
        <div className="flex flex-col space-y-4 md:space-x-5 md:space-y-0 md:flex-row md:w-2/3">
          <img
            className="h-[7rem] w-[7rem] object-contain mx-auto aspect-square"
            src={product.image}
            alt=""
          />

          <div className="flex flex-col items-start text-dark md:w-full text-[13px]">
            <a
              className="text-bestBuyBlue text-[13px] hover:text-dark hover:underline md:text-base mb-2"
              href={`/${product.sku}`}
            >
              {product.name}
            </a>
            <p className="font-bold hidden md:block">
              Model: <span className="font-normal">{product.modelNumber}</span>
            </p>
            <p className="font-bold hidden md:block">
              SKU: <span className="font-normal">{product.sku}</span>
            </p>
          </div>
        </div>
        {/* If product is on sale, different data is rendered */}
        {product.onSale ? (
          <div className="flex flex-col space-y-1.5 md:items-end">
            <span className="text-dark text-xl font-bold md:text-2xl">
              ${product.salePrice}
            </span>
            <span className="bg-errorRed text-[13px] md:text-sm font-bold text-white py-.5 px-1.5 w-fit">
              Save ${product.dollarSavings}
            </span>
            <span className="text-dark text-[13px] md:text-sm text-opacity-80">
              Was ${product.regularPrice}
            </span>
            <RemoveFromCartButton item={product} />
          </div>
        ) : (
          <div className="flex flex-col items-end self-stretch justify-between">
            <span className="text-xl font-bold text-dark self-start md:self-end md:text-2xl">
              ${product.salePrice}
            </span>
            <RemoveFromCartButton item={product} />
          </div>
        )}
      </div>
    </li>
  );
};

export default CartItem;
