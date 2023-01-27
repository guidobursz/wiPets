import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export const POSTVerifiedStores = async (data) => {
  // console.log("data pura: ", data);
  //Make query:
  let registerStoreQuery = await axios.post(`${baseUrl}/stores/verified`, data);
  return registerStoreQuery;
};

//Get store info by id
export const getStoreInfoById = async (id) => {
  //query:
  let storeInfo = await axios.get(`${baseUrl}/stores/store/${id}`);

  return storeInfo;
};
