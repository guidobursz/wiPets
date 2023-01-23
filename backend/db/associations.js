//Import models for bulks
const Status = require("./models/Status");
const User = require("./models/User");
const Store = require("./models/Store");
const PetType = require("./models/PetType");
const PetBreed = require("./models/PetBreed");
const Pet = require("./models/Pet");
const Appointment = require("./models/Appointment");
const Service = require("./models/Service");

//Assoc with petType/PetBreed
PetType.hasMany(PetBreed);
PetBreed.belongsTo(PetType);

//Assoc with pet/type/breed
PetType.hasMany(Pet);
Pet.belongsTo(PetType);
PetBreed.hasMany(Pet);
Pet.belongsTo(PetBreed);

//assoc with pet/user
User.hasMany(Pet);
Pet.belongsTo(User);

//c
Service.belongsToMany(Store, { through: "store_service" });
Store.belongsToMany(Service, { through: "store_service" });

//Assoc with appointment table:
User.hasMany(Appointment);
Appointment.belongsTo(User);
Appointment.belongsTo(Store);
Store.hasMany(Appointment);

Status.hasMany(Appointment);
Appointment.belongsTo(Status);

Pet.hasMany(Appointment);
Appointment.belongsTo(Pet);

Service.hasMany(Appointment);
Appointment.belongsTo(Service);
