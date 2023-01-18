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
