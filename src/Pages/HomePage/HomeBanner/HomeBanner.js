import React from 'react';
import banner from '../../../assets/homeBanner.jpeg';
const HomeBanner = () => {
    return (
        <div className=''>
            <img className='rounded-md pb-10 w-full h-[80vh]' src={banner} alt="" />
        </div>
    );
};

export default HomeBanner;