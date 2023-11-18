// src/models/Booking.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Booking = sequelize.define("Booking", {
        propertyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        checkInDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        checkOutDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "Pending",
        },
    });
    return Booking;
};
