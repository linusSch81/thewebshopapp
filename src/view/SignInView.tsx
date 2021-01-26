import { useState, useContext } from "react";

import { loginCredentialsInterface } from "../shared/interface/interface";
import { useHistory } from "react-router-dom";
import RouteringPath from "../routes/RoutingPath";

import { UserContext } from "../shared/provider/UserProvider";

export const SignInView = () => {
  /** Login Credentials <INTERFACE> (https://drive.google.com/file/d/1vwMrN2qFAbMrCe_HK29r6MtsJP59FoC2/view 1:11:25) */
  const [
    loginCredentials,
    setLoginCredentials,
  ] = useState<loginCredentialsInterface>({
    username: "",
    password: "",
  });
  const history = useHistory();

  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const signIn = () => {
    /** Storage setItem() Method: https://www.w3schools.com/jsref/met_storage_setitem.asp */
    localStorage.setItem("user", loginCredentials.username);

    /** Add @loginCredentials stateValue globaly */
    setAuthenticatedUser(loginCredentials);
    history.push(RouteringPath.homeView);
  };

  return (
    <>
      <h1>Sign in</h1>
      <h2>Login Credentials</h2>
      <form>
        <input
          placeholder={"User Name"}
          /** Spread operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */

          /** Spread operator "...loginCredentials" is used so that only the @username is updated */
          onChange={(event) =>
            setLoginCredentials({
              ...loginCredentials,
              username: event.target.value,
            })
          }
        />
        <br />
        <input
          placeholder={"Password"}
          /** Spread operator "...loginCredentials" is used so that only the @password is updated */
          onChange={(event) =>
            setLoginCredentials({
              ...loginCredentials,
              password: event.target.value,
            })
          }
          type="password"
        />
        <br />
        <button onClick={() => signIn()}>Sign in</button>
      </form>
    </>
  );
};
