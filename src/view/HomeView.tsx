import RoutingPath from "../routes/RoutingPath";
import { Link } from "react-router-dom";


export const HomeView = () => {
  return (
    <div className="view">
      <h1>Inlämningsuppgift 2 - React</h1>
      <h2>Hej Arasto!</h2>
      <p>VG uppgiften finns i: "thewebshopapp/src/view/<strong>SignInView.tsx</strong>" ( <Link to={RoutingPath.signInView}>{RoutingPath.signInView}</Link> )</p>
    </div>
  );
};
