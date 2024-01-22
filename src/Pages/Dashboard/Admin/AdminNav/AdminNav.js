import React from 'react';
import { FaHandHoldingUsd, FaHandHoldingHeart } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <div>
            <ul className="">
                <li className=" font-semibold text-lg hover:text-purple-700 ">
                    <Link to="/dashboard/all-seller"><FaHandHoldingUsd></FaHandHoldingUsd>All Sellers</Link>
                </li>
                <li className=" font-semibold text-lg hover:text-purple-700">
                    <Link to="/dashboard/all-buyer"><FaHandHoldingHeart></FaHandHoldingHeart>All Buyers</Link>
                </li>

            </ul>
        </div>
    );
};

export default AdminNav;