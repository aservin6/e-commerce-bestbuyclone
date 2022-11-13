import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../UI/Error";
import Loading from "../UI/Loading";
import Price from "../UI/Price";

const DealOfTheDayWidget = () => {
  // Create some state to store the Deal of the Day get request data
  const [dealOTD, setDealOTD] = useState([]);
  // Create some state to store the error if one occurs
  const [error, setError] = useState(null);
  // Create some state to store the loading state
  const [isLoading, setIsLoading] = useState(true);

  // When the component loads, execute a get request and store the data or errors if there are any
  useEffect(() => {
    const getDealOTD = async () => {
      try {
        const { data } = await axios.get(
          `https://api.bestbuy.com/v1/products(percentSavings>=30&onSale=true&preowned=false&(categoryPath.id=abcat0101000))?apiKey=${process.env.REACT_APP_API_KEY}&facet=percentSavings&pageSize=1&format=json`
        );
        setDealOTD(data.products[0]);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    getDealOTD();
  }, []);
  
  return (
    <div className="flex flex-col bg-white border border-dark border-opacity-30 p-5">
      <span className="text-dark py-1 font-bold">
        <span className="text-white bg-errorRed px-1.5 py-1">Deal</span> of the
        Day
      </span>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      <div
        className="flex flex-col justify-between mx-auto h-full text-dark px-5 gap-2"
        key={dealOTD.sku}
      >
        <a href={`/${dealOTD.sku}`} className="mb-6">
          <img
            className="object-contain w-9/12 mx-auto pt-8"
            src={dealOTD.image}
            alt=""
          />
        </a>
        <a
          href={`/${dealOTD.sku}`}
          className="text-bestBuyBlue font-normal text-sm line-clamp-2 hover:text-dark hover:underline"
        >
          {dealOTD.name}
        </a>
        <Price
          regularPrice={dealOTD.regularPrice}
          salePrice={dealOTD.salePrice}
          padding={"px-0"}
        />
      </div>
    </div>
  );
};

export default DealOfTheDayWidget;
