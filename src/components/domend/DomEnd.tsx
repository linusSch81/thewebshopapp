import { useState, useContext } from "react";
import { CartContext } from "../../shared/provider/CartProvider";
import { CartSideBar } from "../../components/shop/cartsidebar/CartSideBar";
import { Footer } from "../footer/Footer";
import { CartTrigger } from "../shop/carttrigger/CartTrigger";
import { BackDrop } from "../../components/backdrop/BackDrop";

export const DomEnd = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [cartItems] = useContext(CartContext);
  return (
    <>
      <CartTrigger count={cartItems} setOpenCart={setOpenCart} />
      <CartSideBar openCart={openCart} setOpenCart={setOpenCart} />
      {!openCart || <BackDrop openHandler={setOpenCart} />}
      {/** Maybe add footer menu here */}
      <Footer />
    </>
  );
};
