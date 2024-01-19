
import React, { useEffect, useRef, useState } from 'react';
import AdvertiseItem from './AdvertiseItem';

const AdvertiseItems = () => {

    const [advertiseItems, setAdvertiseItems] = useState([])
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);
    const [search, setSearch] = useState('')
    const searchRef = useRef();

    // const collectionRef = useRef(null);

    useEffect(() => {
        const url = `https://buy-sell-store-backend.vercel.app/advertiseProducts?search=${search}&page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setAdvertiseItems(data.advertiseItems);


            })
    }, [page, size, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    const pages = Math.ceil(count / size);

    if (advertiseItems) {

        return (
            <div>
                <h2 className='  text-purple-300 text-4xl font-semibold text-center my-16'>Our Collections</h2>
                <div className='grid place-items-center mb-20'>

                    <input className='input input-bordered input-sm' onChange={handleSearch} ref={searchRef} type="text" placeholder='Search here' />
                </div>

                <div className='grid place-items-center  grid-cols-1  lg:grid-cols-4 md:grid-cols-3 gap-16'>
                    {
                        advertiseItems.map(advertiseItem => <AdvertiseItem key={advertiseItem._id} advertiseItem={advertiseItem}></AdvertiseItem>)
                    }
                </div>


                <div className="mx-auto mt-16 text-center">

                    {
                        [...Array(pages).keys()].map(number => <button
                            key={number}
                            className={page === number ? 'mx-3 p-2 rounded-md bg-purple-300 text-black' : 'text-white hover:bg-slate-500 mx-3 p-2 rounded-md'}
                            onClick={() => setPage(number)}
                        > {number + 1}
                        </button>)
                    }
                    <select className='join-item btn ml-5' onChange={event => setSize(event.target.value)}>
                        <option value="5">5</option>
                        <option value="8" selected>8</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

            </div>
        );
    }
};

export default AdvertiseItems;