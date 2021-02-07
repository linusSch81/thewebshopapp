import { useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "../shared/provider/UserProvider";
import RoutingPath from "./RoutingPath";

/** Above and under VIEWS */
import {DomStart} from "../components/domstart/DomStart"
import {DomEnd} from "../components/domend/DomEnd"

/** VIEWS */
import { NotFoundView } from "../view/NotFoundView";
import { HomeView } from "../view/HomeView";
import { AboutView } from "../view/AboutView";
import { SignInView } from "../view/SignInView";
import { NewsView } from "../view/navigationtabsviews/news/NewsView";
import { ShopView } from "../view/shop/ShopView";
import { UserProfileView } from "../view/user/UserProfileView";
import { DepartmentView } from "../view/department/DepartmentView";
import { CategoryView } from "../view/category/CategoryView";
import { SubCategoryView } from "../view/subcategory/SubCategoryView";
import { ProductView } from "../view/product/ProductView";
/**/
import { BackPacksView } from "../view/backpacks/BackPacksView";
/**/
import { TestView } from "../view/TestView";
import { AccessoriesView } from "../view/navigationtabsviews/accessories/AccessoriesView";
import { BrandsView } from "../view/navigationtabsviews/brands/BrandsView";
import { ExpertiseView } from "../view/navigationtabsviews/expertise/ExpertiseView";
/**/
export const Routes = () => {
  /** Make it so that the user is still logged in when they return */
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  useEffect(() => {
    /** Added if statement because when localStorage is empty in the browser it gets 'null'(and not undefined) value which returns TRUE (undefined would return false) */
    if (localStorage.getItem("user")) {
      // setAuthenticatedUser(localStorage.getItem("user"));
      setAuthenticatedUser({ username: localStorage.getItem("user") });
    }
    return () => {
      /** cleanup */
    };
  }, []);

  return (
    <BrowserRouter>
      <DomStart />
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.signInView} component={SignInView} />

        <Route exact path={RoutingPath.newsView} component={NewsView} />
        <Route exact path={RoutingPath.shopView} component={ShopView} />
        <Route
          exact
          path={RoutingPath.userProfileView}
          component={UserProfileView}
        />

        <Route
          exact
          path={RoutingPath.departmentView}
          component={DepartmentView}
        />
        <Route exact path={RoutingPath.categoryView} component={CategoryView} />
        <Route
          exact
          path={RoutingPath.subCategoryView}
          component={SubCategoryView}
        />
        <Route exact path={RoutingPath.productView} component={ProductView} />

        <Route exact path={RoutingPath.backPacksView} component={BackPacksView} />
        


        {/** DEVELOPMENT and TEST VIEWS */}
        <Route exact path={RoutingPath.testView} component={TestView} />
        <Route
          exact
          path={RoutingPath.accessoriesView}
          component={AccessoriesView}
        />
        <Route exact path={RoutingPath.brandsView} component={BrandsView} />
        <Route
          exact
          path={RoutingPath.expertiseView}
          component={ExpertiseView}
        />

        <Route component={NotFoundView} />
      </Switch>
      <DomEnd />
    </BrowserRouter>
  );
};
