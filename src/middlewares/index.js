const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// create a middleware function for verifying JWT tokens
exports.authorization = (req, res, next) => {
    const rawToken = req.headers["authorization"];
    if (rawToken) {
        jwt.verify(
            rawToken.replace("Bearer ", ""),
            keys.jwt_secret,
            (err, decoded) => {
                if (err) {
                    res.json({ error: "unauthorized" }).status(401);
                } else {
                    req.user = decoded;
                    next();
                }
            }
        );
    } else {
        next();
    }
};
