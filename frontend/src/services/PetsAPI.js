import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getUserPetsByUserId = async (userId, token) => {
	// console.log("llamando", userId, token);
	//Make query:
	let registerStoreQuery = await axios.get(`${baseUrl}/pets/user/${userId}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return registerStoreQuery;
};
