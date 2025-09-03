import { useState } from "react"
import { loginApi } from "../services/User_Service"
import { toast } from "react-toastify"
const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleLogin = async() => {
     if(!email || !password){
        toast.error("Miss email or password")
        return
    }
    let  res = await loginApi(email,password)
    if(res && res.data && res.data.token){
      localStorage.setItem("token",res.data.token)
    }
  }
  return(
    <div className="login-container col-4">
        <div className="title">Login</div>
        <div className="text"> Email or username</div>
        <input 
        type="text" 
        placeholder="Email or Username"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
        <input 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(event)=> setPassword(event.target.value)}
        />
        <button className="btn-color"
        onClick={handleLogin}
        >Login</button>
        <div className="go-back">
          <i className="fa-solid fa-angle-left"></i>  <a href="#">Go Back</a> 
        </div>
    </div>
  )
    }

export default Login