import axios from "axios";

const URL = "https://swapi.dev/api/";
const StarWarsAPI = axios.create({
	baseURL: URL,
});

export default StarWarsAPI;
