// src/models/index.js
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config;
dotenv();
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "mysql",
});

const models = {
    Booking: require("./Booking")(sequelize),
    // Tambahkan model lain di sini jika ada
};

module.exports = { sequelize, models };
