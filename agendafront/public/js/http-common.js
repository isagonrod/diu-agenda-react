import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8081/contact",
    headers: {
        "Content-type": "application/json"
    }
});