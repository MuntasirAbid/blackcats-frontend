import { Carousel } from 'flowbite-react';
import img1 from "../../../assets/blackcat3.webp"
import img2 from "../../../assets/BackgroundCat.avif"
import img3 from "../../../assets/balckcat.jpg"
import img4 from "../../../assets/blackcat2.jpeg"
import { Link } from 'react-router-dom';

function Slider() {
 return (
  <div className="relative z-[1]">
   <h1 className="absolute top-1/2 left-1/4 text-white font-serif z-[2]  md:left-1/3 md:top-1/3 lg:left-40 lg:top-1/3 ">
    <span className='text-xs md:text-2xl lg:text-5xl text-center md:text-center lg:text-left'>Welcome to Blackcats</span>
    <br />
    <span className='text-xs md:text-xl lg:text-3xl text-center md:text-center lg:text-left'>Your Journey to Endless Deals Begins Here</span>
   </h1>
   <Link to="/advertiseItems">
    <button className='btn capitalize bg-transparent border-2 text-white font-bold  absolute top-1/2 left-40 z-[3] '>Discover our collections</button></Link>

   <div className="h-56 sm:h-64 2xl:min-h-[75vh] xl:min-h-[85vh] overflow-hidden">
    <Carousel>
     <img className="h-56 sm:h-64 xl:min-h-[120vh] 2xl:min-h-[90vh]" src={img3} alt="..." />
     <img className="h-56 sm:h-64 xl:min-h-[100vh] 2xl:min-h-[90vh] brightness-75" src={img4} alt="..." />


    </Carousel>
   </div>
  </div>
 );
}

export default Slider;
