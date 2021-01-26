import "./Desktopnavigation.css";
import Logotype from "../../../shared/images/logo.png";
import { useHistory } from "react-router-dom";
/** Used @Link which converts to an a-tag with history push like useHistory logic instead of reloading page */
import { Link } from "react-router-dom";
/** @RoutingPath Variables with link paths */
import RoutingPath from "../../../routes/RoutingPath";

/** useContext React Hook: https://reactjs.org/docs/hooks-reference.html#usecontext */
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";

/** User Profile Image */
import { Profile } from "../../profile/Profile";

export const Desktopnavigation = () => {
  const history = useHistory();

// const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
const [authenticatedUser, ] = useContext(UserContext);

  const displaySignInTrigger = () => {
    //return authenticatedUser?.username ? (
    return authenticatedUser ? (
      <li className="desktop-navigation-item">
        <Profile />
        <div>User: {authenticatedUser.username} </div>
        <Link to={RoutingPath.signInView}>Sign in</Link>
      </li>
    ) : (
      <li
        className="desktop-navigation-item"
        onClick={() => history.push(RoutingPath.signInView)}
      >
        Sign in
      </li>
    );
  };

  return (
    <>
      <nav className="desktop-navigation-wrapper">
        <strong>Desktop nav</strong>
        <ul className="desktop-navigation-list">
          <li
            className="desktop-navigation-item"
            onClick={() => history.push(RoutingPath.homeView)}
          >
            <img src={Logotype} alt="" className="navigation-logo" />
          </li>
          <li
            className="desktop-navigation-item"
            onClick={() => history.push("/this-page-does-not-exist")}
          >
            test 404
          </li>
          <li
            className="desktop-navigation-item"
            onClick={() => history.push(RoutingPath.testView)}
          >
            testView
          </li>
          <li className="desktop-navigation-item">
            <Link to={RoutingPath.aboutView}>About</Link>
          </li>
          {/* <li className="desktop-navigation-item">{authenticatedUser?.username}</li> */}
          {displaySignInTrigger()}
        </ul>
      </nav>
    </>
  );
};
