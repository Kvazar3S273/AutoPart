import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:25036/",
  //baseURL: "/",
  headers: {
    "Content-type": "application/json"
  }
});