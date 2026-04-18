import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const totalItems = useMemo(() => cart.length, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalItems,
        sortOrder,
        setSortOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}