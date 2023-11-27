// sam
// app.py

// src/app.js
const express = require("express");
const bodyParser = require("body-parser");
const bookingRoutes = require("./routes/bookingRoutes");
const { sequelize } = require("./models");
const authMiddleware = require("./middleware");
require("dotenv").config(); // Menambahkan ini untuk membaca variabel lingkungan dari .env

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(bodyParser.json());
app.use(authMiddleware);

app.get("/", (req, res) => {
    return res.json({ hello: "wrold" });
});
// Routes
app.use("/api", bookingRoutes);

// Start Server
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    // Synchronize Sequelize models with the database
    await sequelize.sync({ force: false });
    console.log("Database synced");
});