const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const User = require("../models/User");

exports.register = (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email }).then((user) => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({ name, email, password });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) => res.json(user).status(201))
                        .catch((err) => console.log(err));
                });
            });
        }
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(404).json({ email: "User not found" });
        }

        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                const payload = { id: user.id, name: user.name };

                jwt.sign(
                    payload,
                    keys.secretKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({ success: true, token: "Bearer " + token });
                    }
                );
            } else {
                return res.status(400).json({ password: "Incorrect password" });
            }
        });
    });
};
