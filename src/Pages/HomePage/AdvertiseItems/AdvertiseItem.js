import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseItem = ({ advertiseItem }) => {
    const { _id, name, img, resalePrice, originalPrice, location, post, author, summery, productQuantity } = advertiseItem
    // console.log(advertiseItem);
    return (

        <Link to={`/product/${_id}`}>

            <div className="card  bg-base-100 drop-shadow-md max-w-[260px] max-h-[513px] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                <figure className="">
                    <img src={img} alt="" className=" w-[258px] h-[230px] " />
                </figure>
                <div className="card-body items-center text-center">
                    <div>
                        <h2 className="card-title font-bold ">{`${name.slice(0, 19)}...`}</h2>
                        <small className='text-base text-gray-500'>{author}</small>
                    </div>
                    <p><span className='font-semibold'>Posted on:</span> {`${post.slice(0, 25)}..`}</p>
                    <p><span className='font-semibold'>Available:</span> {productQuantity} items</p>
                    <p><span className='font-semibold'>Location:</span> {location}</p>
                    <p className='font-bold text-gray-600'>{`$${resalePrice}`}</p>

                </div>
            </div>

        </Link>
    );
};

export default AdvertiseItem;