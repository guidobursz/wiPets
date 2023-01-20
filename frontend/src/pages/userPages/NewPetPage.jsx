import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../../components/Navbar";
import NewPetForm from "../../components/NewPetPage/NewPetForm";
import Footer from "../../components/Footer";

const NewPetPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <h2>Testing</h2>
        <br />
        <NewPetForm />
      </Container>
      <Footer />
    </div>
  );
};

export default NewPetPage;
