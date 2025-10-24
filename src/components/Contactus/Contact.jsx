import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div id='contact'>
        <form action=''>
                
              
                
                <span id="contacttitle">Contact Page</span>
                <div className="list">
                  <label htmlFor="name">
                    userName
                  </label>
                  <input type="text" id="name" required/>
                   </div>
                  <div className="list">
                    <label htmlFor="mail">
                      Password
                    </label>
                    <input type="text" id="mail" required/>
                </div>

                <div className="list">
                    <label htmlFor="mess">
                      Message
                    </label>
                    <textarea id="mess" required/>
                 
                </div>
                <button id="contactbtn">Submit</button>
              </form>
      
    </div>
  )
}

export default Contact
