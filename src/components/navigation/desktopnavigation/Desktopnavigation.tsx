import "./Desktopnavigation.css";
import Logotype from "../../../shared/images/logo.png";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom" //used @Link which converts to an a-tag with history push like useHistory logic instead of reloading page
import RoutingPath from "../../../routes/RoutingPath"; //variables with link paths

export const Desktopnavigation = () => {
const history = useHistory()
  
  
  return (
    <>
      <nav className="desktop-navigation-wrapper">
        <strong>Desktop nav</strong>
        <ul>
          <li onClick={() => history.push(RoutingPath.homeView)}>
            <img src={Logotype} alt="" className="navigation-logo" />
          </li>
          <li onClick={() => history.push("/this-page-does-not-exist")}>test 404</li>
          {/* <li onClick={() => history.push(RoutingPath.aboutView)}>About</li>  */}
          <li><Link to={RoutingPath.aboutView}>About</Link></li>
          <li onClick={() => history.push(RoutingPath.signInView)}>Sign in</li>
        </ul>
      </nav>
      
    </>
  );
};