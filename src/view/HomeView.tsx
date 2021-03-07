import RoutingPath from "../routes/RoutingPath";
import { Link } from "react-router-dom";

export const HomeView = () => {
  return (
    <div className="view">
      <h1>Home View</h1>
      <p>Lorem Ipsum...</p>
      <h2>New / latest Items</h2>
      <p>Lorem Ipsum ...</p>
      <h2>Popular items</h2>
      <p>Lorem Ipsum ...</p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ opacity: 0.5 }}>
        <h1>Development Notes</h1>

        <strong>Course links</strong>
        <ul>
          <li>
            <Link to={RoutingPath.brandsView}>Brands</Link>
          </li>
          <li>
            <Link to={RoutingPath.accessoriesView}>Accessories</Link>
          </li>
          <li>
            <Link to={RoutingPath.expertiseView}>Expertise</Link>
          </li>
        </ul>

        <strong>Test links</strong>
        <ul>
          <li>
            <Link to={RoutingPath.testView}>TestView</Link>
          </li>
          <li>
            <Link to={RoutingPath.testApi1View}>Test API 1</Link>
          </li>
          <li>
            <Link to={RoutingPath.testApi2View}>Test API 2</Link>
          </li>
          <li>
            <Link to={RoutingPath.testApi3View}>Test API 3</Link>
          </li>
          <li>
            <Link to={RoutingPath.testApi4View}>Test API 4</Link>
          </li>
          <li>
            <Link to={RoutingPath.testApi5View}>Test API 5</Link>
          </li>
          <li>
            <Link to={RoutingPath.testApi6View}>Test API 6</Link>
          </li>
          <li>
            <Link to={RoutingPath.testApi7View}>Test API 7</Link>
          </li>
          <li>
            <Link to={RoutingPath.testApiBackendView}>Test API Backend (server)</Link>
          </li>
        </ul>

        <h2>Possible Future upscaling</h2>
        <ul>
          <li>
            <ul>
              <li>
                [ DEPARTMENT ]
                <ul>
                  <li>
                    [ CATEGORY ]
                    <ul>
                      <li>
                        [ SUB-CATEGORY]
                        <ul>
                          <li>[ PRODUCT ]</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={RoutingPath.departmentView}>Unisex</Link>

                <ul>
                  <li>
                    <Link to={RoutingPath.categoryView}>Brand</Link>

                    <ul>
                      <li>
                        <Link to={RoutingPath.subCategoryView}>Backpack</Link>

                        <ul>
                          <li>
                            <em>
                              <Link to={RoutingPath.productView}>Model</Link>
                            </em>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Women</li>
              <li>Men</li>
              <li>Kids</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
