// userRoutes.js
const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/userController");

router.get(
    "/profile",
    passport.authenticate("jwt", { session: false }),
    userController.getProfile
);

module.exports = router;
