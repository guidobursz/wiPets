import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../../components/Navbar";
import RegisterUserForm from "../../components/authPage/register/RegisterUserForm";
import StoreRegisterOpt from "../../components/indexUse/StoreRegisterOpt";
import Footer from "../../components/Footer";

const RegisterUserPage = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<RegisterUserForm />
				<StoreRegisterOpt />
			</Container>
			<Footer />
		</div>
	);
};

export default RegisterUserPage;
