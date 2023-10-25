import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});
export default instance;
//
