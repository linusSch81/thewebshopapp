import { useState } from "react"; //used for saving and updating variables
import { loginCredentials } from "../shared/interface/interface";
import { useHistory } from "react-router-dom";
import RouteringPath from "../routes/RoutingPath";

export const SignInView = () => {
  /** Testing the React useState */
  const [testValue, setTestValue] = useState("Default value");

  /** Login Credentials <INTERFACE> (https://drive.google.com/file/d/1vwMrN2qFAbMrCe_HK29r6MtsJP59FoC2/view 1:11:25) */
  const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({
    username: "User Name",
    password: "Password",
  });
  const history = useHistory();
  const signIn = () => {
    history.push(RouteringPath.homeView);
    localStorage.setItem("user", loginCredentials.username); //Storage setItem() Method: https://www.w3schools.com/jsref/met_storage_setitem.asp
  };

  return (
    <>
      <h1>Sign in</h1>
      <h2>Login Credentials</h2>
      <form>
        <input
          placeholder={loginCredentials.username}
          onChange={(event) =>
            setLoginCredentials({
              ...loginCredentials, // ... is the spread operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
              username: event.target.value, //spread operator used so that only the username is updated
            })
          }
        />
        <br />
        <input
          placeholder={loginCredentials.password}
          onChange={(event) =>
            setLoginCredentials({
              ...loginCredentials,
              password: event.target.value, //spread operator used so that only the password is updated
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
        onChange={(event) => setTestValue(event.target.value)} //target the input tag value attribute.
      />
      <hr />
    </>
  );
};
