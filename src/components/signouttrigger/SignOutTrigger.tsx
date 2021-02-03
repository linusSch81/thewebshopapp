import "./SignOutTrigger.css";

/** Sign out 1: remove user from global variable */
import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";

/** Sign out 3: Redirect user to another view e.g HomeView */
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";

export const SignOutTrigger = (props: { text?: string; componentClass?: string; }) => {
  /** Sign out 1: remove user from global variable */
  // const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const [,setAuthenticatedUser] = useContext(UserContext);

  /** Sign out 3: Redirect user to another view e.g HomeView */
  const history = useHistory();

  /** Sign out function */
  const logout = () => {
    /** Sign out 1: remove user from global variable */
    setAuthenticatedUser(false); /** set it to undefined or false */

    /** Sign out 2: remove cache from browser */
    localStorage.removeItem("user");

    /** Sign out 3: Redirect user to another view e.g HomeView */
    history.push(RoutingPath.homeView);
  };

  return (
    <button className={props.componentClass ? (props.componentClass + " sign-out-trigger clickable") : "sign-out-trigger clickable"} onClick={() => logout()}>
      {props.text ? props.text : "Sign out"}
    </button>
  );
};
