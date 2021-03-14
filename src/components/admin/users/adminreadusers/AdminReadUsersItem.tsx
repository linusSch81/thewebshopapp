import { useState } from "react";

import { AdminDeleteUser } from "../admindeleteuser/AdminDeleteUser";
import { AdminUpdateUser } from "../adminupdateuser/AdminUpdateUser";

export const AdminReadUsersItem = (props: {
	x: any;
	setLoading: Function;
}) => {
	const { x, setLoading } = props;
	const [showForm, setShowForm] = useState(false);
	return (
		<>
			<div>
				<strong>username: </strong>
				<span>{x.username} </span>
			</div>
			{x.age ? (
				<div>
					<strong>age: </strong>
					<span>{`${x.age} years old`}</span>
				</div>
			) : (
				""
			)}
			{showForm ? (
				<div>
					<AdminUpdateUser
						userId={x._id}
						setLoading={setLoading}
						setShowForm={setShowForm}
					/>
				</div>
			) : (
				<>
					<AdminDeleteUser userId={x._id} setLoading={setLoading} />{" "}
					<button
						className={showForm ? "button button-active" : "button"}
						onClick={() => {
							showForm ? setShowForm(false) : setShowForm(true);
						}}
						style={{ margin: "0 0 1.5em 0" }}
					>
						Change
					</button>
				</>
			)}
		</>
	);
};
