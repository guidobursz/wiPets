//import models
const Service = require("../db/models/Service");
//
//
const getAllServices = async () => {
  let allServices = await Service.findAll();
  return allServices;
};

module.exports = { getAllServices };
