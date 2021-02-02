// import { useContext } from "react";
// import { UserContext } from "../../shared/provider/UserProvider";
import "./Profile.css";
import {ProfileDropDown} from "./profiledropdown/ProfileDropDown"
export const Profile = (props: {layout?: string}) => {
  /** useContext makes it global, otherwise useState can be used instead */
  // const [authenticateUser, setAuthenticatedUser] = useContext(UserContext);
  return (
    <div className={props.layout ? ("profile-" + props.layout + "-wrap profile-wrap") : "profile-wrap"}>
      <span className="profile-image">
        <img
          src={"https://thispersondoesnotexist.com/image"}
          alt={""}
          /** Inline style attribute in React: https://www.w3schools.com/react/react_css.asp */
          // style={{ width: "50px", opacity: "0.5" }}
          className="profile-image-img"
        />
      </span>
      <ProfileDropDown />
    </div>
  );
};
