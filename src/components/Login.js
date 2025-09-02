import { useState } from "react"
import { loginApi } from "../services/User_Service"
import { toast } from "react-toastify"
const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleLogin = () => {
    if(!email || !password){
        toast.error("Miss email or password")
        return
    }
    let  res = loginApi(email,password)
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
          <i class="fa-solid fa-angle-left"></i>  <a href="#">Go Back</a> 
        </div>
    </div>
  )
}

export default Login