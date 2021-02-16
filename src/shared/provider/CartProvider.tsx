import { useState, createContext } from "react";

export const CartContext = createContext<any>(null);

export const CartProvider = (props: { children: React.ReactChild }) => {
  const [cartItems, setCartItems] = useState<Number>(0);
  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </CartContext.Provider>
  );
};