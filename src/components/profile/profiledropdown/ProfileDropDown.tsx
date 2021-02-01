/** Sign out 2: remove user from global variable */
import { useContext } from "react";

/** Sign out 4: Redirect user to another view e.g HomeView */
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";

import { UserContext } from "../../../shared/provider/UserProvider";

import "./ProfileDropDown.css";

export const ProfileDropDown = () => {
  /** Sign out 2: remove user from global variable */
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  /** Sign out 4: Redirect user to another view e.g HomeView */
  const history = useHistory();

  /** Sign out 2: remove user from global variable */
  const logout = () => {
    setAuthenticatedUser(false); /** set it to undefined or false */

    /** Sign out 1: remove cache from browser */
    localStorage.removeItem("user");
    /** Sign out 4: Redirect user to another view e.g HomeView */
    history.push(RoutingPath.homeView);
  };

  return (
    <nav className="profile-dropdown">
      <ul className="profile-dropdown-list">
        {/* <li className="profile-dropdown-item">Profile</li> */}
        {/* <li className="profile-dropdown-item">Settings</li> */}
        {/** Sign out 3: Onclick to trigger function  */}
        <li className="profile-dropdown-item" onClick={() => logout()}>
          Sign out
        </li>
      </ul>
    </nav>
  );
};
