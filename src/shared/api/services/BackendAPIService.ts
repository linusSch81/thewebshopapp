import http from "../BackendAPI";
import { iAdminUser } from "../../interface/interface";

const createUser = (data: iAdminUser) => {
	return http.post("/user/", data);
};

const getAllUsers = () => {
	return http.get("/user");
};

const deleteUser = (_id: string) => {
	//console.log(`/user/${_id}`);
	return http.delete(`/user/${_id}`);
};
const getUserById = (_id: string) => {
	// console.log(`/getuser/${_id} ???`);
	return http.get(`/getuser/${_id}`);
};

const updateUser = (_id: string, data: iAdminUser) => {
	//console.log(`/user/${_id}`);
	return http.put(`/user/${_id}`, data);
};

const logger = {
	createUser,
	getAllUsers,
	deleteUser,
	getUserById,
	updateUser,
};

export default logger;
