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
      <Appbar />
      <Container>
        <h1> Bienvenidos a WiPet! </h1>
        <h5>TODO para mvp:</h5>
        <p>1 - Armar esqueleto para reutilizar TABLAS</p>
        <p>
          2 - Proteger /user/:id y /user/:id/reserves.
          <p>
            <b>
              Unicamente tendria que entrar el usuario cuyo accId(cookies) ===
              params.id.
            </b>
          </p>
          <p>
            <b>
              Como las cookies la puede modificar el usuario, habria una DOBLE
              proteccion porque cuando se envia la query siempre se saca el id
              del jwt. Por lo que el user no podria modificar.
            </b>
            <p>
              <b>
                El componente que muestre el Error al UI, podria tener el
                redirect con el timeout
              </b>
            </p>
          </p>
        </p>
        <p>
          3 - Proteger ruta: /store/:id/reserves.
          <b>Misma logica que solucion del item 2.</b>
        </p>
        <p>
          4 - Arreglar componente y diseno donde se muestra la info del
          user/store
        </p>
        <p>5 - Arreglar tema imagenes de tiendas y users.</p>
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
