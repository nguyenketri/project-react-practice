import axios from './customize-axios'
const fetchAllUser = () => {
  return  axios.get("/users?_page=1&_limit=5");
}

export { fetchAllUser};