import { TestApi3 } from "../../components/test/testapi3/TestApi3";

import PokemonAPIService from "../../shared/apitest/service/PokemonAPIService";
import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export const TestApi3View = () => {
	const [pokemonData, setPokemonData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const debounceSearchTerm = useDebounce(search, 500);

	const fetchData = async () => {
		setLoading(true);
		const { data } = await PokemonAPIService.searchPokemon(search);
		setPokemonData(data);
		console.log(data);
		setLoading(false);
	};

	const displayData = () => {
		if (!loading) {
			return (
				<div>
					<img src={pokemonData.sprites?.front_default} alt="" />
					<div>Name: {pokemonData.name}</div>
					<div>Height: {pokemonData.height}</div>
					<div>Weight: {pokemonData.weight}</div>
				</div>
			);
		}
	};

	useEffect(() => {
		fetchData();
		// }, [search]);
	}, [debounceSearchTerm]);

	return (
		<div className="view">
			<TestApi3 />
			<label>
				<div>Who is that Pokemon?</div>
				<input
					type="text"
					placeholder="e.g charizard"
					onChange={(event) => setSearch(event.target.value)}
				/>
			</label>

			{loading ? <div>...</div> : displayData()}
		</div>
	);
};
