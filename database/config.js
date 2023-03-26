const { Sequelize } = require('sequelize');

const dbUsers = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORDD,
  database: process.env.DB_USERS_DATABASE,
  port: process.env.DB_PORT,
  logging: false,
});

const dbRepairs = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORDD,
  database: process.env.DB_REPAIRS_DATABASE,
  port: process.env.DB_PORT,
  logging: false,
});

module.exports = { dbUsers, dbRepairs };
