import "./MenuPrimaryItems.scss";
import RoutingPath from "../../../routes/RoutingPath";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

/** User Profile Image */
// import { Profile } from "../../../profile/Profile";

/** useContext React Hook: https://reactjs.org/docs/hooks-reference.html#usecontext */
// import { useContext } from "react";
// import { UserContext } from "../../../../shared/provider/UserProvider";

/** const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext); */

export const MenuPrimaryItems = () => {
  // const history = useHistory();
  // const [authenticatedUser,] = useContext(UserContext);

  return (
    <>
      <li className="navigation-tabs-item">
        <Link to={RoutingPath.aboutView} className="navigation-tabs-trigger">About</Link>
      </li>

      <li className="navigation-tabs-item">
        <Link to={RoutingPath.brandsView} className="navigation-tabs-trigger">Brands</Link>
      </li>
      <li className="navigation-tabs-item">
        <Link to={RoutingPath.accessoriesView} className="navigation-tabs-trigger">Accessories</Link>
      </li>
      <li className="navigation-tabs-item">
        <Link to={RoutingPath.expertiseView} className="navigation-tabs-trigger">Expertise</Link>
      </li>

      <li className="navigation-tabs-item">
        <Link to={RoutingPath.newsView} className="navigation-tabs-trigger">News</Link>
      </li>

      <li className="navigation-tabs-item">
        <Link to={RoutingPath.shopView} className="navigation-tabs-trigger">Shop</Link>
      </li>

      {/* <li
        className="navigation-tabs-item clickable"
        onClick={() => history.push(RoutingPath.testView)}
      >
        testView
      </li> */}

      {/* <li className="navigation-tabs-item">
        <Link to={RoutingPath.categoryView} className="navigation-tabs-trigger">Category</Link>
      </li> */}

      {/* <li className="navigation-tabs-item">
        <Link to={RoutingPath.productView} className="navigation-tabs-trigger">Product</Link>
      </li> */}
      {/* <li className="navigation-tabs-item">
        <Link to={RoutingPath.subCategoryView} className="navigation-tabs-trigger">Sub Category</Link>
      </li> */}
      {/* <li className="navigation-tabs-item" className="navigation-tabs-trigger">{authenticatedUser?.username}</li> */}
    </>
  );
};
