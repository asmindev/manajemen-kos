// # windi
// # controllers/PaymentControllers

const jwt = require("jsonwebtoken");
const Payment = require("../models/paymentModel");
const keys = require("../config/keys");

exports.create = async (req, res) => {
    try {
        const item = req.body;
        const current = new Date();
        const newPayment = new Payment({
            paymentId: item.payment,
            userId: item.user,
            amount: item.price,
            paymentDate: current.getTime(),
        });
        await newPayment.save();
        console.log("clicked");
        const sign = jwt.sign(newPayment.toObject(), keys.secretKey);
        res.status(200).json({ id: sign });
    } catch (err) {
        console.log({ error: err });
        res.status(500);
    }
};

exports.confirm = async (req, res) => {
    const id = req.body.id;
    jwt.verify(id, keys.secretKey, (err, decoded) => {
        console.log(err, decoded);
    });
    res.sendStatus(201);
};

exports.cancel = async (req, res) => {
    const id = req.body.id;
    jwt.verify(id, keys.secretKey, (err, decoded) => {
        console.log(err, decoded);
    });
    res.sendStatus(201);
};