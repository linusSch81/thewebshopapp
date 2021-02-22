import { useState, createContext } from "react";

export const CartContext = createContext<any>(null);

export const CartProvider = (props: { children: React.ReactChild }) => {
  const [cartItems, setCartItems] = useState<object>({
    products:[{productId:2,quantity:4},{productId:1,quantity:10},{productId:5,quantity:2}]
});
  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </CartContext.Provider>
  );
};