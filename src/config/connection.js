import axios from "axios";

export default axios.create({
  baseURL: "http://backoffice.com-indo.com/api/v1/user/faqs",
  headers: {
    "Content-type": "application/json"
  }
})