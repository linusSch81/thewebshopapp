import "./ProfileDropDown.scss";
import RoutingPath from "../../../routes/RoutingPath";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { SignOutTrigger } from "../../signouttrigger/SignOutTrigger";

export const ProfileDropDown = () => {
  return (
    <nav className="profile-dropdown">
      <ul className="profile-dropdown-list">
        <li className="profile-dropdown-item">
          {" "}
          <Link
            to={RoutingPath.userProfileView}
            className="navigation-tabs-trigger"
          >
            Profile
          </Link>
        </li>
        <li className="profile-dropdown-item" style={{ opacity: 0.25 }}>
          Settings
        </li>
        <li className="profile-dropdown-item">
          <SignOutTrigger text="Logga ut" />
        </li>
      </ul>
    </nav>
  );
};
