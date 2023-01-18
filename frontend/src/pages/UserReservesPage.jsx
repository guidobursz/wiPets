import React from "react";
import { useParams } from "react-router-dom";

//Import utils:
import { getThreeFollwingAppointmentsByUserId } from "../services/AppointmentsAPI";

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
  return (
    <div>
      <Navbar />
      <Container>
        <FilterInputs />
        <ReservesTableDisplay />
      </Container>
      <Footer />
    </div>
  );
};

export default UserReservesPage;
