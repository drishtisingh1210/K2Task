import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});
export default instance;
//
