/** @useState: used for saving and updating variables, @useContext */
import { useState, useContext } from "react";

import { loginCredentialsInterface } from "../shared/interface/interface";
import { useHistory } from "react-router-dom";
import RouteringPath from "../routes/RoutingPath";

import { UserContext } from "../shared/provider/UserProvider";

export const SignInView = () => {
  /** Testing the React useState */
  const [testValue, setTestValue] = useState("Default value");

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

  /** (2020-01-25 LS) 'VG' uppgift skapa function för onChange istället för onChange med spread operator */

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
      <br />
      <br />
      <br />
      <hr />
      <h1>Testing the React useState (testValue, setTestValue)</h1>
      <p>
        <strong>testValue: </strong>
        {testValue}
      </p>
      <p>
        <button onClick={() => setTestValue("ran setTestValue")}>
          Update a set value (onClick)
        </button>
      </p>

      <input
        placeholder="Update value (onChange)"
        /** Target the input tag value attribute. */
        onChange={(event) => setTestValue(event.target.value)}
      />
      <hr />
    </>
  );
};
