import React from "react";
import Price from "../UI/Price";
import RatingStars from "../UI/RatingStars";

const TrendingListItem = ({
  item,
  sku,
  image,
  name,
  reviewAvg,
  reviewCount,
  regularPrice,
  salePrice,
}) => {
  // Using the data passed into the component render a list item that displays the data
  return (
    <>
      {item && (
        <li className="flex flex-col justify-between">
          <a href={`/${sku}`} className="mb-6">
            <img
              className="h-[7rem] w-[7rem] object-contain mx-auto aspect-square"
              src={image}
              alt=""
            />
          </a>
          <div className="flex flex-col items-start justify-between h-full">
            <a
              href={`/${sku}`}
              className="text-bestBuyBlue text-[13px] px-5 line-clamp-3 hover:text-dark hover:underline md:text-base"
            >
              {name}
            </a>
            <div className="flex items-center self-start space-x-1 my-2 px-5">
              <RatingStars reviewAvg={reviewAvg} reviewCount={reviewCount} />
              <span className="text-bestBuyBlue text-xs md:text-base">({reviewCount})</span>
            </div>
          </div>
          <Price
            regularPrice={regularPrice}
            salePrice={salePrice}
            padding={"px-5"}
          />
        </li>
      )}
    </>
  );
};

export default TrendingListItem;
