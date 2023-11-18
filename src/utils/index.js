const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const verifyJwt = (token) => {
    try {
        const result = jwt.verify(
            token.replace("Bearer ", ""),
            keys.jwt_secret
        );
        return result;
    } catch (err) {
        return err;
    }
};

module.exports = { verifyJwt };
