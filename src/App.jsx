import { Outlet } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Nav from "./components/Nav/Nav"

import './App.css'
import Contact from "./components/Contactus/Contact"
import Footer from "./components/footer/Footer"


function App() {
 

  return (
    <>
       <Nav/>
     
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
