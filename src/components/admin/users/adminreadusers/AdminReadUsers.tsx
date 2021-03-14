import { AdminReadUsersItem } from "../adminreadusers/AdminReadUsersItem";
export const AdminReadUsers = (props: {
	usersList: any;
	setLoading: Function;
}) => {
	const { usersList, setLoading } = props;

	return (
		<>
			<ol>
				{usersList.map((x: any) => (
					<li key={x._id} style={{marginBottom: "4em"}}>
						<AdminReadUsersItem
							x={x}
							setLoading={setLoading}
						/>
					</li>
				))}
			</ol>
		</>
	);
};
