import React from 'react';

import { GiBookshelf } from "react-icons/gi";
const AboutUs = () => {
    return (
        <div className='text-center my-36 shadow-lg rounded-xl md:p-20 p-5 w-full bg-purple-800 text-slate-700'>
            <div className='flex items-center justify-center'>

                <GiBookshelf className="w-32 h-32  text-white"></GiBookshelf>

                <h2 className='text-5xl ml-5 font-bold text-white'>About Us</h2>
            </div>
            <div className='lg:w-1/2 md:mx-auto px-4 py-6 md:text-justify'>
                <p className='text-xl font-medium text-white'>Welcome to our Black Cats Store. We provide our services of products exchanging throughout the country.You can sell your products and can buy of your own choice in a cheaper rate.Explore the site and stay with us !</p>
            </div>
        </div>
    );
};

export default AboutUs;