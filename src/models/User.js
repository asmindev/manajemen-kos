const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "tenant"],
        default: "tenant",
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    room: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("User", UserSchema);