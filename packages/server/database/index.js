require("dotenv").config();
const config = require("./config");

const knex = require("knex")({
  ...config,
});

module.exports = knex;
