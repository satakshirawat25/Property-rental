import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

export default function Login() {
  return (
      <div id="login">
        onSubmit={(e)=>{
            alert("Login successfully....")
        }}
      
      {/* <form action=""> */}
      <form action="">
        
      
        
        <span id="logintitle">Login Page</span>
        <div className="list">
          <label htmlFor="login-email">
            Email
          </label>
          <input type="text" id="login-email" required/>
           </div>
          <div className="list">
            <label htmlFor="login-pass">
              Password
            </label>
            <input type="password" id="login-pass" required/>
         
        </div>
        <button id="loginbtn">Login<MdLogin/></button>
      </form>
    </div>
  );
}
