// import ".MobileNavigation.scss";
import { useState } from "react";
import { HamburgerButton } from "./hamburgerbutton/HamburgerButton";
import { SideBar } from "./sidebar/SideBar";
import { BackDrop } from "../../backdrop/BackDrop";
export const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <nav className="mobile-navigation-wrapper">
        <HamburgerButton openHandler={setOpenDrawer} />
        <SideBar isOpen={openDrawer} openHandler={setOpenDrawer} />
        {!openDrawer || <BackDrop openHandler={setOpenDrawer} />}
      </nav>
    </>
  );
};
