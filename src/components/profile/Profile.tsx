import { useContext } from "react";
import { InvalidatedProjectKind } from "typescript";
import { UserContext } from "../../shared/provider/UserProvider";

export const Profile = () => {
  const [authenticateUser, setAuthenticatedUser] = useContext(UserContext);
  return (
    <span>
      <img
        src={"https://thispersondoesnotexist.com/image"}
        alt={""}
        /** Inline style attribute in React: https://www.w3schools.com/react/react_css.asp */
        style={{ width: "50px", opacity: "0.5" }}
      />
    </span>
  );
};