import React from "react";
import { useParams } from "react-router-dom";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../../components/Navbar";
import NewPetForm from "../../components/NewPetPage/NewPetForm";
import Footer from "../../components/Footer";

//Import context
import { useContext } from "react";
import AuthContext from "../../context/AuthContex";

const NewPetPage = () => {
  let params = useParams();
  let userId = params.id;
  //#TODO: might rethink how to save the jwt, bc if you refresh (f5) inside page, data will not showup
  //might be bc the states dont refresh as soon

  //Get context data:
  const { accInfo } = useContext(AuthContext);
  let tokenJ = accInfo.ajt;
  // console.log(tokenJ);

  return (
    <div>
      <Navbar />
      <Container>
        <h2>Testing</h2>
        <br />
        <NewPetForm idata={{ userId, tokenJ }} />
      </Container>
      <Footer />
    </div>
  );
};

export default NewPetPage;
