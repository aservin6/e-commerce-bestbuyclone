import React from "react";
import RatingStars from "../../components/UI/RatingStars";
import AddToCartButton from "../../components/UI/AddToCartButton";

const CategoryListItem = ({ item }) => {
  // With the data passed in render a list item to display the data
  return (
    <li className="py-5 border-t border-dark border-opacity-30 px-3">
      <div className="grid grid-cols-[40%_60%] items-center md:items-center md:grid-cols-[30%_70%] py-2">
        <div className="">
          <a href={`/${item.sku}`}>
            <img
              className="h-[7rem] w-[7rem] object-contain mx-auto aspect-square lg:h-[10rem] lg:w-[10rem]"
              src={item.image}
              alt={`${item.name}`}
            />
          </a>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:space-x-10">
          <div className="text-bestBuyBlue space-y-2">
            <a
              className="text-[13px] line-clamp-3 md:text-lg hover:text-dark"
              href={`/${item.sku}`}
            >
              {item.name}
            </a>
            <div className="flex items-center space-x-2 text-xs md:text-base">
              <RatingStars reviewAvg={item.customerReviewAverage} />
              <span>{item.customerReviewAverage}</span>
              <span>({item.customerReviewCount})</span>
            </div>
            <p className="font-bold hidden md:block text-dark text-sm">
              Model: <span className="font-normal">{item.modelNumber}</span>
            </p>
            <p className="font-bold hidden md:block text-dark text-sm">
              SKU: <span className="font-normal">{item.sku}</span>
            </p>
          </div>

          <div className="space-y-2 md:space-y-5 mb-5 md:mb-0">
            <div className="flex flex-col space-y-1.5 mt-2 md:mt-0">
              {item.onSale ? (
                <>
                  <span className="font-bold text-dark text-xl md:text-2xl">
                    ${item.salePrice}
                  </span>
                  <span className="bg-errorRed font-bold text-white text-sm py-.5 px-1.5 w-fit md:text-base">
                    Save ${item.dollarSavings}
                  </span>
                  <span className="text-dark text-opacity-80 text-xs md:text-sm">
                    Was ${item.regularPrice}
                  </span>
                </>
              ) : (
                <span className="text-xl md:text-2xl font-bold">
                  ${item.salePrice}
                </span>
              )}
            </div>
            <AddToCartButton item={item} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CategoryListItem;
