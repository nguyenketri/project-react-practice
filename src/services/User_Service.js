import instance from './customize-axios'
const fetchAllUser = (page) => {
  // return  axios.get("/users");
  return  instance.get(`users_page${page}`);
}

const postCreateUser = (name,job) => {
  return instance.post("users",{first_name:name,job:job})
}
export { fetchAllUser, postCreateUser};