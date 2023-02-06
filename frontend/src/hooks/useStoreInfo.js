import React, { useState, useEffect, useContext } from "react";
import { getStoreInfoById } from "../services/StoresAPI";

export default function useStoreInfo(storeId) {
  // console.log(storeId);
  let sId = storeId;
  //States:
  const [loadingStoreInfo, setLoadingStoreInfo] = useState(false);
  const [storeInfo, setStoreInfo] = useState([]);
  //error case
  const [errorStoreInfo, setErrorStoreInfo] = useState(false);
  const [errorSIMessage, setErrorSIMessage] = useState(null);

  //useEffect
  useEffect(() => {
    const getPets = async () => {
      setLoadingStoreInfo(true);
      try {
        //make call
        let storeInfoFetch = await getStoreInfoById(sId);
        // console.log("fetch: ", storeInfoFetch.data.storeByID);
        setStoreInfo(storeInfoFetch.data.storeByID);
        setLoadingStoreInfo(false);
      } catch (error) {
        console.log("error fetch: ", error.message);
        console.log("error sv msg: ", error.response.data);
        setErrorStoreInfo(true);
        setErrorSIMessage(error);
      }
    };
    getPets();
  }, [sId]);
  //return states:
  return { loadingStoreInfo, storeInfo, errorStoreInfo, errorSIMessage };
}
