import "./DesktopNavigation.scss";
import  {Logo} from "../../logo/Logo";
import { useHistory } from "react-router-dom";
/** Used @Link which converts to an a-tag with history push like useHistory logic instead of reloading page */
/** @RoutingPath Variables with link paths */
import RoutingPath from "../../../routes/RoutingPath";

/** useContext React Hook: https://reactjs.org/docs/hooks-reference.html#usecontext */
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";

/** User Profile Image */
import { Profile } from "../../profile/Profile";

import { MenuPrimaryItems } from "../menuprimaryitems/MenuPrimaryItems";

import { SignOutTrigger } from "../../signouttrigger/SignOutTrigger";

export const DesktopNavigation = () => {
  const history = useHistory();

  // const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const [authenticatedUser] = useContext(UserContext);

  const displaySignInTrigger = () => {
    //return authenticatedUser?.username ? (
    return authenticatedUser ? (
      <li className="navigation-tabs-item">
        <Profile />
        <SignOutTrigger componentClass="button button-secondary" />
      </li>
    ) : (
      <li
        className="navigation-tabs-item clickable"
        onClick={() => history.push(RoutingPath.signInView)}
      >
        Sign in
      </li>
    );
  };

  return (
    <>
      <nav className="desktop-navigation-wrapper">
        <ul className="navigation-tabs-list">
          <li
            className="navigation-tabs-item"
          >
           <Logo />
          </li>
          <li className="desktop-navigation-tabs">
            <ul className="desktop-navigation-tabs-list">
              <MenuPrimaryItems />
            </ul>
          </li>
          {displaySignInTrigger()}
        </ul>
      </nav>
    </>
  );
};
