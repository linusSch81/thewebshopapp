import http from "../BackendAPI";
import {iCreateNewUser} from "../../interface/interface"

const createUser = (data: iCreateNewUser) => {
  return http.post("/user/", data);
};

export default {
	createUser
};