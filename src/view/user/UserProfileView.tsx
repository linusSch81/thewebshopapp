import { Redirect } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
export const UserProfileView = () => {
  return localStorage.user ? (
    <div className="view">
      <h1>Welcome {localStorage.user}!</h1>
      <p> * Special user offers * </p>
      
      
      <p> * component change the user profile details, e.g shipping address, payment details (credit card) etc*/</p>
      
      <p> * Link to UserShopHistoryView or add same component that is used there here to see the previously purchased user history * </p>
      
<h1>Settings view</h1>

    </div>
  ) : (
    <>
      <Redirect to={RoutingPath.homeView} />
    </>
  );
};
