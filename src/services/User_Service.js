import instance from './customize-axios'
const fetchAllUser = (page) => {
  // return  axios.get("/users");
  return  instance.get(`users_page${page}`);
}

const postCreateUser = (name,job,id) => {
  return instance.post("users_page1",{id:id,first_name:name,last_name:job})
}

const putEditUser = (name,job,id)=>{
  return instance.put(`users_page1/${id}`,{first_name:name,last_name:job})
}
export { fetchAllUser, postCreateUser,putEditUser};