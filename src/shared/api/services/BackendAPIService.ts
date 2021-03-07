import http from "../BackendAPI";
import { iCreateNewUser } from "../../interface/interface";

const createUser = (data: iCreateNewUser) => {
	return http.post("/user/", data);
};

const getAllUsers = () => {
	return http.get("/user");
};

const deleteUser = (_id: string) => {
	console.log(`/user/${_id}`);
	return http.delete(`/user/${_id}`);
};

const logger = {
	createUser,
	getAllUsers,
	deleteUser,
};

export default logger;
