import React, { useState, useEffect, useContext } from "react";

import { getUserPetsByUserId } from "../services/PetsAPI";

//context import:
import AuthContext from "../context/AuthContex";

export default function useUserPets() {
  //User data from context
  const { accInfo } = useContext(AuthContext);
  // console.log(accInfo);

  //States:
  const [loadingUserPets, setLoadingUserPets] = useState(false);
  const [userPets, setUserPets] = useState([]);
  const [petOwner, setPetOwner] = useState({});
  //error case
  const [errorUserPets, setErrorUserPets] = useState(false);
  const [errorUPMessage, setErrorUPMessage] = useState(null);

  //useEffect
  useEffect(() => {
    const getPets = async () => {
      setLoadingUserPets(true);
      try {
        //make call
        // console.log("Query needs: ", accInfo.accId + accInfo.ajt);
        let userPetsFetch = await getUserPetsByUserId(
          accInfo.accId,
          accInfo.ajt
        );
        // console.log("fetch: ", userPetsFetch);
        setUserPets(userPetsFetch.data.userPets);
        setPetOwner({
          id: accInfo.accId,
          name: accInfo.name,
          email: accInfo.email,
        });
        setLoadingUserPets(false);
      } catch (error) {
        console.log("error fetch: ", error.message);
        console.log("error sv msg: ", error.response.data);
        setErrorUserPets(true);
        setErrorUPMessage(error);
      }
    };
    getPets();
  }, [accInfo]);
  //return states:
  return { loadingUserPets, userPets, petOwner, errorUserPets, errorUPMessage };
}
