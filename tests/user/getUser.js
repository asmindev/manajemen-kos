const axios = require("axios");
axios.defaults.baseURL = "http://localhost:5000";

async function profile(token) {
    const resp = await axios.get("/api/user/profile", {
        headers: {
            Authorization: token,
        },
    });
    console.log(resp?.data || {});
}

profile(
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTRiZWMwZDM3ODg5YWIwNjcyYTkwMyIsIm5hbWUiOiJ0ZXMiLCJpYXQiOjE3MDAwNTM2NTAsImV4cCI6MTcwMDA1NzI1MH0.ox1R5utDX1w06IWrWmb1TKhdpfIGrKXE8mnN-XBr1Qo"
);
