/** e.g https://pokeapi.co/api/v2/pokemon/ditto */
import http from "../PokemonAPI";

const searchPokemon = (search: string) => {
	return http.get(`/pokemon/${search}`);
};

const getAllPokemon = () => {
	return http.get("/pokemon");
	// return http.get("/pokemon?limit=1120")
};

const logger = {
	searchPokemon,
	getAllPokemon
}

export default logger;
