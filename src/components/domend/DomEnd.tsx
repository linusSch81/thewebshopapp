import {CartSideBar} from "../../components/shop/cartsidebar/CartSideBar"
import { Footer } from "../footer/Footer";
import { useState } from "react";

export const DomEnd = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <>
      <CartSideBar openCart={openCart} />
      
      {/** Maybe add footer menu here */}
      <Footer />
    </>
  );
};