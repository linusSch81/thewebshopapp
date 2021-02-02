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
    /** localStorage property
     * stored data is saved across browser session (unlike sessionStorage):
     *    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
     *
     *    Storage setItem() Method:
     *      https://www.w3schools.com/jsref/met_storage_setitem.asp
     */
    localStorage.setItem("user", loginCredentials.username);
  
    /** Probably not a good idea to store password in localStorage */
    // localStorage.setItem("password", loginCredentials.password);

    /** Add @loginCredentials stateValue globaly */
    setAuthenticatedUser(loginCredentials);
    history.push(RouteringPath.userProfileView);
  };

  const updateLoginCredential = (inCase: string, inValue: string) => {
    switch (inCase) {
      case "password":
        setLoginCredentials({
          ...loginCredentials,
          password: inValue,
        });

        break;
      case "username":
        setLoginCredentials({
          ...loginCredentials,
          username: inValue,
        });
        break;
      default:
        console.log(
          `Error - updateLoginCredential("${inCase}","${inValue}"): "${inCase}" not set up in loginCredentialsInterface`
        );
    }
  };

  return (
    <>
      <h1>Sign in</h1>
      <h2>Login Credentials</h2>
      <form>
        <input
          type="text"
          placeholder={"User Name"}
          onChange={(event) => {
            updateLoginCredential("username", event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder={"Password"}
          onChange={(event) => {
            updateLoginCredential("password", event.target.value);
          }}
          
          
          /** Spread operator "...loginCredentials" is used so that only the @password is updated */
          /*
          onChange={(event) => {
            setLoginCredentials({
              ...loginCredentials,
              password: event.target.value,
            });
          }}
          */
          
        />
        <br />
        <button onClick={() => signIn()}>Sign in</button>
      </form>
    </>
  );
};
