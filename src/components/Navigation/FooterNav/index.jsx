import { Link } from "react-router-dom";

export const FooterNav = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 p-4 shadow-inner">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <span className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 Eirik N. Veskje
        </span>

        {/* Navigation Links with Icons */}
        <nav>
          <ul className="flex gap-6 mt-3 md:mt-0">
            {/* Home Icon */}
            <li>
              <Link to="/" aria-label="Home">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
              </Link>
            </li>


            {/* Contact Icon (Mail) */}
            <li>
            <Link to="/contact" aria-label="Contact">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
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
            <li>
              <Link to="/shoppingCart" aria-label="Shopping cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
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
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </footer>
  );
};