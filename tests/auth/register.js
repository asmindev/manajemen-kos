const axios = require("axios");
axios.defaults.baseURL = "http://localhost:5000";

async function register(name, email, password) {
    const resp = await axios.post("/api/auth/register", {
        name,
        email,
        password,
    });
    console.log({ resp });
}

register("adza", "adza@email.com", "1234567");
