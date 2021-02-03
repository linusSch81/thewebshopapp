import { Redirect } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
export const UserProfileView = () => {
  return localStorage.user ? (
    <div className="view">
      <h1>Welcome {localStorage.user}!</h1>
    </div>
  ) : (
    <>
      <Redirect to={RoutingPath.homeView} />
    </>
  );
};
