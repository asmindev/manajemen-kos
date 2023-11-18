const axios = require("axios");
axios.defaults.baseURL = "http://localhost:3000";

const hit = async (token) => {
    const resp = await axios.get("/api/bookings/2", {
        headers: {
            Authorization: token,
        },
    });
    console.log(resp?.data);
};
hit(
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MDAxMjgyODMsImV4cCI6MTczMTY2NDI4MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImFzbWkiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiaWQiOiIyIn0.k7god7R8pPB0nYFJTiAeNK9cSz8aNwjEOUXM-c1ib2E"
);
