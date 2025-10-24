import React from 'react'
import Contact from '../Contactus/Contact'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
    <div id ='footertop'>
        <div className="box">
            <span id="contact1">Contact Us</span>
            <span>+910000000000</span>
            <span>abc123@gmail.com</span>
            <span>Address,city/India</span>
        </div>

        <div className="box">
            <span id="services">Our Services</span>
            <span>Home</span>
            <span>Add Listing</span>
            <span>Rent</span>
        </div>

        <div className="box">
            <span id="Quick">Quick Link</span>
            <span>Knowledge Base</span>
            <span>FAQ</span>
            <span>Contact</span>
        </div>
        <div className="box">
             <span id="logo">Private Property Rental</span>
            <Link to={"/Contact"}><button>Contact us</button></Link>
        </div>
        </div>
        <div className="footerbutton">
            <span>Privacy Policy ||</span>
        <span>Use of Terms</span>
        </div>
        </div>
  )
}


        

        

        