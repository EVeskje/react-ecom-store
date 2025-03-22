import { QuantityCounter } from "../QuantityCounter";
import { useStore } from "../../hooks/useStore";

export const CartProduct = ({ product }) => {
  const removeFromCart = useStore((state) => state.removeFromCart);

  if (!product) {
    return null;
  }

  return (
    <div className="my-4 mx-auto w-72 xs:w-80 shadow-xl bg-white">
      <div className="flex items-center justify-start w-full">
        <img className="w-28 h-28 object-cover" src={product.image.url} alt={product.image.alt} />
        <div className="flex flex-col basis-3/4">
          <h5 className="text-lg font-medium tracking-tight py-1 ms-8 text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="text-base font-medium tracking-tight py-1 ms-8 text-gray-900">${product.discountedPrice}</p>
          <div className="flex flex-row gap-8 items-center">
            <QuantityCounter quantity={product.quantity} productId={product.id} />
            <a className="py-1 delete-icon" onClick={() => removeFromCart(product.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
