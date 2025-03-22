import { Link } from "react-router-dom";

export const ProductCard = ({ data }) => {
  const { image, title, rating, price, discountedPrice, id } = data;
  const isDiscounted = price !== discountedPrice;

  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
      {/* Product Image */}
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={image.url}
          alt={image.alt}
        />
        {isDiscounted && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Sale
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h5
          className="text-lg font-semibold text-gray-900 dark:text-white truncate"
          title={title}
        >
          {title}
        </h5>

        {/* Rating */}
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <span className="flex items-center">
            <svg
              className="w-3 h-3 text-yellow-500 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {discountedPrice},-
            </span>
            {isDiscounted && (
              <span className="text-sm line-through text-gray-500 dark:text-white">
                {price},-
              </span>
            )}
          </div>

          {/* View Product Button */}
          <Link
           to={`/productPage/${id}`}
           className="inline-block bg-blue-800 text-white text-sm font-semibold py-2 px-4 rounded-md transition duration-200 hover:bg-blue-700"
            >
  View Product
</Link>
        </div>
      </div>
    </div>
  );
};