
export const CheckoutSuccessPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6">
      <div className="helmet">
        <title>Order Confirmed | Trendora</title>
        <meta name="description" content="Thank you for your purchase! Your order is on its way." />
      </div>

      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all">
        {/* Success Icon */}
        <div className="flex justify-center -mt-16 mb-2">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">Order Confirmed!</h1>

        {/* Order ID */}
        <div className="mt-2 mb-4">
          <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300 font-medium">Order #29384</span>
        </div>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Your order has been confirmed and will be on its way soon. You will receive a confirmation email shortly.
        </p>

        {/* Estimated Delivery */}
        <div className="mt-6 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Delivery</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">3 - 4 days</p>
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all shadow-md"
          >
            Continue Shopping
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};