import { Redirect } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
export const UserProfileView = () => {
  return localStorage.user ? (
    <>
      <h1>Welcome {localStorage.user}!</h1>
    </>
  ) : (
    <>
      <Redirect to={RoutingPath.homeView} />
    </>
  );
};
