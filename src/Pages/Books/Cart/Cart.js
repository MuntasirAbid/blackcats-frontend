import React, { useEffect, useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoReturnDownForward } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";


const Cart = () => {
 // State to store the cart items
 const [cartItems, setCartItems] = useState([]);

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
 console.log(cartItems);
 return (
  <div >

   {cartItems.length > 0 ?
    <div className=' text-center py-8 font-bold text-xl bg-gray-100 rounded-lg shadow-md'>
     <h1>Shopping Cart({cartItems.length})</h1>
    </div> : <div className=' flex justify-center py-8 font-bold '>Your cart is empty, Back to <IoReturnDownForward className='mt-1 mx-2 text-2xl' />  <Link to="/advertiseItems"><span className='text-green-600 font-serif btn glass hover:bg-green-500 hover:text-black normal-case text-xl flex  '> <RiShoppingBag3Fill className='text-2xl' />Shopping</span></Link></div>}
   {cartItems.length > 0 && (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-content-center my-4 mx-8 '>

     <div>
      {cartItems?.length > 0 && cartItems.map((item, index) => (
       <div className="card card-side bg-base-100 shadow-xl my-2">
        <figure className='w-32 h-32'><img src={item.img} alt='' /></figure>
        <div className="card-body">
         <h2 className="card-title">{`${item.name.slice(0, 60)}...`}</h2>
         <p>Price: {item.resalePrice}$</p>

         <div className='flex justify-between relative'>

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
      <div className="card bg-white-700 shadow-lg text-black">
       <div className="card-body items-center text-center">
        <h2 className="card-title">Order Summery</h2>
        <p>Selected Items: {cartItems.length}</p>
        <p >Total Price: <span className='font-bold'> ${total} </span></p>

        <div className="card-actions justify-end">
         <button className="btn btn-primary capitalize btn-sm">Proceed to checkout</button>
        </div>
       </div>
      </div>
     </div>
    </div>
   )}
  </div>
 );
};

export default Cart;
