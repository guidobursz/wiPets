import React, { useEffect, useState } from "react";

import { POSTVerifiedStores } from "../services/StoresAPI";
//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Navbar from "../components/Navbar";
import StoreRegisterOpt from "../components/indexUse/StoreRegisterOpt";
import TableLayout from "../components/indexUse/TableLayout";
import FilterInputsTable from "../components/indexUse/FilterInputsTable";
// import TESTbtnCookie from "../components/TESTbtnCookie";
import Footer from "../components/Footer";

const IndexPage = () => {
  //Fetch data logic
  //initial value for queryParams
  let initialParams = {
    storeName: "",
    services: [],
    province: "",
    barrio: "",
  };
  //states
  const [loadingQuery, setLoadingQuery] = useState(true);
  const [storesList, setStoresList] = useState();
  const [queryParams, setQueryParams] = useState(initialParams);

  useEffect(() => {
    setLoadingQuery(true);

    //fetch function:
    const getStores = async (queryParams) => {
      try {
        let fetchStores = await POSTVerifiedStores(queryParams);
        //console.log(fetchStores);
        setStoresList(fetchStores.data.allVStores);
      } catch (error) {
        console.log(error);
      }
    };
    getStores(queryParams);

    //setLoading false
    setLoadingQuery(false);
  }, [queryParams]);

  return (
    <div>
      <Navbar />
      <Container>
        <h1> Bienvenidos a WiPet! </h1>
        <hr />
        <FilterInputsTable setQueryParams={setQueryParams} />
        <TableLayout data={{ loadingQuery, storesList }} />
        <hr />
        <h3>Mapa? mostrando las tiendas registradas?</h3>
        <hr />
        <StoreRegisterOpt />
        <br />
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
