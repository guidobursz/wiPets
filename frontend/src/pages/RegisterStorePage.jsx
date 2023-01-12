import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../components/Navbar";
import RegisterStoreForm from "../components/RegisterStoreForm";
import Footer from "../components/Footer";

const RegisterStorePage = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<RegisterStoreForm />
			</Container>
			<Footer />
		</div>
	);
};

export default RegisterStorePage;
