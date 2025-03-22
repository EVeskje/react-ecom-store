import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback, useMemo } from "react";
import { useStore } from "../../hooks/useStore";
import { CartProduct } from "../../components/CartProduct";
import { InfoMessage } from "../../components/InfoMessage";

export const ShoppingCart = () => {
  const { cart, clearCart } = useStore((state) => ({
    cart: state.cart,
    clearCart: state.clearCart,
  }));

  const [infoMessage, setInfoMessage] = useState("");
  const navigate = useNavigate();

  // Calculate total price with useMemo to prevent unnecessary recalculations
  const totalPrice = useMemo(
    () =>
      cart
        .reduce((sum, { discountedPrice, quantity }) => sum + discountedPrice * quantity, 0)
        .toFixed(2),
    [cart]
  );

  // Memoize the empty cart status to avoid recalculations
  const isCartEmpty = useMemo(() => cart.length === 0, [cart]);

  // Use useCallback to prevent unnecessary re-renders
  const handleCheckout = useCallback(
    (e) => {
      e.preventDefault();

      if (isCartEmpty) {
        setInfoMessage("Your cart is empty!");
        setTimeout(() => setInfoMessage(""), 3000);
        return;
      }

      clearCart();
      navigate("/checkoutSuccessPage");
    },
    [isCartEmpty, clearCart, navigate]
  );

  // Handle clear cart with feedback
  const handleClearCart = useCallback(() => {
    clearCart();
    setInfoMessage("Your cart has been cleared!");
    setTimeout(() => setInfoMessage(""), 3000);
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <Helmet>
        <title>{`Shopping Cart (${cart.length}) | Trendora`}</title>
        <meta
          name="description"
          content="View and manage your shopping cart at Trendora - Shop the latest trends."
        />
      </Helmet>

      <h1 className="text-4xl text-center font-semibold text-gray-900 dark:text-white mb-6">
        Shopping Cart {!isCartEmpty && `(${cart.length})`}
      </h1>

      {infoMessage && <InfoMessage message={infoMessage} />}

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Cart Items */}
        <section className="md:col-span-2">
          {!isCartEmpty ? (
            <div className="space-y-4">
              {cart.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                Your cart is empty
              </p>
              <Link
                to="/"
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Continue shopping
              </Link>
            </div>
          )}
        </section>

        {/* Order Summary */}
        <section className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 h-fit">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h2>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Items ({cart.length}):</span>
              <span>${totalPrice}</span>
            </div>

            <div className="flex justify-between text-gray-600 dark:text-gray-300">
              <span>Shipping:</span>
              <span>{isCartEmpty ? "$0.00" : "Free"}</span>
            </div>

            <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          <button
            className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition ${
              isCartEmpty ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={handleCheckout}
            disabled={isCartEmpty}
            aria-label="Proceed to checkout"
          >
            Checkout
          </button>

          {!isCartEmpty && (
            <button
              className="w-full mt-4 py-3 rounded-lg bg-white text-gray-900 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition font-semibold"
              onClick={handleClearCart}
              aria-label="Clear all items from cart"
            >
              Clear Cart
            </button>
          )}

          <Link
            to="/"
            className="block text-center w-full mt-4 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Continue Shopping
          </Link>
        </section>
      </div>
    </main>
  );
};