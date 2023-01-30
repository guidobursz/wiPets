import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../../components/Navbar";

import LoginForm from "../../components/authPage/login/LoginForm";
import Footer from "../../components/Footer";

const LoginPage = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<LoginForm />
			</Container>
			<Footer />
		</div>
	);
};

export default LoginPage;
