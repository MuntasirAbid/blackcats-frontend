import React from 'react';
import bookPeople from '../../../assets/homeBanner.jpg';
const HomeBanner = () => {
    return (
        <div  >
            <img className='rounded-2xl' src={bookPeople} alt="" />
        </div>
    );
};

export default HomeBanner;