import "./Logo.scss";
import Logotype from "../../shared/images/logo.png";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
export const Logo = () => {
  const history = useHistory();
  return (
    <div
      className="logo clickable"
      onClick={() => history.push(RoutingPath.homeView)}
    >
      <img src={Logotype} alt="" className="logo-img" />
    </div>
  );
};
