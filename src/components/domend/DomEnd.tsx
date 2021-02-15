import {CartSideBar} from "../../components/shop/cartsidebar/CartSideBar"
import { Footer } from "../footer/Footer";
import { useState } from "react";
import { CartTrigger } from "../shop/carttrigger/CartTrigger";
import {BackDrop} from "../../components/backdrop/BackDrop"
export const DomEnd = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <>
      <CartTrigger count="2" setOpenCart={setOpenCart} />
      <CartSideBar openCart={openCart} setOpenCart={setOpenCart} />
      {!openCart || <BackDrop openHandler={setOpenCart} />}
      {/** Maybe add footer menu here */}
      <Footer />
    </>
  );
};





