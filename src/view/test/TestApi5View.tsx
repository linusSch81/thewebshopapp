// import {TestApi5} from "../../components/test/testapi5/TestApi5"
import PetStoreAPIService from "../../shared/apitest/service/PetStoreAPIService";
import { useState, useEffect } from "react";

/*
test a pet:
https://petstore.swagger.io/v2/pet/9998
*/


export const TestApi5View = () => {
	const [petData, setPetData] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [petStatus, setPetStatus] = useState<string>("available");

	const fetchData = async () => {
		setLoading(true);
		const { data } = await PetStoreAPIService.findByStatus(petStatus);
		setPetData(data);
		console.log(data);
		setLoading(false);
	};

	const displayData = () => {
		if (!loading) {
			return (
				<div>
					<div>name: {petData[0]?.name}</div>
					<div>id: {petData[0]?.id}</div>
					{/* <div>tags: {petData[0]?.tags}</div> */}
				</div>
			);
		}
	};

	useEffect(() => {
		fetchData();
	}, [petStatus]);

	return (
		<div className="view">
			<h1>Pet Store API</h1>
			<a href="https://petstore.swagger.io">https://petstore.swagger.io</a>




			
			<button
				onClick={() => {
					console.log(petData);
				}}
				className="button"
			>
				Console log data
			</button>

			{/* <TestApi5 /> */}
			<button
				onClick={() => {
					setPetStatus("available");
				}}
				className="button"
			>
				available
			</button>
			<button
				onClick={() => {
					setPetStatus("pending");
				}}
				className="button"
			>
				pending
			</button>
			<button
				onClick={() => {
					setPetStatus("sold");
				}}
				className="button"
			>
				sold
			</button>

			{loading ? <div>...</div> : displayData()}
		</div>
	);
};
