import "./SideBar.scss";
import { MenuPrimaryItems } from "../../menuprimaryitems/MenuPrimaryItems";
import {Profile} from "../../../profile/Profile"

export const SideBar = (props: {
  drawIsOpen: boolean;
  drawerHandler: Function;
  // drawerHandler: (handler: boolean) => void; /** Hårdtypad */
}) => {
  return (
    <div
      className={
        props.drawIsOpen ? "sidebar sidebar-open" : "sidebar sidebar-closed"
      }
    >
      <Profile layout="mobile" />
      <ul className="mobile-navigation-tabs-list navigation-tabs-list">
        <MenuPrimaryItems />
      </ul>
      
      <button
        onClick={() => props.drawerHandler(false)}
        className="sidebar-close-trigger button"
      >
        Close
      </button>
    </div>
  );
};
