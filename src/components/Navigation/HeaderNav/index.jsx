import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../../../hooks/useStore";

export const HeaderNav = () => {
  const cartItemCount = useStore((state) => state.cartItemCount);
  const loadCart = useStore((state) => state.loadCart);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <nav className="fixed top-0 w-full z-20 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold tracking-wide text-gray-900 dark:text-white font-urbanist">
  Trendora
</Link>

        {/* Navigation Icons */}
        <ul className="flex gap-6">
          {/* Home Icon */}
          <li className="flex items-center gap-3">
  <Link to="/" aria-label="Home Icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 12l9-9 9 9M4 10v10a1 1 0 0 0 1 1h5v-6h4v6h5a1 1 0 0 0 1-1V10"
      />
    </svg>
  </Link>
</li>
       

          {/* Contact Icon */}
          <li className="flex items-center gap-3">
  <Link to="/contact" aria-label="Contact">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
      />
    </svg>
  </Link>
</li>

          {/* Shopping Cart Icon */}
          <li className="relative">
  <Link to="/shoppingCart" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 3h2l3.6 10.59a1 1 0 0 0 .95.71h8.9a1 1 0 0 0 .96-.73L21 7H6"
      />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="17" cy="20" r="1.5" fill="currentColor" />
    </svg>

    {cartItemCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
        {cartItemCount}
      </span>
    )}
  </Link>
</li>
        </ul>
      </div>
    </nav>
  );
};