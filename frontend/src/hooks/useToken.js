import React, { useContext, useState, useEffect } from "react";

//context import:
import AuthContext from "../context/AuthContex";

export default function useToken() {
  //User data from context
  const { accInfo } = useContext(AuthContext);

  //State
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(accInfo.ajt);
  }, [accInfo]);
  // console.log(accInfo);

  //return states:
  return { token };
}
