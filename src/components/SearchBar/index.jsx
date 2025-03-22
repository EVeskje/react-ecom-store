/* eslint-disable react/prop-types */
import { useState } from "react";
import { DisplaySearchResult } from "../DisplaySearchResult";


export const SearchBar = ({ onSearch, searchResults }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const term = event.target.value;
    setInputValue(term);
    onSearch(term);
  };

  return (
    <section className="flex flex-col items-center mt-10">
      <p className="text-2xl font-semibold text-dark-gray mb-4">
      Discover amazing deals
      </p>
      
      {/* Search Input */}
      <form 
        className="relative w-80 sm:w-96"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="w-full p-3 ps-4 text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for products..."
          value={inputValue}
          onChange={handleInputChange}
        />
        
        {/* Search Icon */}
        <button
          type="submit"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 p-2 text-white bg-primary hover:bg-secondary transition rounded-full"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      {/* Search Results */}
      <div className="mt-4 w-80 sm:w-96">
        {searchResults.length === 0 && inputValue.trim() ? (
          <p className="text-gray-500 text-center text-sm">No results found</p>
        ) : (
          searchResults.map((product) => (
            <DisplaySearchResult data={product} key={product.id} />
          ))
        )}
      </div>
    </section>
  );
};