//Import models for bulks
const Status = require("./models/Status");
const User = require("./models/User");
const Store = require("./models/Store");
const Pet = require("./models/Pet");
const PetBreed = require("./models/PetBreed");
const PetType = require("./models/PetType");
const Appointment = require("./models/Appointment");

//assoc with pet/user
User.hasMany(Pet);
Pet.belongsTo(User);

//Assoc with pet/type/breed
PetType.hasMany(Pet);
Pet.belongsTo(PetType);
PetBreed.hasMany(Pet);
Pet.belongsTo(PetBreed);

//Assoc with appointment table:
User.hasMany(Appointment);
Appointment.belongsTo(User);
Appointment.belongsTo(Store);
Store.hasMany(Appointment);

Status.hasMany(Appointment);
Appointment.belongsTo(Status);

Pet.hasMany(Appointment);
Appointment.belongsTo(Pet);
