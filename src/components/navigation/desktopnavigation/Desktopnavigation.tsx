import "./Desktopnavigation.css";
import Logotype from "../../../shared/images/logo.png";

export const Desktopnavigation = () => {
  return (
    <>
      <nav className="desktop-navigation-wrapper">
        <strong>Desktop nav</strong>
        <ul>
          <li>
            <img src={Logotype} alt="" className="navigation-logo" />
          </li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </nav>
    </>
  );
};