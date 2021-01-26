// import { useContext } from "react";
// import { UserContext } from "../../shared/provider/UserProvider";
import "./Profile.css";
export const Profile = () => {
  /** useContext makes it global, otherwise useState can be used instead */
  // const [authenticateUser, setAuthenticatedUser] = useContext(UserContext);
  return (
    <div className="profile-wrap">
      <span className="profile-image">
        <img
          src={"https://thispersondoesnotexist.com/image"}
          alt={""}
          /** Inline style attribute in React: https://www.w3schools.com/react/react_css.asp */
          // style={{ width: "50px", opacity: "0.5" }}
          className="profile-image-img"
        />
      </span>
      <nav className="profile-dropdown">
        <ul className="profile-dropdown-list">
          <li className="profile-dropdown-item">Item</li>
          <li className="profile-dropdown-item">Item</li>
          <li className="profile-dropdown-item">Logout</li>
        </ul>
      </nav>
    </div>
  );
};
