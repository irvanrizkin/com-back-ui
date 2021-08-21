import connection from "../config/connection";

const getFaq = () => {
  return connection.get("");
}

export default getFaq;