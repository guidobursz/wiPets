import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Import utils:

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Appbar from "../../components/Navbar/AppBar";
import Footer from "../../components/Footer";
import InfoLayout from "../../components/storePages/profilePage/InfoLayout";

//Import context
import { useContext } from "react";
import AuthContext from "../../context/AuthContex";

const StoreReservesPages = () => {
  let params = useParams();
  let storeId = params.id;

  //Get context data:
  const { accInfo } = useContext(AuthContext);
  let tokenJ = accInfo.ajt;

  //States
  const [storeInfo, setStoreInfo] = useState([]);
  const [loadingQuery, setLoadingQuery] = useState(false);
  //use effect to get store info
  useEffect(() => {
    //
    const getStoreData = async () => {};
    getStoreData();
  }, [storeId, tokenJ]);

  return (
    <div>
      <Appbar />
      <Container>
        <hr />
        <h3> Back vbutton?</h3>
      </Container>
      <Footer />
    </div>
  );
};

export default StoreReservesPages;
