import React, { useContext } from 'react'
import './Home.css'

import Card from '../Card/Card'

import farmhouse from '../../assets/farmhouse2.jpg'
import farmhouse1 from '../../assets/farmhouse1.jpg'
import farmhouse2 from '../../assets/farmhouse.jpg'
import huthouse from '../../assets/huthouse.jpg'
import huthouse1 from '../../assets/huthouse1.jpg'
import huthouse2 from '../../assets/huthouse2.jpg'
import mountain from '../../assets/mountain.avif'
import mountain1 from '../../assets/mountain1.avif'
import mountain2 from '../../assets/mountain2.avif'
import mountain3 from '../../assets/mountain3.avif'
import old from '../../assets/old.avif'
import old1 from '../../assets/old1.avif'
import old2 from '../../assets/old2.avif'
import old3 from '../../assets/old3.avif'
import poolhouse from '../../assets/poolhouse.jpg'
import poolhouse2 from '../../assets/poolhouse2.jpg'
import room from '../../assets/room.jpg'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'
import roomhouse from '../../assets/roomhouse.avif'
import roomhouse1 from '../../assets/roomhouse1.avif'
import roomhouse2 from '../../assets/roomhouse2.avif'
import roomhouse3 from '../../assets/roomhouse3.avif'
import roomnew from '../../assets/roomnew.avif'
import roomnew1 from '../../assets/roomnew1.avif'
import roomnew2 from '../../assets/roomnew2.avif'


import ski from '../../assets/ski.avif'
import ski1 from '../../assets/ski1.avif'
import ski2 from '../../assets/ski2.avif'
import { dataContext } from '../../Context/Usercontext'



export default function Home() {
 let{
        title,
        setTitle,
        addListing,
        addImage1,
        addImage3,
        setaddImage1,
        addImage2,
        setaddImage2,
        
        setaddImage3,
        
        setaddListing,
        price,
        setprice
    }=useContext(dataContext)


  return (
    <div id='home'>
     

     <Card image1 = {farmhouse} image2={farmhouse1} image3={farmhouse2} title={"18BHK farmhouse in Lucknow"} price={"60,000"}/>

     <Card image1 = {huthouse} image2={huthouse1} image3={huthouse2} title={"2BHK Hut House in kasol"} price={"40,000"}/>

     <Card image1 = {mountain} image2={mountain1} image3={mountain2} title={"1BHK house in manali"} price={"40,000"}/>

     <Card image1 = {ski} image2={ski1} image3={ski2} title={"1BHK flat in manali"} price={"60,000"}/>

     
     <Card image1 = {room} image2={room1} image3={room2} title={"18BHK flat in banglore"} price={"90,000"}/>


     <Card image1 = {roomhouse} image2={roomhouse1} image3={roomhouse2} title={"13HK House in Kanpur"} price={"80,000"}/>

     <Card image1 = {roomnew} image2={roomnew1} image3={roomnew2} title={"18BHK flat in noida"} price={"90,000"}/>

     <Card image1 = {old} image2={old1} image3={old2} title={"3BHK House in chandigarg"} price={"50,000"}/>

     {/* {addListing?<Card image1 = {URL.createObjectURL(addImage1)} image2={URL.createObjectURL(addImage2)} image3={URL.createObjectURL(addImage3)} title={title} price={price}/>:""} */}

     {addListing && (
  <Card
    image1={addImage1 ? URL.createObjectURL(addImage1) : ""}
    image2={addImage2 ? URL.createObjectURL(addImage2) : ""}
    image3={addImage3 ? URL.createObjectURL(addImage3) : ""}
    title={title}
    price={price}
  />
)}



    </div>
  )
}
