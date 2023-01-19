import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Import utils:
import { getALLUserAppointmentsByUserId } from "../services/AppointmentsAPI";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../components/Navbar";
import FilterInputs from "../components/UserReservesPage/FilterInputs";
import ReservesTableDisplay from "../components/UserReservesPage/ReservesTableDisplay";
import Footer from "../components/Footer";

//Import context
import { useContext } from "react";
import AuthContext from "../context/AuthContex";

const UserReservesPage = () => {
	//Get userId
	let params = useParams();
	let userId = params.id;
	//Get context data for jwt:
	const { accInfo } = useContext(AuthContext);
	let tokenJ = accInfo.ajt;
	//inital query state
	let initialFilters = {
		storeName: "",
		petName: "",
		services: false,
		statues: false,
	};
	//States
	const [queryFilters, setQueryFilters] = useState(initialFilters);
	const [rowsData, setRowsData] = useState([]);

	//Effect for reQuerying every change in queryFilters
	useEffect(() => {
		//Make query for rowsData
		const updateRowData = async (queryFilters) => {
			let fetchData = await getALLUserAppointmentsByUserId(
				userId,
				tokenJ,
				queryFilters
			);
			// console.log(fetchData.data.userAppointments);
			setRowsData(fetchData.data.userAppointments);
		};
		updateRowData(queryFilters);
	}, [queryFilters]);

	return (
		<div>
			<Navbar />
			<Container>
				<br />
				<FilterInputs updateFilters={setQueryFilters} />
				<ReservesTableDisplay rowsData={rowsData} />
			</Container>
			<Footer />
		</div>
	);
};

export default UserReservesPage;
