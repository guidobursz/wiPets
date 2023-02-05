import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
//Import Components
import Appbar from "../../components/Navbar/AppBar";
import RegisterUserForm from "../../components/authPage/register/RegisterUserForm";
import StoreRegisterOpt from "../../components/indexUse/StoreRegisterOpt";
import Footer from "../../components/Footer";

const RegisterUserPage = () => {
  return (
    <div>
      <Appbar />
      <Container>
        <RegisterUserForm />
        <StoreRegisterOpt />
      </Container>
      <Footer />
    </div>
  );
};

export default RegisterUserPage;
