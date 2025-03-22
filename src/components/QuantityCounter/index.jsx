import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";

export const QuantityCounter = ({ quantity, productId }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const updateQuantity = useStore((state) => state.updateQuantity);

  const handleQuantityChange = (change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      setCurrentQuantity(newQuantity);
      updateQuantity(productId, newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setCurrentQuantity(value);
      updateQuantity(productId, value);
    }
  };

  return (
    <form className="max-w-xs ms-8">
      <div className="relative flex items-center">
        <button
          type="button"
          onClick={() => handleQuantityChange(-1)}
          className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-2.5 h-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
          </svg>
        </button>

        <input
          type="text"
          id="counter-input"
          className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
          value={currentQuantity}
          onChange={handleInputChange}
          required
        />

        <button
          type="button"
          onClick={() => handleQuantityChange(1)}
          className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-2.5 h-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};