import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseItem = ({ advertiseItem }) => {
    const { _id, name, img, resalePrice, originalPrice, location, post, author, summery } = advertiseItem
    console.log(advertiseItem);
    return (

        <Link to={`/product/${_id}`}>

            <div className="card  bg-base-100 drop-shadow-md max-w-[489px] max-h-[713px]">
                <figure className="">
                    <img src={img} alt="" className=" w-[389px] h-[389px] " />
                </figure>
                <div className="card-body items-center text-center">
                    <div>
                        <h2 className="card-title font-bold ">{`${name.slice(0, 19)}...`}</h2>
                        <small className='text-base text-gray-500'>{author}</small>
                    </div>
                    <p>Posted on: {`${post.slice(0, 34)}..`}</p>
                    <p>Location: {location}</p>
                    <p className='font-bold text-gray-600'>{`$${resalePrice}`}</p>

                </div>
            </div>

        </Link>
    );
};

export default AdvertiseItem;