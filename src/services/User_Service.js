import axios from './customize-axios'
const fetchAllUser = (page) => {
  // return  axios.get("/users");
  return  axios.get(`users_page${page}`);
}

export { fetchAllUser};