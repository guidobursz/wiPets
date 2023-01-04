const bcrypt = require("bcryptjs");

//cant make it work if i dont put privateSalt is a numebr
let privateSalt = Number(process.env.BCRYPT_SALT);

const encrypt = async (p) => {
  let hash = await bcrypt.hash(p, privateSalt);
  return hash;
};

const hashCompare = async (pass, hash) => {
  let compare = await bcrypt.compare(pass, hash);
  return compare;
};

module.exports = { encrypt, hashCompare };
