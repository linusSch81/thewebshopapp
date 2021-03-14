import BackendAPIService from "../../../../shared/api/services/BackendAPIService";
import { useState, useEffect } from "react";
import { iAdminUser } from "../../../../shared/interface/interface";

export const AdminUpdateUser = (props: {
	userId: any;
	setLoading: Function;
	setShowForm: Function;
}) => {
	/** form inputs */

	const { userId, setLoading, setShowForm } = props;

	const [currentUser, setCurrentUser] = useState<any>([]);
	const [showStatusMessage, setShowStatusMessage] = useState<boolean>(false);
	const [formError, setFormError] = useState<boolean>(false);
	const [updatedUser, setUpdatedUser] = useState<iAdminUser>({
		username: "",
		password: "",
		age: 0,
	});
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

	const fetchData = async (id: any) => {
		const response = await BackendAPIService.getUserById(id);
		setCurrentUser(response.data);
		setUpdatedUser(response.data);
		//console.log(response.data);
	};

	useEffect(() => {
		fetchData(userId);
		// eslint-disable-next-line
	}, [userId]);

	const submitUpdate = async () => {
		try {
			setLoading(true);
			await BackendAPIService.updateUser(userId, updatedUser);
			setLoading(false);
			setFormError(false);
		} catch (error) {
			console.log(error);
			setFormError(true);
		}
		setShowStatusMessage(true);
	};

	return (
		<>
			<div>
				<label>
					<div>Username</div>
					<input
						type="text"
						defaultValue={currentUser.username}
						onChange={(event) => {
							setUpdatedUser({
								...updatedUser,
								username: event.target.value,
							});
							setShowStatusMessage(false);
							// console.log(updatedUser);
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
					defaultValue={currentUser.password}
					onChange={(event) => {
						setUpdatedUser({
							...updatedUser,
							password: event.target.value,
						});
						setShowStatusMessage(false);
						// console.log(updatedUser);
					}}
				/>
			</div>
			<br />

			{currentUser.age ? (
				<>
					<div>
						<div>Age</div>
						<input
							type="number"
							defaultValue={currentUser.age}
							onChange={(event) => {
								setUpdatedUser({
									...updatedUser,
									age: parseInt(event.target.value),
								});
								setShowStatusMessage(false);
							}}
						/>
					</div>
					<br />
				</>
			) : (
				""
			)}
			{formMessage()}
			{showStatusMessage ? (
				<span
					className="button button-secondary"
					onClick={() => setShowForm(false)}
				>
					OK
				</span>
			) : (
				<>
					<span
						className="button button-secondary"
						onClick={() => setShowForm(false)}
					>
						Cancel
					</span>{" "}
					<button onClick={() => submitUpdate()} className="button">
						Update
					</button>
				</>
			)}
		</>
	);
};
