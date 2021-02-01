// import ".MobileNavigation.css";
import { HamburgerButton } from "./hamburgerbutton/HamburgerButton";
import { SideBar } from "./sidebar/SideBar";
import { useState } from "react";

export const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
      <nav className="mobile-navigation-wrapper">
        <HamburgerButton drawerHandler={setOpenDrawer} />
        <SideBar drawIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
      </nav>
    </>
  );
};
