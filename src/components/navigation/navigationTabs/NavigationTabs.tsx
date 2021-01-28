import RoutingPath from "../../../routes/RoutingPath";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

/** User Profile Image */
import { Profile } from "../../profile/Profile";

/** useContext React Hook: https://reactjs.org/docs/hooks-reference.html#usecontext */
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";

/** const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); */

export const NavigationTabs = () => {
  const history = useHistory();
  const [authenticatedUser] = useContext(UserContext);
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
    </>
  );
};
