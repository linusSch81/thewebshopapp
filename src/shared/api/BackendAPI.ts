import axios from "axios"

const developmentURL = "http://localhost:3001";
// const productionURL = "";

const BackendAPI = axios.create({
	baseURL: developmentURL
})

export default BackendAPI