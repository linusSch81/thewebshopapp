import "./SideBar.css";
import { DesktopNavigationTabs } from "../../desktopnavigation/desktopnavigationtabs/DesktopNavigationTabs";
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
      <ul className="mobile-navigation-tabs-list">
        <DesktopNavigationTabs />
      </ul>
      
      <button
        onClick={() => props.drawerHandler(false)}
        className="sidebar-close-trigger"
      >
        Close
      </button>
    </div>
  );
};
