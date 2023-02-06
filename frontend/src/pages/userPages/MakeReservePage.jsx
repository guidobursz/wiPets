import React from "react";
import { useParams } from "react-router-dom";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Appbar from "../../components/Navbar/AppBar";
import MakeReserveForm from "../../components/MakeReservePage/MakeReserveForm";
import Footer from "../../components/Footer";

//Import context
// import { useContext } from "react";
// import AuthContext from "../../context/AuthContex";

const MakeReservePage = () => {
  let params = useParams();
  let storeId = params.id;
  //#TODO: might rethink how to save the jwt, bc if you refresh (f5) inside page, data will not showup
  //might be bc the states dont refresh as soon

  //Get context data:
  // const { accInfo } = useContext(AuthContext);
  // console.log(accInfo);
  // let tokenJ = accInfo.ajt;
  // let userId = accInfo.accId;

  return (
    <div>
      <Appbar />
      <h2>Realiza tu reserva ahora mismo!</h2>
      <Container>
        <br />
        <MakeReserveForm storeID={storeId} />
      </Container>
      <Footer />
    </div>
  );
};

export default MakeReservePage;
