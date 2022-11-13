import React, { useState, createContext } from "react";
import axios from "axios";

// Create default context
const SearchContext = createContext({
  data: [],
  onSearch: () => {},
  error: null,
  isLoading: false,
});

export const SearchContextProvider = ({ children }) => {
  // Create some state to store the search results
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Executes a get request usings the search input passed in
  const getSearchResults = async (input) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.bestbuy.com/v1/products((search=${input}))?apiKey=qhqws47nyvgze2mq3qx4jadt&pageSize=25&format=json`
      );
      setSearchData(data.products);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    // SearchContextProvider with value pairs defined above
    <SearchContext.Provider
      value={{
        data: searchData,
        onSearch: getSearchResults,
        error: error,
        isLoading: loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
