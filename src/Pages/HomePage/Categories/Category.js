import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
    // console.log(category)
    return (
        <Link to={`/categories/${category.genre}`}>
            <div className="card h-72 shadow-md image-full transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-200 ... ">
                <figure><img src={category.img} className='w-full ' alt="" /></figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title mt-24 text-4xl ">{category.genre}</h2>

                    <div className="card-actions justify-end">
                        <button className="flex items-center text-xl hover:text-green-400">See Collections <FaArrowRight className=' ml-3'></FaArrowRight></button>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default Category;