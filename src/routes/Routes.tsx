import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFoundView } from "../view/NotFoundView";
import { HomeView } from "../view/HomeView";
import { AboutView } from "../view/AboutView";
import { SignInView } from "../view/SignInView";
import { TestView } from "../view/TestView";

import RoutingPath from "./RoutingPath";

import { UserContext } from "../shared/provider/UserProvider";
import { useEffect, useContext } from "react";

export const Routes = (props: { children: React.ReactChild }) => {
  /** Make it so that the user is still logged in when they return */
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    useEffect(
    () => {
      /** Added if statement because when localStorage is empty in the browser it gets 'null'(and not undefined) value which returns TRUE (undefined would return false) */
      if (localStorage.getItem("user")) {
        // setAuthenticatedUser(localStorage.getItem("user"));
        setAuthenticatedUser({ username: localStorage.getItem("user") });
      }
      return () => {
        /** cleanup */
      };
    },
    []
  );
  
  return (
    <BrowserRouter>
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route exact path={RoutingPath.testView} component={TestView} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
};
