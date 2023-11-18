// src/routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/bookings", bookingController.createBooking);
router.get("/booking/:bookingId", bookingController.getBookingById);
router.get("/bookings/:userId", bookingController.getAllBookingById);
// tambahkan rute lain sesuai kebutuhan (update, delete, dll.)

module.exports = router;
