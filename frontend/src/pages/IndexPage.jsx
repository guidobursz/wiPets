import React, { useEffect, useState } from "react";

import { POSTVerifiedStores } from "../services/StoresAPI";
//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Appbar from "../components/Navbar/AppBar";
import StoreRegisterOpt from "../components/indexUse/StoreRegisterOpt";
import TableLayout from "../components/indexUse/TableLayout";
import FilterInputsTable from "../components/indexUse/FilterInputsTable";
// import TESTbtnCookie from "../components/TESTbtnCookie";
import Footer from "../components/Footer";
import useVerifiedStores from "../hooks/useVerifiedStores";

const IndexPage = () => {
  //Fetch data logic

  //custom hook for fetching:
  const { loadingVerifStores, setQueryFilter, verifStores, errorVerifStores } =
    useVerifiedStores();
  // console.log("verif stores c hook: ", verifStores);

  return (
    <div>
      <Appbar />
      <Container>
        <h1> Bienvenidos a WiPet! </h1>
        <h5>TODO para mvp:</h5>
        <p>1 - Armar esqueleto para reutilizar TABLAS</p>
        <p>
          4 - Arreglar componente y diseno donde se muestra la info del
          user/store
        </p>
        <p>5 - Arreglar tema imagenes de tiendas y users.</p>
        <hr />
        <FilterInputsTable setQueryParams={setQueryFilter} />
        <TableLayout data={{ loadingVerifStores, verifStores }} />
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
