import { Greeting } from "../components/greeting/Greeting";

/** React State Hook (useState): https://reactjs.org/docs/hooks-state.html */
/** @useState: used for saving and updating variables, @useContext */
import { useState } from "react";

/** @useEffect: https://reactjs.org/docs/hooks-reference.html#useeffect*/
import { useEffect } from "react";

/** useContext React Hook: https://reactjs.org/docs/hooks-reference.html#usecontext */
import { useContext } from "react";
import { UserContext } from "../shared/provider/UserProvider";

/** React Context (createContext): https://reactjs.org/docs/context.html */
// import { createContext } from "react";

export const TestView = () => {
  /** Testing the React useState */
  const [testValue, setTestValue] = useState("Default value");

  /** Testing the React UserContext */
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  /** Testing the React useEffect */
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("TestView: useEffect 'effect': You are loading the view");
    return () => {
      console.log("TestView: useEffect 'cleanup': You are leaving the view");
    };
    // }, [number])
  }, []);

  return (
    <>
      <h1>Testing</h1>
      <h2>components Greeting</h2>
      <ul>
        <li>
          <Greeting fname="John" />
        </li>
        <li>
          <Greeting fname={"John"} lname={"Doe"} />
        </li>
      </ul>
      <hr />
      <h2>useState (testValue, setTestValue)</h2>
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
      <h2>UserContext</h2>

      <button
        onClick={() => {
          console.log(authenticatedUser);
        }}
      >
        console.log: authenticatedUser
      </button>

      <hr />
      <h1>Testing the React useEffect</h1>
      <p>
        @setNumber is run onclick. See <strong>console</strong> for logs with
        @useEffect: effect, cleanup and input in use.
      </p>
      <ul>
        <li>effect: when entering the view</li>
        <li>cleanup: when leaving the view</li>
        <li>
          input: run the view again if value is updated. (Leave empty if you
          dont want it to update)
        </li>
      </ul>

      <h3>@number: {number}</h3>
      <button onClick={() => setNumber(number + 1)}>
        Increment with @setNumber
      </button>

      <hr />
    </>
  );
};
