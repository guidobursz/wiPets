import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getThreeFollwingAppointmentsByUserId = async (userId, token) => {
	// console.log("llamando", userId, token);
	//Make query:
	let followingUserAppointments = await axios.get(
		`${baseUrl}/appointments/user/${userId}/next`,
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	);
	return followingUserAppointments;
};

//Get all users appointments (ALL)
export const getALLUserAppointmentsByUserId = async (userId, token, data) => {
	//Data parameter will be the filters.
	let dataQuery = { filters: data };
	// console.log(data)
	//Make query:
	let allUserAppointments = await axios.post(
		`${baseUrl}/appointments/user/${userId}`,
		dataQuery,
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	);
	return allUserAppointments;
};
