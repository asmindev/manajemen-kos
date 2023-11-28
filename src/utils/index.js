import jwt from "jsonwebtoken";
const decoded = (_token) => {
    try {
        const token = jwt.decode(
            _token.replace("Bearer ", ""),
            process.env.NEXT_PUBLIC_SECRET_KEY
        );
        console.log(token);
        return token;
    } catch (err) {
        console.log({ error: err });
        return {};
    }
};

function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data === null) {
        return null;
    }
    return JSON.parse(data);
}

function saveDataToLocalStorage(key, data) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
}

export { decoded, getDataFromLocalStorage, saveDataToLocalStorage };
