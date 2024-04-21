import React from 'react'
import '../assets/Login.css'

function Loginpage() {
  return (
    <div>
      <img src="" alt="" />
    <div className='outer'>
        <div className='inner'>
            <div className='tit'>
                <h1>LOGIN </h1>
                <img width={'60px'} src="src/assets/images/hi1.png" alt="" />
            </div>

            <div className='inputfield'>
            <h1>Username</h1>
            <input  type="text" id="name" placeholder='Username' style={{}}/>
            <h1>Password</h1>
            <input type="text" id="pass" placeholder='Password' style={{}}/>
            </div>

            <div className='links'>
            <h2><input type='checkbox' id="check"/>Remember me</h2>
            <a href='#'>Forget Password</a>
            </div>

            <div className='below'>
            <button className='btn'>Login</button>
            <h2>Don't have an account? <a href='/signUp'>sign up</a></h2>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Loginpage