import axios from "axios";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getUserPetsByUserId = async (userId, token) => {
  // console.log("llamando", userId, token);
  //Make query:
  let getUserPets = await axios.get(`${baseUrl}/pets/user/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return getUserPets;
};

export const newPetByUser = async (data, token) => {
  // console.log("data inside inser fct", data);
  // console.log("jwt inside insert fct", token);

  let queryUrl = `${baseUrl}/pets/pet`;

  //Make insert query
  let newPet = await axios.post(queryUrl, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(newPet);
  // return newPet;
  return "okokokokoko";
  //http://localhost:3005/pets/pet/
};
