import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Appbar from "../../components/Navbar/AppBar";
import RegisterStoreForm from "../../components/storePages/registerPage/RegisterStoreForm";
import Footer from "../../components/Footer";

const RegisterStorePage = () => {
  return (
    <div>
      <Appbar />
      <Container>
        <RegisterStoreForm />
      </Container>
      <Footer />
    </div>
  );
};

export default RegisterStorePage;
