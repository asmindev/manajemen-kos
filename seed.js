const axios = require("axios");
axios.defaults.baseURL = "http://localhost:5002";

const insert = async () => {
    const resp = await axios.post("/api/payment/create", {
        id: 2,
        price: 200,
    });
    console.log({ resp: resp?.data });
};

const confirm = async () => {
    const resp = await axios.post("/api/payment/confirm", {
        id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlcl9pZCI6IjIiLCJhbW91bnQiOjIwMCwic3RhdHVzIjoicGVuZGluZyIsInBheW1lbnREYXRlIjoiMjAyMy0xMS0xOFQwODozOTowMi4wMzVaIiwiX2lkIjoiNjU1ODc4MjY2MmM1NjMwMGY4NzBmMWNiIiwiX192IjowLCJpYXQiOjE3MDAyOTY3NDJ9.4vbe3zzO5pnxM-uDUd_KyGyjGOfwtVS7eF_T6gn5ygY",
    });
    console.log({ resp: resp?.data });
};

confirm();
