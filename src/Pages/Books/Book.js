import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import Booking from './Booking';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Book = ({ book }) => {


    // console.log(book)
    const { name, _id, author, img, originalPrice, resalePrice, location, verify, post, sellerName, summery, yearOfUse, yearOfPurchase } = book

    return (


        <Link to={`/product/${_id}`}>

            <div className="card  my-10 bg-base-100 drop-shadow-md max-w-[232px] max-h-[513px] transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-95 duration-200 ">
                <figure className="">
                    <img src={img} alt="" className=" w-[230px] h-[230px] " />
                </figure>
                <div className="card-body items-center text-center">
                    <div>
                        <h2 className="card-title font-bold ">{`${name.slice(0, 19)}...`}</h2>
                        <small className='text-base text-gray-500'>{author}</small>
                    </div>
                    <p><span className='font-semibold'>Posted on:</span> {`${post.slice(0, 34)}..`}</p>
                    <p><span className='font-semibold'>Location:</span> {location}</p>
                    <p className='font-bold text-gray-600'>{`$${resalePrice}`}</p>

                </div>
            </div>

        </Link>

    );
};

export default Book;