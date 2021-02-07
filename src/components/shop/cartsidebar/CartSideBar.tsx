import { useState } from "react";
/* import { CartTrigger } from "../carttrigger/CartTrigger"; */

export const CartSideBar = (props: { isOpen: boolean }) => {
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <>
      {/* <CartTrigger /> */}
      <div className={props.isOpen ? "open" : "closed"}>
        <p>/** Offcanvas side bar */</p>
        /** List added to cart items ("ShopItem" / "Cart Item")*/
        <ul>
          <li>Image</li>
          <li>Title</li>
          <li>Add / remove quantity</li>
          <li>
            Price
            <ul>
              <li>changed when quatity trigger is pressed / add to cart</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
