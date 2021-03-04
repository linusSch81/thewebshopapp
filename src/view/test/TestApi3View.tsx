//import createUser from  "../../shared/api/services/BackendAPIService"
import BackendAPIService from "../../shared/api/services/BackendAPIService";
import { useState } from "react";

import { TestApi3 } from "../../components/test/testapi3/TestApi3";
import { iCreateNewUser } from "../../shared/interface/interface";
export const TestApi3View = () => {
	const [newUser, setNewUser] = useState<iCreateNewUser>({
		username: "abc",
		password: "secret3",
	});

	return (
		<div className="view">
			<h1>Backend API</h1>

			<div>
				<div>Username</div>
				<input type="text" placeholder="Username" />
				<br />
			</div>

			<div>
				<div>Password</div>
				<input type="text" placeholder="Password" />
				<br />
			</div>

			<div>
				<div>Age</div>
				<input type="text"placeholder="age" />
				<br />
			</div>

			<button
				onClick={() => BackendAPIService.createUser(newUser)}
				className="button"
			>
				Create user
			</button>

			<TestApi3 />
		</div>
	);
};
