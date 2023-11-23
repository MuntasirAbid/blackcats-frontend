import React from 'react';
import banner from '../../../assets/homeBanner.jpeg';
const HomeBanner = () => {
    return (
        <div  >
            <img className='m-auto h-1/2 rounded-md' src={banner} alt="" />
        </div>
    );
};

export default HomeBanner;