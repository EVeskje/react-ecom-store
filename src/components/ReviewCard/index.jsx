export const ReviewCard = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <div className="flex items-center gap-4">
        {/* Username */}
        <h3 className="text-xl font-semibold text-gray-800">{data.username}</h3>

        {/* Rating */}
        <div className="flex items-center">
          <span className="flex items-center bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
            <svg
              className="w-4 h-4 text-green-600 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {data.rating}
          </span>
        </div>
      </div>

      {/* Review Description */}
      <p className="text-gray-600 text-sm">{data.description}</p>
    </div>
  );
};