import React, { useState } from 'react'
import '../assets/Login.css'
import { useNavigate } from 'react-router-dom';

function Loginpage() {

  const [logName , setLogName] = useState();
  const[logPass , setLogPass ] = useState();
  const navigate = useNavigate();

  const loginButton = async() => {
    console.log("Login has started");

    console.log("name :" + logName + "Pass : " + logPass)

    const res = await fetch( "http://localhost:8000/user/login", {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({"email":logName,"password":logPass})
    } )

    const data = await res.json();
    console.log(data);

    if(data.data == true){
      console.log("Everything is ok");
      navigate('/leftside/')
    }
  }
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
            <input  type="text" id="name" placeholder='Username' style={{}} onChange={e => {setLogName(e.target.value)}}/>
            <h1>Password</h1>
            <input type="text" id="pass" placeholder='Password' style={{}} onChange={e => {setLogPass(e.target.value)}}/>
            </div>

            <div className='links'>
            <h2><input type='checkbox' id="check"/>Remember me</h2>
            <a href='#'>Forget Password</a>
            </div>

            <div className='below'>
            <button className='btn' onClick={loginButton}>Login</button>
            <h2>Don't have an account? <a href='/signUp'>sign up</a></h2>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Loginpage