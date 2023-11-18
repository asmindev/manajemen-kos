// src/controllers/bookingController.js
const { models } = require("../models/");
const { verifyJwt } = require("../utils");

const createBooking = async (req, res) => {
    try {
        const booking = await models.Booking.create(req.body);
        return res.status(201).json(booking);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const getBookingById = async (req, res) => {
    const { bookingId } = req.params;
    try {
        const booking = await models.Booking.findByPk(bookingId);
        if (!booking.length) {
            return res.status(404).json({ error: "Booking not found" });
        }
        return res.status(200).json(booking);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllBookingById = async (req, res) => {
    const user = req.user;
    const rawToken = req.headers["authorization"];
    const token = verifyJwt(rawToken);
    console.log(token);
    const { userId } = req.params;
    if (user.id == userId) {
        try {
            const booking = await models.Booking.findAll({
                where: {
                    userId: userId,
                },
            });
            if (!booking.length) {
                return res.status(404).json({ error: "Booking not found" });
            }
            return res.status(200).json(booking);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(401).json({ error: "unauthorized" });
    }
};

// tambahkan fungsi-fungsi lain sesuai kebutuhan (update, delete, dll.)
module.exports = { getBookingById, createBooking, getAllBookingById };
