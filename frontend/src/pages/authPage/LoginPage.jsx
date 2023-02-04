import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Appbar from "../../components/Navbar/AppBar";
import LoginForm from "../../components/authPage/login/LoginForm";
import Footer from "../../components/Footer";

const LoginPage = () => {
  return (
    <div>
      <Appbar />
      <Container>
        <LoginForm />
      </Container>
      <Footer />
    </div>
  );
};

export default LoginPage;
