import React, { useContext, useEffect, useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoReturnDownForward } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { AuthContext } from '../../../Contexts/AuthProvider';
import ModalCart from './ModalCart';


const Cart = () => {
 // State to store the cart items
 const [cartItems, setCartItems] = useState([]);
 const [cartModal, setCartModal] = useState(null)


 const { user } = useContext(AuthContext)
 const navigate = useNavigate()
 const locations = useLocation()

 useEffect(() => {
  // Fetch cart items from localStorage
  const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
  setCartItems(storedCartItems);
 }, []); // Empty dependency array to run the effect only once on component mount

 //delete specific item
 const handleDeleteItem = (index) => {
  const updatedCartItems = [...cartItems];
  updatedCartItems.splice(index, 1);
  setCartItems(updatedCartItems);
  updateLocalStorage(updatedCartItems);
 }

 //increment quantity
 const handleIncrement = (index) => {
  const updatedCartItems = [...cartItems];
  updatedCartItems[index].quantity += 1;
  setCartItems(updatedCartItems);
  updateLocalStorage(updatedCartItems);
 };

 //decrement quantity
 const handleDecrement = (index) => {
  const updatedCartItems = [...cartItems];
  if (updatedCartItems[index].quantity > 1) {
   updatedCartItems[index].quantity -= 1;
   setCartItems(updatedCartItems);
   updateLocalStorage(updatedCartItems);
  }
 };

 const updateLocalStorage = (items) => {
  localStorage.setItem('cart', JSON.stringify(items));
 };

 let total = 0;
 let subTotal = 0;

 for (const product of cartItems) {

  subTotal += parseFloat(product.resalePrice) * product.quantity;
 }

 total = subTotal;


 const handleProcessToCheckout = () => {

  if (user) {

   setCartModal({ products: cartItems, total });
  } else {

   navigate('/login', { state: { from: locations } });
  }
 }
 return (
  <div >


   {cartItems.length > 0 ?
    <div className=' text-center py-8 font-bold text-xl bg-gray-100 rounded-lg shadow-md'>
     <h1>Shopping Cart({cartItems.length})</h1>
    </div> : <div className=' flex justify-center  py-8 font-bold text-xl text-white '>Your cart is empty, Back to <IoReturnDownForward className='mt-1 mx-2 text-2xl' />  <Link to="/advertiseItems"><span className=' font-serif btn  normal-case text-xl flex  bg-gradient-to-r from-green-500 via-green-600 to-green-500 hover:from-green-600 hover:via-green-700 hover:to-green-600'> <RiShoppingBag3Fill className='text-2xl' />Shopping</span></Link></div>}
   {cartItems.length > 0 && (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-content-center my-4 mx-8 '>

     <div>
      {cartItems?.length > 0 && cartItems.map((item, index) => (
       <div key={index} className="card card-side bg-gray-300 shadow-xl my-2">
        <figure className='w-32 h-32'><img src={item.img} alt='' /></figure>
        <div className="card-body">
         <h2 className="card-title">{`${item.name.slice(0, 60)}...`}</h2>
         <p>Price: {item.resalePrice}$</p>

         <div className='flex justify-between relative '>

          <div>
           <p className='flex'>Quantity:  <CiCircleMinus className='ml-2 w-6 h-6  rounded-xl hover:text-red-900 hover:cursor-pointer' onClick={() => handleDecrement(index)} /> <span className='px-2 font-semibold'>{item.quantity}</span> <CiCirclePlus className='w-6 h-6 hover:text-red-900 hover:cursor-pointer' onClick={() => handleIncrement(index)}
           /></p>

          </div>

          <div className="absolute bottom-7 right-11">
           <MdDeleteForever className="w-9 h-9 hover:cursor-pointer hover:text-red-600" onClick={() => handleDeleteItem(index)} />

          </div>

         </div>
        </div>
       </div>
      ))}
     </div>

     <div className=''>
      <div className="card shadow-lg text-black">
       <div className="card-body items-center text-center bg-gray-300 rounded-xl mt-2">
        <h2 className="card-title">Order Summery</h2>
        <p>Selected Items: {cartItems.length}</p>
        <p >Total Price: <span className='font-bold'> ${total} </span></p>

        <div className="card-actions justify-end">
         <label htmlFor="products" className="btn btn-sm capitalize border-none text-white bg-gradient-to-r from-green-500 via-green-600 to-green-500 hover:from-green-600 hover:via-green-700 hover:to-green-600 focus:from-gray-200 focus:via-gray-400 focus:to-gray-200 hover:text-white" onClick={handleProcessToCheckout} >Proceed to checkout</label>

        </div>
       </div>
      </div>
     </div>
     {
      cartModal &&
      <ModalCart
       products={cartModal} setCartModal={setCartModal} totalProductPrices={total}
      ></ModalCart>
     }

    </div>


   )}
  </div>
 );
};

export default Cart;
