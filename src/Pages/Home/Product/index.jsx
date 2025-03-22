import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Loader, ReviewCard } from "../../../components";
import { useFetch } from "../../../hooks/useFetch";
import { useStore } from "../../../hooks/useStore";
import { useState, useEffect } from "react";
import { apiUrl } from "../../../common/constants";

export const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, hasError } = useFetch(apiUrl);
  const addToCart = useStore((state) => state.addToCart);

  const product = data.find((item) => item.id === id);

  const [buttonText, setButtonText] = useState("Add to cart");
  const [buttonColor, setButtonColor] = useState("bg-gray-900");
  const [isItemAdded, setIsItemAdded] = useState(false);

  useEffect(() => {
    let buttonTimer;
    if (isItemAdded) {
      buttonTimer = setTimeout(() => {
        setButtonText("Add to cart");
        setButtonColor("bg-gray-900");
        setIsItemAdded(false);
      }, 2500);
    }
    return () => clearTimeout(buttonTimer);
  }, [isItemAdded]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setButtonText("✓ Added!");
    setButtonColor("bg-blue-500");
    setIsItemAdded(true);
  };

  if (isLoading) return <Loader />;
  if (hasError) return <div className="text-red-500 text-lg text-center font-semibold">Failed to load product.</div>;
  if (!product) return <div className="text-center text-lg font-semibold">Product not found.</div>;

  const isDiscounted = product.price !== product.discountedPrice;
  const discountAmount = (product.price - product.discountedPrice).toFixed(0);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{`${product.title} | Trendora`}</title>
        <meta name="description" content={`Product details for ${product.title} on Trendora`} />
      </Helmet>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
          &larr;
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center">
          <img className="w-full max-w-lg h-auto rounded-lg shadow-lg object-cover" src={product.image.url} alt={product.image.alt} />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">{product.rating}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-lg">{product.description}</p>

          {/* Price & Add to Cart */}
          <div className="flex flex-col space-y-4">
            {isDiscounted && (
              <span className="text-xl text-gray-500 line-through">{product.price},-</span>
            )}
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.discountedPrice},-</span>
            {isDiscounted && <span className="text-blue-500 font-medium">You save {discountAmount},-</span>}

            <button
              onClick={() => handleAddToCart(product)}
              className={`w-full py-3 rounded-lg text-white ${buttonColor} transition-all duration-300 hover:bg-blue-500 font-semibold text-lg`}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Reviews</h2>
        <div className="mt-6 space-y-6">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review) => <ReviewCard data={review} key={review.id} />)
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No reviews yet on this product.</p>
          )}
        </div>
      </section>
    </main>
  );
};