//import createUser from  "../../shared/api/services/BackendAPIService"
import BackendAPIService from "../../shared/api/services/BackendAPIService";
import { useState, useEffect } from "react";
import { iCreateNewUser } from "../../shared/interface/interface";

import { TestApi3 } from "../../components/test/testapi3/TestApi3";

export const TestApi3View = () => {
	/** form inputs */
	const [newUser, setNewUser] = useState<iCreateNewUser>({
		username: "",
		password: "",
	});

	/** write usersList */
	const [usersList, setUsersList] = useState([]);
	const [loading, setLoading] = useState(false);

	const submitCreate = async () => {
		try {
			setLoading(true);
			await BackendAPIService.createUser(newUser);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const submitDelete = async (id: any) => {
		try {
			setLoading(true);
			await BackendAPIService.deleteUser(id);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchData = async () => {
		const response = await BackendAPIService.getAllUsers();
		setUsersList(response.data);
	};

	useEffect(() => {
		fetchData();
	}, [loading]);

	return (
		<div className="view">
			<h1>Backend API</h1>

			<div>
				<label>
					<div>Username</div>
					<input
						type="text"
						placeholder="Username"
						onChange={(event) => {
							setNewUser({
								...newUser,
								username: event.target.value,
							});
							// console.log(newUser);
						}}
					/>
				</label>
			</div>
			<br />
			<div>
				<div>Password</div>
				<input
					type="password"
					placeholder="Password"
					onChange={(event) => {
						setNewUser({
							...newUser,
							password: event.target.value,
						});
						// console.log(newUser);
					}}
				/>
			</div>
			<br />
			<div>
				<div>Age</div>
				<input
					type="number"
					placeholder="age"
					onChange={(event) => {
						setNewUser({
							...newUser,
							age: parseInt(event.target.value),
						});
						// console.log(newUser);
					}}
				/>
			</div>
			<br />
			<button
				// onClick={() => BackendAPIService.createUser(newUser)}
				onClick={() => submitCreate()}
				className="button"
			>
				Create user
			</button>
			<hr />
			<h1>Displaying all usersList on submit</h1>
			<ol>
				{usersList.map((x: any) => (
					<li key={x._id}>
						<span>{x.username} </span>
						<span>{x.age ? `(${x.age} years)` : ""}</span>
						<button
							className="button"
							onClick={() => {
								submitDelete(x._id);
							}}
						>
							X
						</button>
					</li>
				))}
			</ol>
			<TestApi3 />
		</div>
	);
};
