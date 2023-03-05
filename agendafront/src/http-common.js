import axios from "axios";

export default axios.create({
    //baseURL: "http://agenda.us-east-1.elasticbeanstalk.com/contact",
    baseURL: "http://localhost:8081/contact",
    headers: {
        "Content-type": "application/json"
    }
});