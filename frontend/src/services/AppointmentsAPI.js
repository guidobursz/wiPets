import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getUserAppointmentsByUserId = async (userId, token) => {
	// console.log("llamando", userId, token);
	//Make query:
	let userAppointments = await axios.get(
		`${baseUrl}/appointments/user/${userId}`,
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	);
	return userAppointments;
};
