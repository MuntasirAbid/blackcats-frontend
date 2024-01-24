import React from 'react';
import Categories from '../Categories/Categories';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import { useQuery } from '@tanstack/react-query';

import Slider from '../Carousel/Carousel';


const Home = () => {
    const { data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: () => fetch('http://localhost:10000/productsAd')
            .then(res => res.json())
    })
    if (books.length <= 0) {
        return (
            <div>
                <div className=''>
                    {/* carousel */}
                    <Slider></Slider>
                </div>
                <div className='mx-14  space-y-10'>

                    <Categories></Categories>
                    <AdvertiseItems></AdvertiseItems>
                    <AboutUs></AboutUs>

                </div>
            </div>
        )
    }
    return (
        <div>
            <div className=''>
                {/* carousel */}
                <Slider></Slider>
            </div>
            <div className='mx-14  space-y-10'>

                <Categories></Categories>
                <AdvertiseItems></AdvertiseItems>
                <AboutUs></AboutUs>

            </div>
        </div>
    );
};

export default Home;