import React from "react";
import AddToCartButton from "../../components/UI/AddToCartButton";

const ProductPricing = ({ product }) => {
  return (
    <div className="space-y-2 md:space-y-5 mb-5 md:mb-0">
      <div className="flex flex-col space-y-1.5 mt-5 md:mt-0">
        {product.onSale ? (
          <>
            <span className="font-bold text-dark text-3xl">
              ${product.salePrice}
            </span>
            <span className="bg-errorRed font-bold text-white py-.5 px-1.5 w-fit">
              Save ${product.dollarSavings}
            </span>
            <span className="text-dark text-opacity-80">
              Was ${product.regularPrice}
            </span>
          </>
        ) : (
          <span className="text-3xl font-bold">${product.salePrice}</span>
        )}
      </div>
      <AddToCartButton item={product} />
    </div>
  );
};

export default ProductPricing;
