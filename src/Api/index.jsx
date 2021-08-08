import axios from "axios";

//BackEnd URL!
const URL = "http://localhost:8080";

const Api = axios.create({
  baseURL: URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken() || ""}`,
  },
});

export default Api;