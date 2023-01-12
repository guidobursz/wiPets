import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export const POSTVerifiedStores = async (data) => {
	// console.log("data pura: ", data);
	let queryString = data.trim();
	// console.log("trim: ", queryString);

	let queryData = { filters: queryString };
	//Make query:
	let registerStoreQuery = await axios.post(
		`${baseUrl}/stores/verified`,
		queryData
	);
	return registerStoreQuery;
};
