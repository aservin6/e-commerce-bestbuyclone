import React from "react";
import RatingStars from "../../components/UI/RatingStars";
import ProductCarousel from "./ProductCarousel";

const ProductDisplay = ({ product }) => {
  return (
    // Display the product data that was passed to the component
    <div className="flex flex-col-reverse md:flex-col">
      <div className="flex flex-col mb-2 space-y-2 md:mb-4">
        <span className="md:text-xl pt-3 md:pt-0">{product.name}</span>
        <div className="flex items-center text-[11px] font-bold space-x-5 md:text-[13px]">
          <div>
            Model: <span className="font-normal">{product.modelNumber}</span>
          </div>
          <div>
            SKU: <span className="font-normal">{product.sku}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-[13px] -order-1 md:order-none">
        <RatingStars
          reviewAvg={product.customerReviewAverage}
          reviewCount={product.customerReviewCount}
        />
        <span className="text-bestBuyBlue font-bold">
          {product.customerReviewAverage}
        </span>
        <span className="text-bestBuyBlue">
          ({product.customerReviewCount} Reviews)
        </span>
      </div>
      <div>
        <ProductCarousel product={product} />
      </div>
    </div>
  );
};

export default ProductDisplay;
