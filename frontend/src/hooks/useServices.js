import React, { useState, useEffect, useContext } from "react";

import { getServices } from "../services/GeneralAPI";

export default function useServicesByStoreId(storeId) {
  let initialServices = [
    {
      id: 1,
      description: "Veterinaria",
    },
    {
      id: 2,
      description: "Peluqueria",
    },
    {
      id: 3,
      description: "Alimento",
    },
    {
      id: 4,
      description: "Guarderia",
    },
  ];

  //States:
  const [loadingServices, setLoadingServices] = useState(false);
  const [services, setServices] = useState([]);
  //error case
  const [errorServices, setErrorServices] = useState(false);

  //useEffect
  useEffect(() => {
    const getServices = async () => {
      setLoadingServices(true);
      try {
        //make call
        // console.log("Query needs: ", accInfo.accId + accInfo.ajt);
        let servicesFetch = await getServices();
        // console.log("fetch: ", servicesFetch);
        setServices(servicesFetch.data);
        setLoadingServices(false);
      } catch (error) {
        console.log("error: ", error);
        console.log("error fetch: ", error.message);
        console.log("error sv msg: ", error.response.data);
        setErrorServices(error);
      }
    };
    getServices();
  }, []);
  //return states:
  return { loadingServices, services, errorServices };
}
