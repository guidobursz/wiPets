import { useState, useEffect } from "react";

import { POSTVerifiedStores } from "../services/StoresAPI";

export default function useVerifiedStores() {
  let initialFil = {
    storeName: "",
    services: [],
    province: "",
    barrio: "",
  };

  //States:
  const [queryFilter, setQueryFilter] = useState(initialFil);
  const [loadingVerifStores, setLoadingVerifStores] = useState(false);
  const [verifStores, setVerifStores] = useState([]);
  //error case
  const [errorVerifStores, setErrorVerifStores] = useState(false);

  //useEffect
  useEffect(() => {
    const getVerifStores = async () => {
      setLoadingVerifStores(true);
      try {
        //make call
        // console.log("Query needs: ", accInfo.accId + accInfo.ajt);
        let verifStoresFetch = await POSTVerifiedStores(queryFilter);
        // console.log("fetch: ", verifStoresFetch);
        setVerifStores(verifStoresFetch.data.allVStores);
        setLoadingVerifStores(false);
      } catch (error) {
        // console.log("error: ", error);
        // console.log("error fetch: ", error.message);
        // console.log("error sv msg: ", error.response.data);
        setErrorVerifStores(error);
      }
    };
    getVerifStores();
  }, [queryFilter]);
  //return states:
  return {
    queryFilter,
    setQueryFilter,
    loadingVerifStores,
    verifStores,
    errorVerifStores,
  };
}
