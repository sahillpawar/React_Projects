import React from 'react'
import './LoginSignUp.css'



function LoginSignUp() {
  return (
    <div className="container">
        <div className="header">
            <div className="text"> Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img > </img>
                <input type='text' />
            </div>
            <div className="input">
                <img ></img>
                <input type='email' />
            </div>
            <div className="input">
                <img ></img>
                <input type='password' />
            </div>
        </div>
        <div className="forgot-pass">Forgot Password</div>
        <div className="submit-container">
            <div className="submit"> Sign-Up </div>
            <div className="submit"> Login </div>
        </div>
    </div>
  )
}

export default LoginSignUp