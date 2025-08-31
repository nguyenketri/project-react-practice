import instance from './customize-axios'
const fetchAllUser = (page) => {
  // return  axios.get("/users");
  return  instance.get(`users_page${page}`);
}

const postCreateUser = (name,job,id) => {
  return instance.post("users_page1",{id:id,first_name:name,last_name:job})
}

const putUpdateUser = (name,job,id,page)=>{
  return instance.put("users_page"+page+"/"+id,{first_name:name,last_name:job})
}

const deleteUser = (id,page) => {
    return instance.delete("users_page"+page+"/"+id)
}
// `users_page2/${id}`
export { fetchAllUser, postCreateUser, putUpdateUser,deleteUser};