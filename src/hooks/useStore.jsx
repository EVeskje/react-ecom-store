import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  cartItemCount: 0,

  addToCart: (product) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      const cartItemExists = updatedCart.some((item) => item.id === product.id);
      if (!cartItemExists) updatedCart.push({ ...product, quantity: 1 });

      const updatedCartItemCount = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return { cart: updatedCart, cartItemCount: updatedCartItemCount };
    }),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      const updatedCart = state.cart
        .map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0);

      const updatedCartItemCount = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return { cart: updatedCart, cartItemCount: updatedCartItemCount };
    }),

  loadCart: () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedCartItemCount = savedCart.reduce((sum, item) => sum + item.quantity, 0);
    set({ cart: savedCart, cartItemCount: savedCartItemCount });
  },

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      const updatedCartItemCount = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return { cart: updatedCart, cartItemCount: updatedCartItemCount };
    }),

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [], cartItemCount: 0 });
  },
}));