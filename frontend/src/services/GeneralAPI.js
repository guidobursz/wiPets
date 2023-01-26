import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

//make querys
//
export const getServices = async () => {
  let allServices = await axios.get(`${baseUrl}/general/services`);
  return allServices;
};
