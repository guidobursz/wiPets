import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getUserById = async (id, token) => {
	// console.log("llamando", id, token);
	//Make query:
	let registerStoreQuery = await axios.get(`${baseUrl}/users/user/${id}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return registerStoreQuery;
};
