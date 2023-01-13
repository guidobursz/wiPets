import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../components/Navbar";
import RegisterUserForm from "../components/RegisterUserForm";
import Footer from "../components/Footer";

const RegisterUserPage = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<RegisterUserForm />
			</Container>
			<Footer />
		</div>
	);
};

export default RegisterUserPage;
