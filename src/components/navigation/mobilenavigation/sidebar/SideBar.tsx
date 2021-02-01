import "./SideBar.css";
import { DesktopNavigationTabs } from "../../desktopnavigation/desktopnavigationtabs/DesktopNavigationTabs";

export const SideBar = (props: {
  drawIsOpen: boolean;
  drawerHandler: Function;
  // drawerHandler: (handler: boolean) => void;
}) => {
  return (
    <div
      className={
        props.drawIsOpen ? "sidebar sidebar-open" : "sidebar sidebar-closed"
      }
    >
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
