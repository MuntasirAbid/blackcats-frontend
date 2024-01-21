
import { Carousel } from 'flowbite-react';

import img1 from "../../../assets/WhatsApp Image 2024-01-18 at 18.31.48.jpeg"
import img2 from "../../../assets/BackgroundCat.jpg"

function Slider() {
 return (
  <div className="h-56 sm:h-64 2xl:min-h-[70vh] xl:min-h-[70vh]">
   <Carousel >

    <img className="h-56 sm:h-64  xl:min-h-[80vh] 2xl:min-h-[80vh]" src={img1} alt="..." />
    <img className="h-56 sm:h-64  xl:min-h-[80vh] 2xl:min-h-[80vh]" src={img2} alt="..." />

   </Carousel>
  </div>
 );
}


export default Slider