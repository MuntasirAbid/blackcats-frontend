import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { BsCart4 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import logo from '../../../assets/blackCat.jpeg'


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  // console.log(user)
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(er => console.error(er))
  }

  const [navbar, setNavbar] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setNavbar(false);

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItemCount(cartItems.length);
  }, [location.pathname])

  return (
    <nav className='w-full bg-black' >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {location.pathname.includes("dashboard") &&
              <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-white lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>}

            {/* logo */}

            <Link to="/">
              <div className='flex items-center'>
                <img src={logo} className="w-12 rounded-full" alt="" />
                <h2 className='text-2xl ml-2 font-bold font-serif text-white  hover:text-red-600'>BLACK CATS</h2>
              </div>
            </Link>

            {/* header */}

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white font-semibold text-lg hover:text-red-800">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white font-semibold text-lg hover:text-red-800">
                <Link to="/blog">FAQ</Link>
              </li>
              <li className="text-white font-semibold text-lg hover:text-red-800">
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li className="text-white font-semibold text-lg hover:text-red-800 flex hover:cursor-pointer">
                <div className='mt-4'>

                  <BsCart4 className='h-8 w-8' />
                </div>

                <div className='mb-4'>
                  {cartItemCount > 0 && (
                    <span className="bg-red-500 rounded-full text-white text-xs px-2 py-1 ml-1">
                      {cartItemCount}
                    </span>
                  )}
                  <div> Cart</div>
                </div>
              </li>

              {user?.uid ?

                <>
                  <li className='text-white font-semibold text-lg hover:text-red-800 flex '>
                    <div className='flex'>

                      <div className='mt-2 mr-1 '>
                        <FiUser className='h-8 w-8 ' />
                      </div>
                      <div className=''>
                        <p className='text-sm'>Hi {user.displayName}</p>
                        <details className="dropdown">

                          <summary className="text-sm hover:cursor-pointer">Account</summary>
                          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
                            <div className='flex'>
                              <p>Welcome back, {user.displayName}</p>
                              <button ><img className='rounded-full w-16' src={user?.photoURL ? user?.photoURL : <FaUserCircle></FaUserCircle>} alt="" /></button>
                            </div>
                            <li className='text-black'><Link onClick={handleLogOut}>Log Out</Link></li>
                          </ul>
                        </details>
                      </div>

                    </div>

                  </li>

                  <li className="text-white font-semibold text-lg hover:text-red-800">
                    <Link to='/dashboard' >Dashboard</Link>
                  </li>
                  <li className="text-white font-semibold text-lg hover:text-red-800">
                    <Link >
                      <div className="tooltip tooltip-bottom" data-tip={user?.displayName ? user?.displayName : "User"}>
                        <button ><img className='rounded-full w-10' src={user?.photoURL ? user?.photoURL : <FaUserCircle></FaUserCircle>} alt="" /></button>
                      </div>
                    </Link>
                  </li>
                </>
                :
                <>
                  <li className='text-white font-semibold text-lg hover:text-red-800 flex '>
                    <div className='flex'>

                      <div className='mt-2 mr-1 '>
                        <FiUser className='h-8 w-8 ' />
                      </div>
                      <div className=''>
                        <p className='text-sm'>Welcome</p>
                        <details className="dropdown">

                          <summary className="text-sm hover:cursor-pointer">Sign in/Register</summary>
                          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li className='text-black'><Link to="/login">Sign in</Link></li>
                            <li className='text-black'><Link to="/register">Register</Link></li>
                          </ul>
                        </details>
                      </div>

                    </div>

                  </li>

                </>

              }

            </ul>
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Header;