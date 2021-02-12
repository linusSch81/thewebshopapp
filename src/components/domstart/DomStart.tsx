import { Header } from "../header/Header";

import { Navigation } from "../navigation/Navigation";
import { CartTrigger } from "../shop/carttrigger/CartTrigger";
import {useState} from "react";
export const DomStart = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <>
      <CartTrigger count="2" setOpenCart={setOpenCart} />
      <Header>
        <Navigation />
      </Header>
    </>
  );
};
