import "./SideBar.scss";
import { MenuPrimaryItems } from "../../menuprimaryitems/MenuPrimaryItems";
import {Profile} from "../../../profile/Profile"

export const SideBar = (props: {
  isOpen: boolean;
  openHandler: Function;
  // setOpenDrawer: (handler: boolean) => void; /** Hårdtypad */
}) => {
  return (
    <div
      className={
        props.isOpen ? "sidebar sidebar-open" : "sidebar sidebar-closed"
      }
    >
      <Profile layout="mobile" />
      <ul className="mobile-navigation-tabs-list navigation-tabs-list">
        <MenuPrimaryItems />
      </ul>
      
      <button
        onClick={() => props.openHandler(false)}
        className="sidebar-close-trigger button"
      >
        Close
      </button>
    </div>
  );
};
