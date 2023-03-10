//Controller imports
const {
  getAllAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointmentById,
  getAppointmentsByUserId,
  getAllAppointmentsByStoreId,
  GetFollowingThreeAppointsByUserId,
  getAllPENDINGAppointmentsByStoreId,
} = require("../modelsControllers/appointmentController");

//utils:

//ADMIN
// get all appointments in DB
const indexGET = async (req, res) => {
  let allAppointments = await getAllAppointments();
  return res.status(200).json({ allAppointments });
};

//USER
//Create new appointment by User
const newAppointmentUserPOST = async (req, res) => {
  //data for example insert
  //user will fill (in form?) and send themn by req boy
  let { date, time, comment, storeId, petId, serviceId } = req.body;
  //This will be auto-fill
  let StatusId = 4;
  let userId = req.decodeUserId;

  //create dataObj for query;
  let queryData = {
    date,
    time,
    StatusId,
    comment,
    StoreId: storeId,
    UserId: userId,
    PetId: petId,
    ServiceId: serviceId,
  };
  //Query:
  try {
    let newAppointment = await createAppointment(queryData);
    res.status(201).json({ newAppointment });
  } catch (error) {
    res.status(500).json({ error });
  }
};
//Get the three following appointments for userId, id to receive, body userId
const threeFollowingAppointmentsByUserId = async (req, res) => {
  //let userId = req.decodeUserId;
  let userId = req.params.id;

  let ThreeFollowingAppointments = await GetFollowingThreeAppointsByUserId(
    userId
  );
  return res.status(200).json({ ThreeFollowingAppointments });
};

//Get all appointments for userId, id to receive, body userId
const appointmentsUserId = async (req, res) => {
  //let userId = req.decodeUserId;
  let userId = req.params.id;
  let filtersBody = req.body.filters;
  // console.log("body received in endpoint: ", filtersBody);
  //Filters for query
  let filters = {
    storeName: filtersBody.storeName,
    petName: filtersBody.petName,
  };

  //For filtering statues:
  if (filtersBody.statues === false || filtersBody.statues.length === 0) {
    let statuesObj = {
      w1: "",
      w2: "",
      w3: "",
      w4: "",
      w5: "",
    };
    filters.statues = statuesObj;
  } else if (filtersBody.statues != false) {
    //Not working: let [w1, w2, w3, w4, w5] = filtersBody.statues;

    // Not working x2:
    // filters.statues.w1 = filtersBody.statues[0];
    // filters.statues.w2 = filtersBody.statues[1];
    // filters.statues.w3 = filtersBody.statues[2];
    // filters.statues.w4 = filtersBody.statues[3];
    // filters.statues.w5 = filtersBody.statues[4];

    //3, working:
    // let statuesQueryArray = filtersBody.statues;
    // console.log(statuesQueryArray);
    //filters.statues = statuesQueryArray;

    //4:
    let statuesQueryArray = filtersBody.statues;
    let [w1 = "nono", w2 = "nono", w3 = "nono", w4 = "nono", w5 = "nono"] =
      statuesQueryArray;

    let statuesObj = {
      w1,
      w2,
      w3,
      w4,
      w5,
    };
    filters.statues = statuesObj;
  }

  //For filtering service type:
  if (filtersBody.services === false || filtersBody.services.length === 0) {
    let servicesObj = {
      w1: "",
      w2: "",
      w3: "",
    };
    filters.services = servicesObj;
  } else if (filtersBody.services != false) {
    let servicesQueryArray = filtersBody.services;
    let [w1 = "nono", w2 = "nono", w3 = "nono", w4 = "nono", w5 = "nono"] =
      servicesQueryArray;

    let servicesObj = {
      w1,
      w2,
      w3,
    };
    filters.services = servicesObj;
  }

  // console.log("Filtros pre query", filters);
  let userAppointments = await getAppointmentsByUserId(userId, filters);
  return res.status(200).json({ userAppointments });
};

//STORE
//Get all appointments for storeId, id to receive:
const allAppointmentsByStoreIdGET = async (req, res) => {
  let storeId = req.decodeStoreId;

  let storeAppointments = await getAllAppointmentsByStoreId(storeId);
  return res.status(200).json({ storeAppointments });
};
//Get all pending appointments for storeId, id to receive:
const allPendingAppointmentsByStoreIdGET = async (req, res) => {
  let storeId = req.decodeStoreId;

  let storeAppointments = await getAllPENDINGAppointmentsByStoreId(storeId);
  return res.status(200).json({ storeAppointments });
};

//NEUTRAL:
//Get appointment data by ID
const appointmentInfoPOST = async (req, res) => {
  let { id } = req.params;

  let appointmentsByID = await getAppointmentById(id);
  res.status(200).json({ appointmentsByID });
};
//Update appointment data
const appointmentUpdatePUT = async (req, res) => {
  let { id } = req.params;

  //Inputs:
  let newName = req.body.name;
  let newLastName = req.body.lastname;

  //Create obj to update
  let updateData = {};
  //Include into updateData if not empty:
  if (newName != undefined) {
    updateData.first_name = newName;
  }
  if (newLastName != undefined) {
    updateData.last_name = newLastName;
  }

  //Update query
  try {
    //update query
    let appointmentUpdated = await updateAppointmentById(updateData, id);
    //get new appointment info query
    let appointmentDataUpdated = await getAppointmentById(id);

    res.status(200).json({ appointmentDataUpdated });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  indexGET,
  newAppointmentUserPOST,
  appointmentInfoPOST,
  appointmentUpdatePUT,
  appointmentsUserId,
  allAppointmentsByStoreIdGET,
  allPendingAppointmentsByStoreIdGET,
  threeFollowingAppointmentsByUserId,
};
