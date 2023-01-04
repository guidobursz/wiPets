//Import models for bulks
const User = require("./models/User");
const Store = require("./models/Store");
const Pet = require("./models/Pet");
const Breed = require("./models/Breed");
const Appointment = require("./models/Appointment");
const Status = require("./models/Status");

//Pets has one Breed, Breed could belong to many pets.
//add breedId to the pet table
Breed.hasOne(Pet);
Pet.belongsTo(Breed);

//Add petid to user (owner)
User.hasOne(Pet);
Pet.belongsTo(User);

//Add storeId,userId,PetId,Status to Appointments table
Status.hasOne(Appointment);
Store.hasOne(Appointment);
User.hasOne(Appointment);
Pet.hasOne(Appointment);
