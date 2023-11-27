// src/models/Booking.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Booking = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        propertyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bookingId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        checkInDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "Pending",
        },
    });
    return Booking;
};