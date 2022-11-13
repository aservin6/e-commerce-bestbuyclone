import axios from "axios";
import React, { useEffect, useState } from "react";
import RatingStars from "../../components/UI/RatingStars";
import Price from "../../components/UI/Price";
import Loading from "../../components/UI/Loading";
import Error from "../../components/UI/Error";

const RelatedProduct = ({ sku }) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.bestbuy.com/v1/products(sku=${sku})?apiKey=${process.env.REACT_APP_API_KEY}&sort=name.asc&pageSize=1&format=json`
        );
        setProduct(data.products[0]);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getProduct();
  }, [sku]);
  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {product && (
        <li className="flex flex-col justify-between items-center mx-auto">
          <a href={`/${sku}`} className="mb-6">
            <img
              className="h-[75px] max-h-[75px] lg:h-[100px] lg:max-h-[100px] xl:h-[125px] xl:max-h-[125px] object-contain"
              src={product.image}
              alt={product.name}
            />
          </a>
          <div className="flex flex-col items-center justify-between h-full">
            <a
              href={`/${sku}`}
              className="text-bestBuyBlue text-[13px] px-5 line-clamp-3 hover:text-dark hover:underline"
            >
              {product.name}
            </a>
            <div className="flex items-center self-start space-x-1 my-2 px-5">
              <RatingStars
                reviewAvg={product.customerReviewAverage}
                reviewCount={product.customerReviewCount}
              />
              <span className="text-bestBuyBlue text-xs">
                ({product.customerReviewCount})
              </span>
            </div>
          </div>
          <Price
            regularPrice={product.regularPrice}
            salePrice={product.salePrice}
            padding={"px-5"}
          />
        </li>
      )}
    </>
  );
};

export default RelatedProduct;
