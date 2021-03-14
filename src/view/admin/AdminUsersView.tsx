//import createUser from  "../../shared/api/services/BackendAPIService"

import { useState } from "react";

import { AdminCreateUser } from "../../components/admin/users/admincreateuser/AdminCreateUser";
import { AdminReadUsers } from "../../components/admin/users/adminreadusers/AdminReadUsers";

export const AdminUsersView = () => {
	const [usersList, setUsersList] = useState([]);
	const [loading, setLoading] = useState(false);

	return (
		<div className="view">
			<h1>Admin - Users</h1>
			<p>
				Here you can make{" "}
				<abbr title="Create, Read, Update, Delete">CRUD</abbr>{" "}
				operations to the{" "}
				<a href="https://github.com/linusSch81/thewebshopappserver">
					backend server (<strong>thewebshopappserver</strong>
				</a>
				). Make sure that{" "}
				<a href="http://localhost:3001/">
					<strong>
						<code>localhost:3001</code>
					</strong>
				</a>{" "}
				is up and running.
			</p>

			<p></p>

			<AdminCreateUser
				setUsersList={setUsersList}
				loading={loading}
				setLoading={setLoading}
			/>

			<hr />
			<h1>Read users</h1>
			<p>
				List all users (getAllUsers).Content is updated on submit.
				Delete option available
			</p>

			<AdminReadUsers
				usersList={usersList}
				setLoading={setLoading}
			/>
		</div>
	);
};
