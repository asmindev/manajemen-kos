const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./src/routes");
const authorization = require("./src/middlewares");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
// app.use(authorization);
app.use("/api/payment", router);

// listen app
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    mongoose
        .connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log(err));
    console.log("server running at port: ", PORT);
});
