import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export const userLogin = async (data) => {
	let dataQuery = {
		email: data.email,
		password: data.password,
	};

	//Make query:
	let loginQuery = await axios.post(`${baseUrl}/auth/user/login`, dataQuery);

	// Response will have: {
	//     config,
	//     data:
	//         jwtToken,
	//         userData:{
	//                 Id,
	//                 first_name
	//         }
	//     Headers,
	//     request,
	//     status
	// }

	return loginQuery;
};

export const userRegister = async (data) => {
	//Make query:
	let registerStoreQuery = await axios.post(
		`${baseUrl}/auth/user/register`,
		data
	);
	return registerStoreQuery;
};

//Store:
export const storeLogin = async (data) => {
	let dataQuery = {
		email: data.email,
		password: data.password,
	};
	//Make query:
	let loginQuery = await axios.post(`${baseUrl}/auth/store/login`, dataQuery);
	return loginQuery;
};

export const storeRegister = async (data) => {
	//Make query:
	let registerStoreQuery = await axios.post(
		`${baseUrl}/auth/store/register`,
		data
	);
	return registerStoreQuery;
};
