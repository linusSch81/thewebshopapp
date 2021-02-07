import "./MenuPrimaryItems.scss";
import RoutingPath from "../../../routes/RoutingPath";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const MenuPrimaryItems = () => {
  return (
    <>
      <li className="navigation-tabs-item">
        <Link to={RoutingPath.aboutView} className="navigation-tabs-trigger">
          About
        </Link>
      </li>

      <li className="navigation-tabs-item">
        <Link
          to={RoutingPath.backPacksView}
          className="navigation-tabs-trigger"
        >
          Our Backpacks
        </Link>
        <ul className="navigation-tabs-sub-list">
          <li className="navigation-tabs-sub-item">
            <Link
              to={RoutingPath.productView}
              className="navigation-tabs-sub-trigger"
            >
              Model X
            </Link>
          </li>

          <li className="navigation-tabs-sub-item">
            <Link
              to={RoutingPath.productView}
              className="navigation-tabs-sub-trigger"
            >
              Model Y
            </Link>
          </li>
          <li className="navigation-tabs-sub-item">
            <Link
              to={RoutingPath.productView}
              className="navigation-tabs-sub-trigger"
            >
              Model Z
            </Link>
          </li>
        </ul>
      </li>

      <li className="navigation-tabs-item">
        <Link to={RoutingPath.newsView} className="navigation-tabs-trigger">
          News
        </Link>
      </li>

      <li className="navigation-tabs-item">
        <Link to={RoutingPath.shopView} className="navigation-tabs-trigger">
          Shop
        </Link>
      </li>
    </>
  );
};
