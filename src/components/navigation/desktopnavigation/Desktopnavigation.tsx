import "./Desktopnavigation.css";
import Logotype from "../../../shared/images/logo.png";
import { useHistory } from "react-router-dom";
/** Used @Link which converts to an a-tag with history push like useHistory logic instead of reloading page */
import { Link } from "react-router-dom";
/** @RoutingPath Variables with link paths */
import RoutingPath from "../../../routes/RoutingPath";

import { useContext } from "react";
import RouteringPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";

/** User Profile Image */
import { Profile } from "../../profile/Profile";

export const Desktopnavigation = () => {
  const history = useHistory();

  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const displaySignInTrigger = () => {
    return authenticatedUser ? (
      <li onClick={() => history.push(RoutingPath.signInView)}>
        <Profile /> Signed in as: {authenticatedUser.username}
      </li>
    ) : (
      <li onClick={() => history.push(RoutingPath.signInView)}>Sign in</li>
    );
  };

  return (
    <>
      <nav className="desktop-navigation-wrapper">
        <strong>Desktop nav</strong>
        <ul>
          <li onClick={() => history.push(RoutingPath.homeView)}>
            <img src={Logotype} alt="" className="navigation-logo" />
          </li>
          <li onClick={() => history.push("/this-page-does-not-exist")}>
            test 404
          </li>
          {/* <li onClick={() => history.push(RoutingPath.aboutView)}>About</li>  */}
          <li>
            <Link to={RoutingPath.aboutView}>About</Link>
          </li>
          {/* <li onClick={() => history.push(RoutingPath.signInView)}>Sign in</li> */}
          {/* <li>{authenticatedUser?.username}</li> */}
          {/* // optional chaining */}
          {displaySignInTrigger()}
        </ul>
      </nav>
    </>
  );
};
