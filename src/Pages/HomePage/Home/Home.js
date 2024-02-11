import React from 'react';
import Categories from '../Categories/Categories';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import { useQuery } from '@tanstack/react-query';

import Slider from '../Carousel/Carousel';
import HomeBanner from '../HomeBanner/HomeBanner';
import Header from '../../Shared/Header/Header';


const Home = () => {
    const { data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: () => fetch('https://buy-sell-store-backend.vercel.app/productsAd')
            .then(res => res.json())
    })
    if (books.length <= 0) {
        return (
            <div>
                <div >
                    {/* carousel */}
                    <Header></Header>
                    <Slider ></Slider>
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
                {/* <HomeBanner></HomeBanner> */}
                <Header></Header>
                <Slider></Slider>
            </div>
            <div className='mx-14  space-y-4'>

                <Categories></Categories>
                <AdvertiseItems></AdvertiseItems>
                <AboutUs></AboutUs>

            </div>
        </div>
    );
};

export default Home;