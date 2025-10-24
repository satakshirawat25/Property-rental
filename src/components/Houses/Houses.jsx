import React from 'react'
import './Houses.css'
import Card from '../Card/Card'
import villa from '../../assets/villa.jpg'
import villa1 from '../../assets/villa1.jpg'
import villa3 from '../../assets/villa3.jpg'
import village from '../../assets/village.avif'
import village1 from '../../assets/village1.avif'
import village2 from '../../assets/village2.avif'
import hut1 from '../../assets/hut1.avif'
import hut2 from '../../assets/hut2.avif'
import hut3 from '../../assets/hut3.avif'
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";

import house2 from "../../assets/houseliving.jpg";

export default function Houses() {
  return (
    <div id='houses'>
        <Card image1 = {house} image2={house1} image3={house2} title={"3BHK Villa in jhansi"} price={"40,000"}/>
        <Card image1 = {village} image2={village1} image3={village2} title={"2BHK house in himanchal"} price={"50,000"}/>

     <Card image1 = {villa} image2={villa1} image3={villa3} title={"2BHK Modern Villa in Delhi"} price={"50,000"}/>

    
     <Card image1 = {hut1} image2={hut2} image3={hut3} title={"3BHK House in Goa"} price={"50,000"}/>
      
    </div>
  )
}
