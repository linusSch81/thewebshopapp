// import ".MobileNavigation.scss";
import { HamburgerButton } from "./hamburgerbutton/HamburgerButton";
import { SideBar } from "./sidebar/SideBar";
import { useState } from "react";

import { BackDrop } from "../../backdrop/BackDrop";
// import { CartTrigger } from "../../shop/carttrigger/CartTrigger";

export const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <nav className="mobile-navigation-wrapper">
        <HamburgerButton drawerHandler={setOpenDrawer} />
        <SideBar drawIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
        {!openDrawer || <BackDrop drawHandler={setOpenDrawer} />}
        {/* <CartTrigger /> */}
      </nav>
    </>
  );
};
