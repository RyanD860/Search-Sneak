const Seq = require("sequelize");
const seq = require("../db");

const User = seq.define("user", {
  login: Seq.STRING,
  password: Seq.STRING
});

module.exports = {
  User
};
