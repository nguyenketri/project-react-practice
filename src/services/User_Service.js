import axios from "axios";

const fetchAllUser = () => {
  return  axios.get("https://jsonplaceholder.typicode.com/users?_page=1&_limit=5");
}

export { fetchAllUser};