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
	console.log("data adentro: ", data);
	//Make query:
	let registerStoreQuery = await axios.post(
		`${baseUrl}/auth/store/register`,
		data
	);
	console.log(registerStoreQuery);
	return registerStoreQuery;
};
