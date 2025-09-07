import React, { useState } from 'react'
import './Login.css'
// import TEHLogo from '../../assets/logo.png'


const Login = () => {
  const [signState, setSignState] = useState("Sign In");



  return (
    <div className='login'>
      <img src="" className='loginLogo' alt="login logo" />
      <div className='loginForm'>

        <h1>{signState}</h1>

        <form action="">
          {signState === 'Sign Up' && <input type="text" placeholder='Enter your name' name='username' id='username' />}

          <input type="email" name="email" id="email" placeholder='Enter your Email' />
          <input type="password" name="password" id="password" placeholder='Enter your password' />

          <button >{signState}</button>
          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" name="rememberUser" id="rememberUser" />
              <label htmlFor="rememberUser">Remember me</label>
            </div>

            <p>Need help?</p>
          </div>
        </form>


        <div className="formSwitch"> 
          {signState === "Sign In" && 
          <p>New to The Entertainment Hub? <span onClick={() => 
          {setSignState("Sign Up")}
          }>Sign Up Now</span></p> }

          {signState === "Sign Up" &&
            <p>Already have an account? <span onClick={() => {setSignState("Sign In")}}>Sign In</span></p>          
          }
        </div>
      </div>
    </div>
  )
}

export default Login