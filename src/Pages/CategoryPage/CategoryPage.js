import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import Loading from "../../components/UI/Loading";
import Wrapper from "../../components/UI/Wrapper";
import Error from "../../components/UI/Error";
import CategoryListItem from "./CategoryListItem";

const CategoryPage = ({ api, title }) => {
  // Create a state to store the get request data
  const [products, setProducts] = useState([]);
  // Create some state to store the error if one occurs
  const [error, setError] = useState(null);
  // Create some state to store the loading state
  const [isLoading, setIsLoading] = useState(true);
  // Create some state to store the filter that the user selects
  const [selectedFilter, setSelectedFilter] = useState(null);

  // When the component loads, execute a get request and store the response in the intended state
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(api);
        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    // Change the title using the title passed in
    document.title = title + " | Best Buy";
    getProducts();
  }, [api, title]);

  // Create a function that returns the array of products sorted based on the selectedFilter
  const getSortedList = () => {
    if (!selectedFilter) {
      return products;
    } else {
      // Return the array sorted by Best Discount
      if (selectedFilter === "best-discount") {
        return products.sort((a, b) =>
          a.dollarSavings < b.dollarSavings
            ? 1
            : a.dollarSavings > b.dollarSavings
            ? -1
            : 0
        );
      }
      // Return the array sorted by price from Low to High
      if (selectedFilter === "price-low-to-high") {
        return products.sort((a, b) =>
          a.salePrice > b.salePrice ? 1 : a.salePrice < b.salePrice ? -1 : 0
        );
      }
      // Return the array sorted by price from High to Low
      if (selectedFilter === "price-high-to-low") {
        return products.sort((a, b) =>
          a.salePrice < b.salePrice ? 1 : a.salePrice > b.salePrice ? -1 : 0
        );
      }
      // Return the array sorted by the average Customer Rating
      if (selectedFilter === "customer-rating") {
        return products.sort((a, b) =>
          a.customerReviewAverage < b.customerReviewAverage
            ? 1
            : a.customerReviewAverage > b.customerReviewAverage
            ? -1
            : 0
        );
      }
      // Return the array sorted by the brand name alphabetically
      if (selectedFilter === "brand-a-z") {
        return products.sort((a, b) => {
          let textA = a.manufacturer.toUpperCase();
          let textB = b.manufacturer.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      }
      // Return the array sorted by the brand name reverse alphabetically
      if (selectedFilter === "brand-z-a") {
        return products.sort((a, b) => {
          let textA = a.manufacturer.toUpperCase();
          let textB = b.manufacturer.toUpperCase();
          return textA > textB ? -1 : textA < textB ? 1 : 0;
        });
      }
    }
  };
  // Store the sortedList inside a variable that re-renders when selectedFilter or products are changed
  const sortedList = useMemo(getSortedList, [selectedFilter, products]);

  return (
    <Wrapper bgColor={"bg-white"}>
      {isLoading && <Loading />}
      {error && <Error />}
      <div className="container mx-auto text-dark md:px-4">
        <section id="product-list">
          <div className="w-full flex items-center justify-end space-x-3 py-2 md:py-4 md:pr-0">
            <span>Sort By:</span>
            <select
            // When a new filter is selected setSelectedFilter to the new value and execute the getSortedList function
              onChange={(e) => {
                setSelectedFilter(e.target.value);
                getSortedList(e.target.value);
              }}
              className="border"
              name="filters"
              id="select-filter"
            >
              <option value={"best-discount"}>Select a filter</option>
              <option value="best-discount">Best Discount</option>
              <option value="price-low-to-high">Price Low to High</option>
              <option value="price-high-to-low">Price High to Low</option>
              <option value="customer-rating">Customer Rating</option>
              <option value="brand-a-z">Brand A-Z</option>
              <option value="brand-z-a">Brand Z-A</option>
            </select>
          </div>
          <ul>
            {/* Map over the sortedList and return a list item for each item */}
            {sortedList.map((item) => {
              return <CategoryListItem key={item.sku} item={item} />;
            })}
          </ul>
        </section>
      </div>
      ;
    </Wrapper>
  );
};

export default CategoryPage;
