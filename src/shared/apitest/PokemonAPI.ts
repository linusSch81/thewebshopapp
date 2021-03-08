import axios from "axios";
const URL = "https://pokeapi.co/api/v2/";

const PokemonAPI = axios.create({
	baseURL: URL,
});

export default PokemonAPI;
