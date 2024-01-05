import React, { useEffect, useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

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
  <div className='flex '>
   <h1>Your Cart</h1>
   <div>
    {cartItems?.length && cartItems.map((item, index) => (
     <div className="card card-side bg-base-100 shadow-xl my-4">
      <figure className='w-32 h-32'><img src={item.img} alt='' /></figure>
      <div className="card-body">
       <h2 className="card-title">{item.name}</h2>
       <p>Price: {item.resalePrice}$</p>
       <p className='flex'>Quantity:  <CiCircleMinus className='ml-2 w-6 h-6  rounded-xl hover:text-red-900 hover:cursor-pointer' onClick={() => handleDecrement(index)} /> <span className='px-2 font-semibold'>{item.quantity}</span> <CiCirclePlus className='w-6 h-6 hover:text-red-900 hover:cursor-pointer' onClick={() => handleIncrement(index)} /></p>
       <div className="card-actions justify-end">
        {/* <button className="btn btn-primary" onClick={() => handleDecrement(index)}>Decrement</button> */}
        {/* <button className="btn btn-primary" >Increment</button> */}
        <button className="btn btn-primary" onClick={() => handleDeleteItem(index)}>Delete</button>
       </div>
      </div>
     </div>
    ))}
   </div>

   <div>
    <div className="card w-96 bg-neutral text-neutral-content">
     <div className="card-body items-center text-center">
      <h2 className="card-title">Order Summery</h2>
      <p>Selected Items: {cartItems.length}</p>
      <p>Total Price: ${total}</p>
      <div className="card-actions justify-end">
       <button className="btn btn-primary">Accept</button>
       <button className="btn btn-ghost">Deny</button>
      </div>
     </div>
    </div>
   </div>

  </div>
 );
};

export default Cart;
