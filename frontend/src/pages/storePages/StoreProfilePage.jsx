import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Import utils:
import { getStoreInfoById } from "../../services/StoresAPI";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InfoLayout from "../../components/storePages/profilePage/InfoLayout";

//Import context
import { useContext } from "react";
import AuthContext from "../../context/AuthContex";

const StoreProfilePage = () => {
  let params = useParams();
  let storeId = params.id;
  //#TODO: might rethink how to save the jwt, bc if you refresh (f5) inside page, data will not showup
  //might be bc the states dont refresh as soon

  //Get context data:
  const { accInfo } = useContext(AuthContext);
  let tokenJ = accInfo.ajt;

  //States
  const [storeInfo, setStoreInfo] = useState([]);
  const [storeServices, setStoreServices] = useState([]);
  const [loadingQuery, setLoadingQuery] = useState(false);
  //use effect to get store info
  useEffect(() => {
    //
    const getStoreData = async () => {
      setLoadingQuery(true);
      let storeDataFetch = await getStoreInfoById(storeId, tokenJ);
      let storeData = storeDataFetch.data.storeByID;
      // console.log(storeData);
      setStoreInfo(storeData);
      if (storeData.Services.length > 0) {
        setStoreServices(storeData.Services);
      } else {
        setStoreServices(["No se pudo realizar la busqueda"]);
      }
      setLoadingQuery(false);
    };
    getStoreData();
  }, [storeId, tokenJ]);

  return (
    <div>
      <Navbar />
      <Container>
        <InfoLayout
          loading={loadingQuery}
          storeInfo={storeInfo}
          storeServices={storeServices}
        />
        <hr />
        <h3> Un mapita viendo donde se ve la tienda?</h3>
      </Container>
      <Footer />
    </div>
  );
};

export default StoreProfilePage;
