
'use client';

import { Carousel } from 'flowbite-react';

import img1 from "../../../assets/WhatsApp Image 2024-01-18 at 18.31.48.jpeg"
import img2 from "../../../assets/BackgroundCat.jpg"

function Slider() {
 return (
  <div className="h-56 sm:h-64  xl:h-80 2xl:h-96">
   <Carousel>
    <img src={img1} alt="..." />
    <img src={img2} alt="..." />

   </Carousel>
  </div>
 );
}


export default Slider