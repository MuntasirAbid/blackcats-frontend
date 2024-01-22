import React from 'react';
import { Link } from 'react-router-dom';
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-5 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">

                <li className="text-white  font-semibold text-xl hover:text-purple-600">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-white font-semibold text-xl  hover:text-purple-600">
                    <Link to="/blog">FAQ</Link>
                </li>

            </div>
            <div>
                <div className="grid grid-flow-col gap-4">

                    <a target='_blank' rel="noreferrer" href='https://pin.it/733Z3Zw'>
                        <FaPinterest className='h-8 w-8 text-purple-500 hover:text-purple-600 cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-200'></FaPinterest></a>
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/blackcats_thestore/?igsh=aTY0MGR4Zzh0ZnR5'>
                        <FaInstagram className='h-8 w-8 text-purple-500 hover:text-purple-600 cursor-pointer transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-200'></FaInstagram>
                    </a>

                </div>
            </div>
            <div>
                <p className='text-purple-400'>Copyright © 2023 - All right reserved by BlackCats Team</p>
            </div>
        </footer>
    );
};

export default Footer;