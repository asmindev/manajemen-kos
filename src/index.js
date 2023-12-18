const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");

const userRoutes = require("./routes/userRoutes");
const keys = require("./config/keys");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Routes
app.get("/", (req, res) => {
    return res.json({ hello: "adell" });
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Connect to MongoDB
mongoose
    .connect(keys.mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
