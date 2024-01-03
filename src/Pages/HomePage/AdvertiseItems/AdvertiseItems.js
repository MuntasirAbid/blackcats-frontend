import { useQuery } from '@tanstack/react-query';
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
        const url = `http://localhost:10000/advertiseProducts?search=${search}&page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setAdvertiseItems(data.advertiseItems);

                // collectionRef.current.scrollIntoView({
                //     behavior: 'smooth',
                //     block: 'start',
                // });
            })
    }, [page, size, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    const pages = Math.ceil(count / size);

    if (advertiseItems) {

        return (
            <div>
                <h2 className=' text-primary text-4xl font-semibold text-center my-16'>Ours Collection</h2>
                <div className='grid place-items-center mb-5'>

                    <input className='input input-bordered input-sm' onChange={handleSearch} ref={searchRef} type="text" placeholder='Search here' />
                </div>

                <div className='grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 gap-16'>
                    {
                        advertiseItems.map(advertiseItem => <AdvertiseItem key={advertiseItem._id} advertiseItem={advertiseItem}></AdvertiseItem>)
                    }
                </div>


                <div className="mx-auto">
                    <p className='my-8'>Currently selected page: {page + 1} and size: {size} </p>
                    {
                        [...Array(pages).keys()].map(number => <button
                            key={number}
                            className={page === number ? 'mx-3 p-2 rounded-md bg-gray-500' : 'mx-3'}
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