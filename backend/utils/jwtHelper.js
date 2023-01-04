var jwt = require("jsonwebtoken");

let privateKey = process.env.JWT_CODE;

const signToken = (data) => {
  let token = jwt.sign(data, privateKey);
  return token;
};

const signToken7Days = (data) => {
  let token = jwt.sign(data, privateKey, {
    expiresIn: "7d",
  });
  return token;
};

const decodeToken = (token) => {
  let data = jwt.verify(token, privateKey);
  return data;
};

module.exports = { signToken, signToken7Days, decodeToken };
