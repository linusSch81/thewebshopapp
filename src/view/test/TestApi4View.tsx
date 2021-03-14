import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";

// import { TestApi4 } from "../../components/test/testapi4/TestApi4";
//import { AxiosResponse } from "axios";
import PokemonAPIService from "../../shared/apitest/service/PokemonAPIService";

export const TestApi4View = () => {
	const history = useHistory();

	//const [pokemonList, setPokemonList] = useState<AxiosResponse | []>([]);
	const [pokemonList, setPokemonList] = useState<any>([]);

	const fetchData = async () => {
		// const response = await PokemonAPIService.getAllPokemon();
		// console.log(response);
		// setPokemonList(response);
		const { data } = await PokemonAPIService.getAllPokemon();
		setPokemonList(data);
		//console.log(data);
	};
	useEffect(() => {
		fetchData();
	}, []);

	
	/** Sort object name alfabetically */
	const displayArray = pokemonList.results?.sort((a: any, b: any) => a.name.localeCompare(b.name));
	//const displayArray = pokemonList.results;
	
	const displayData = () => {
		return (
			<ul>
				{displayArray?.map((x: any) => (
					<li key={x.name.replace(/\W/g, "_")}>
						<strong
							onClick={() => {
								history.push(
									RoutingPath.testApi4DetailsView(x.name),
									x
								);
							}}
							className="clickable"
						>
							{x.name.charAt(0).toUpperCase() + x.name.slice(1)}
						</strong>{" "}
						(<a href={x.url}>url</a>)
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="view">
			{/* <TestApi4 /> */}
			<button
				className="button"
				onClick={() => {
					fetchData();
				}}
			>
				Fetch data
			</button>

			<h1>Iterate through all the characters</h1>
			{displayData()}
		</div>
	);
};
