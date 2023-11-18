const axios = require("axios");
axios.defaults.baseURL = "http://localhost:5000";

async function login(email, password) {
    const resp = await axios.post("/api/auth/login", {
        email,
        password,
    });
    console.log(resp?.data || {});
}

login("adza@email.com", "1234567");
