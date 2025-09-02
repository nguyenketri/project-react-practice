
const Login = () => {
  return(
    <div className="login-container col-4">
        <div className="title">Login</div>
        <div className="text"> Email or username</div>
        <input type="text" placeholder="Email or Username"/>
        <input type="password" placeholder="Password"/>
        <button className="btn-color">Login</button>
        <div className="go-back">
          <i class="fa-solid fa-angle-left"></i>  <a href="#">Go Back</a> 
        </div>
    </div>
  )
}

export default Login