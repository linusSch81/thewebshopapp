import BackendAPIService from "../../../../shared/api/services/BackendAPIService";

export const AdminDeleteUser = (props: {
	userId: any;
	setLoading: Function;
}) => {
	const { userId, setLoading } = props;
	const submitDelete = async (id: any) => {
		try {
			setLoading(true);
			await BackendAPIService.deleteUser(id);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<button
				className="button button-delete"
				onClick={() => {
					submitDelete(userId);
				}}
				style={{ margin: "0 0 1.5em 0" }}
			>
				Delete
			</button>
		</>
	);
};
