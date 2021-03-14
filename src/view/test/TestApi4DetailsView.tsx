/**
 * "...The useLocation hook returns the location object
 * that represents the current URL. You can think about it
 * like a useState that returns a new location whenever the
 * URL changes..."
 * https://reactrouter.com/web/api/Hooks/uselocation
 */
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Axios from "axios";

export const TestApi4DetailsView = () => {
	const [data, setData] = useState<any>([]);
	const location = useLocation<any>();

	const fetchData = async () => {
		try {
			const getPath = location.state.url;

			const { data } = await Axios.get(getPath);
			setData(data);
		} catch (error) {
			/** check if pageload is at current url and not navigated e.g '/pokemon/ivysaur' */
			try {
				const currentPathName = window.location.pathname
					.split("/")
					.pop();
				const getPath = `https://pokeapi.co/api/v2/pokemon/${currentPathName}`;
				const { data } = await Axios.get(getPath);
				setData(data);
			} catch (error) {
				console.log(error);
			}
		}
	};
	useEffect(() => {
		fetchData();
		// eslint-disable-next-line
	}, []);

	const displayData = () => {
		const heading = data?.name;
		const imgSrc = data?.sprites?.front_default;
		const href = location?.state?.url;

		return (
			<div>
				{heading ? (
					<h1>
						{heading.charAt(0).toUpperCase() + heading.slice(1)}
						{imgSrc ? <img src={imgSrc} alt="" /> : ""}
					</h1>
				) : (
					""
				)}
				{href ? (
					<p>
						(source: <a href={href}>{href}</a>)
					</p>
				) : (
					""
				)}

				<ul>
					<li>Height: {data?.height}</li>
					<li>Weight: {data?.weight}</li>
				</ul>
			</div>
		);
	};

	return (
		<div>
			{displayData()}

			<button onClick={() => console.log(data)} className="button">
				Console Log Data
			</button>
		</div>
	);
};
