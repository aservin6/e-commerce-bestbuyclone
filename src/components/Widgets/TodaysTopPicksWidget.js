import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../UI/Error";
import Loading from "../UI/Loading";

const TodaysTopPicksWidget = () => {
  // Create some state that stores the get request data
  const [topPicks, setTopPicks] = useState([]);
  // Create some state that stores the  error data if any occur
  const [error, setError] = useState(null);
  // Create some state for loading
  const [isLoading, setIsLoading] = useState(false);

  // When the component loads, execute a get request and store the data or errors if there are any
  useEffect(() => {
    const getTopPicks = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.bestbuy.com/beta/products/mostViewed?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setTopPicks(data.results.splice(0, 4));
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    getTopPicks();
  }, []);

  return (
    <div className="container p-5 mx-auto bg-white border border-dark border-opacity-30 h-fit">
      <span className="font-bold text-dark">Today's top picks</span>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      <ul className="grid grid-cols-2 gap-6 pt-3 md:grid-cols-4 md:gap-8 ">
        {/* Map over the data and render a list item and pass in the object data */}
        {topPicks.map((item) => {
          return (
            <li className="flex flex-col items-center mx-auto" key={item.sku}>
              <a href={`/${item.sku}`} className="mb-2" aria-label={`link to product`}>
                <img
                  className="h-[7rem] w-[7rem] object-contain mx-auto aspect-square"
                  src={item.images.standard}
                  alt=""
                />
              </a>
              <a
                href={`/${item.sku}`}
                className="text-bestBuyBlue text-[13px] line-clamp-2 hover:text-dark hover:underline"
              >
                {item.names.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodaysTopPicksWidget;
