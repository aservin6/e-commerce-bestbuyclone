import React, { useEffect, useState } from "react";
import axios from "axios";
import Error from "../UI/Loading";
import Loading from "../UI/Loading";
import TrendingListItem from "./TrendingListItem";

const TrendingProducts = () => {
  // Create some state that stores the get request data
  const [trendingProducts, setTrendingProducts] = useState([]);
  // Create some state that stores the  error data if any occur
  const [error, setError] = useState(null);
  // Create some state for loading
  const [isLoading, setIsLoading] = useState(false);

  // When the component loads, execute a get request and store the data or errors if there are any
  useEffect(() => {
    const getTrendingProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.bestbuy.com/beta/products/trendingViewed?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setTrendingProducts(data.results.splice(0, 6));
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    getTrendingProducts();
  }, []);

  return (
    <div className="container mx-auto pt-2">
      <span className="font-bold text-xl text-dark">Trending now</span>
      <hr className="border-dark opacity-30 mt-1 mb-4" />
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      <ul className="grid grid-cols-2 gap-y-6 lg:grid-cols-6 pb-8">
        {/* Map over the data and render a list item and pass in the object data */}
        {trendingProducts.map((item, index) => {
          return (
            <TrendingListItem
              key={index}
              item={item}
              sku={item.sku}
              image={item.images.standard}
              name={item.names.title}
              reviewAvg={item.customerReviews.averageScore}
              reviewCount={item.customerReviews.count}
              regularPrice={item.prices.regular}
              salePrice={item.prices.current}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TrendingProducts;
