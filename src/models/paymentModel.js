

// models/paymentModel.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    paymentId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "success", "failed"],
        default: "pending",
    },
    paymentDate: {
        type: Date,
        default: Date.now,
    },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;