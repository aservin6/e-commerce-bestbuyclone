import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchContext from "../../store/search-context";

const SearchBar = () => {
  // Store the users query in some state
  const [userQuery, setUserQuery] = useState("");

  // Assign the search context to a variable
  const searchCtx = useContext(SearchContext);
  const navigate = useNavigate();

  // Update the userQuery state on every key press of the search input
  const changeHandler = (event) => {
    setUserQuery(event.target.value);
  };

  // When the form is submitted trigger the onSearch function with the userQuery and naviate to the search-page
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchCtx.onSearch(userQuery);
        navigate("/search-page");
      }}
      className="flex w-44 sm:w-52 justify-center border rounded-[4px] md:w-2/5"
    >
      <input
        onChange={changeHandler}
        className="pl-1.5 py-0.5 border-r border-lightGray text-dark placeholder:text-dark placeholder:text-sm placeholder:opacity-80 focus:outline-none w-10/12 md:w-full md:py-2 md:pl-2"
        type="text"
        placeholder="Search"
      />
      <button
        className="bg-white w-10"
        type="submit"
      >
        <i className="fa-solid fa-magnifying-glass text-bestBuyBlue"></i>
      </button>
    </form>
  );
};

export default SearchBar;
