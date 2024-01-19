
'use client';

import { Carousel } from 'flowbite-react';

import img1 from "../../../assets/WhatsApp Image 2024-01-18 at 18.31.48.jpeg"
import img2 from "../../../assets/BackgroundCat.jpg"

function Slider() {
 return (
  <div className="h-56 sm:h-64 2xl:h-96 xl:min-h-[440px]">
   <Carousel >
    <img className="h-56 sm:h-64  xl:min-h-[440px] 2xl:h-96" src={img1} alt="..." />
    <img className="h-56 sm:h-64  xl:min-h-[440px] 2xl:h-96" src={img2} alt="..." />

   </Carousel>
  </div>
 );
}


export default Slider