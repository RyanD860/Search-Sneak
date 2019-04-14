const config = require("./config");
const Seq = require("sequelize");
var seq = new Seq(config.dbConnectionString);
// require("sequelize-values")(seq);

module.exports = seq;
