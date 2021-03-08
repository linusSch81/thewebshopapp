/**
 * https://petstore.swagger.io/v2/pet/findByStatus?status=available
 * https://petstore.swagger.io/v2/pet/findByStatus?status=pending
 * https://petstore.swagger.io/v2/pet/findByStatus?status=sold
 */
import http from "../PetStoreAPI";

const findByStatus = (status: string) => {
	return http.get(`/pet/findByStatus?status=${status}`);
};

const logger = {
	findByStatus,
};

export default logger;
