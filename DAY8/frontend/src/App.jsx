import { useState } from "react";
import axios from "axios";
import "./App.css";

function App(){
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[message,setMessage]=useState("");
  const API="http://localhost:1009/api/auth";

  const registerUser=async()=>{
    try{
      const res=await axios.post(
        `${API}/register`,
        {
        email:email,
        password:password
        }
      )
      setMessage("User Registered");
    }
    catch(err){
      setMessage("Registeration Failed");
    }
  };

  const loginUser=async()=>{
    try{
      const res=await axios.post(
        `${API}/login`,
        {
          email:email,
          password:password
        }
      );
      localStorage.setItem("token",res.data.token);
    }
  
  catch(err){
    setMessage("Login Failed");
  }
  };

  return(
    <div className="container">
      <h1>JWT Authentication</h1>
      <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
      
      <div className="buttons">
        <button onClick={registerUser}>Register</button>
        <button onClick={loginUser}>Login</button>
    </div>
    <p>{message}</p>
    </div>
  )
}

export default App;