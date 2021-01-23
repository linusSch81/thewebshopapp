import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFoundView } from "../view/NotFoundView";
import { HomeView } from "../view/HomeView";
import { AboutView } from "../view/AboutView";
import { SignInView } from "../view/SignInView";

import RoutingPath from "./RoutingPath";

export const Routes = (props: { children: React.ReactChild }) => {
  // const { children } = props;
  return (
    <BrowserRouter>
      {props.children}
      {/* {children} */}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.signInView} component={SignInView} />
        <Route component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
};
