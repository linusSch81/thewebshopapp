import axios from "axios";

const URL = "https://petstore.swagger.io/v2/";

const PetStoreAPI = axios.create({
	baseURL: URL,
});

export default PetStoreAPI;
