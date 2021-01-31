import "./DesktopNavigationTabs.css";
import RoutingPath from "../../../../routes/RoutingPath";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

/** User Profile Image */
// import { Profile } from "../../../profile/Profile";

/** useContext React Hook: https://reactjs.org/docs/hooks-reference.html#usecontext */
// import { useContext } from "react";
// import { UserContext } from "../../../../shared/provider/UserProvider";

/** const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); */

export const DesktopNavigationTabs = () => {
  // const history = useHistory();
  // const [authenticatedUser] = useContext(UserContext);

  return (
    <>
      <li className="navigation-tabs-item">
        <Link to={RoutingPath.aboutView}>About</Link>
      </li>

      <li className="navigation-tabs-item">
        <Link to={RoutingPath.brandsView}>Brands</Link>
      </li>
      <li className="navigation-tabs-item">
        <Link to={RoutingPath.accessoriesView}>Accessories</Link>
      </li>
      <li className="navigation-tabs-item">
        <Link to={RoutingPath.expertiseView}>Expertise</Link>
      </li>

      <li className="navigation-tabs-item">
        <Link to={RoutingPath.newsView}>News</Link>
      </li>

      <li className="navigation-tabs-item">
        <Link to={RoutingPath.shopView}>Shop</Link>
      </li>

      {/* <li
        className="navigation-tabs-item"
        onClick={() => history.push(RoutingPath.testView)}
      >
        testView
      </li> */}

      {/* <li className="navigation-tabs-item">
        <Link to={RoutingPath.categoryView}>Category</Link>
      </li> */}

      {/* <li className="navigation-tabs-item">
        <Link to={RoutingPath.productView}>Product</Link>
      </li> */}
      {/* <li className="navigation-tabs-item">
        <Link to={RoutingPath.subCategoryView}>Sub Category</Link>
      </li> */}
      {/* <li className="navigation-tabs-item">{authenticatedUser?.username}</li> */}
    </>
  );
};
