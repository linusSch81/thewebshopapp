import BackendAPIService from "../../../../shared/api/services/BackendAPIService";
import { useState, useEffect } from "react";
import { iAdminUser } from "../../../../shared/interface/interface";

export const AdminCreateUser = (props: {
	setUsersList: Function;
	loading: Boolean;
	setLoading: Function;
}) => {
	/** form inputs */

	const { setUsersList, loading, setLoading } = props;
	const [newUser, setNewUser] = useState<iAdminUser>({
		username: "",
		password: "",
	});

	/** write usersList */

	const [showStatusMessage, setShowStatusMessage] = useState<boolean>(false);
	const [formError, setFormError] = useState<boolean>(false);

	const submitCreate = async () => {
		try {
			setLoading(true);
			await BackendAPIService.createUser(newUser);
			setLoading(false);
			setFormError(false);
		} catch (error) {
			console.log(error);
			setFormError(true);
		}
		setShowStatusMessage(true);
	};

	const fetchData = async () => {
		const response = await BackendAPIService.getAllUsers();
		setUsersList(response.data);
	};
	useEffect(() => {
		fetchData();
		// eslint-disable-next-line
	}, [loading]);

	useEffect(() => {
		if (!showStatusMessage) {
			setFormError(false);
		}
	}, [showStatusMessage]);

	const formMessage = () => {
		if (showStatusMessage) {
			return formError ? (
				<div
					style={{
						backgroundColor: "fireBrick",
						color: "white",
						padding: "1em",
						margin: "1em 0",
					}}
				>
					ERROR: User can not be created. Check the form and try
					again.
				</div>
			) : (
				<div
					style={{
						backgroundColor: "green",
						color: "white",
						padding: "1em",
						margin: "1em 0",
					}}
				>
					SUCCESS: User was created.
				</div>
			);
		}
	};

	return (
		<>
			<h2>Create user</h2>
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
							setShowStatusMessage(false);
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
					autoComplete="false"
					placeholder="Password"
					onChange={(event) => {
						setNewUser({
							...newUser,
							password: event.target.value,
						});
						setShowStatusMessage(false);
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
						setShowStatusMessage(false);
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
			{formMessage()}
		</>
	);
};
