import React from 'react'
import './Signup.css'
// import {MdOutlinePersonalAddAlt1} from 'react-icons/md'
export default function Signup() {
  return (
    <div id='signup'
    onSubmit={(e) => {
          
          alert("Signup successfully....");
         
        }}>
        <form action="">
        <span id="signuptitle">Sign Up Page</span>
        <div className="list">
          <label htmlFor="signup-name">
            Full Name
          </label>
          <input type="text" id="signup-name" required/>
           </div>
           
        <div className="list">
          <label htmlFor="signup-email">
            Email
          </label>
          <input type="text" id="signup-email" required/>
           </div>
          <div className="list">
            <label htmlFor="signup-pass">
              Password
            </label>
            <input type="password" id="signup-pass" required/>
         
        </div>
        <div className="list">
          <label htmlFor="signup-conpass1">
            Confirm Password
          </label>
          <input type="password" id="signup-conpass1" required/>
           </div>
        <button id="signupbtn">Signup</button>
      </form>
      
    </div>
  )
}
