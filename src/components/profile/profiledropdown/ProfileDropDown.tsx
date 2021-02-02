import "./ProfileDropDown.css";
import { SignOutTrigger } from "../../signouttrigger/SignOutTrigger";

export const ProfileDropDown = () => {
  return (
    <nav className="profile-dropdown">
      <ul className="profile-dropdown-list">
        {/* <li className="profile-dropdown-item">Profile</li> */}
        {/* <li className="profile-dropdown-item">Settings</li> */}
        <li className="profile-dropdown-item">
          <SignOutTrigger text="Logga ut" />
        </li>
      </ul>
    </nav>
  );
};