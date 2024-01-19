import React, { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const ProductSection = ({ productDetails, setModalBook }) => {

 const { user } = useContext(AuthContext)
 const navigate = useNavigate()
 const locations = useLocation()


 const handleBuyNow = () => {

  if (user) {

   setModalBook(productDetails);
  } else {

   navigate('/login', { state: { from: locations } });
  }
 };

 const handleAddToCart = () => {
  // cont [quantity, setQuantity] =useState()
  const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const productId = productDetails._id;

  const existingProductIndex = existingCartItems.findIndex(item => item._id === productId)

  if (existingProductIndex !== -1) {

   // Product with the same id found, increment the quantity
   existingCartItems[existingProductIndex].quantity += 1;
   delete existingCartItems[existingProductIndex].productQuantity;
  } else {
   const newItem = { ...productDetails, quantity: 1 };
   delete newItem.productQuantity;
   delete newItem.location;
   // Product not found, add a new item with quantity 1
   existingCartItems.push(newItem);

  }

  localStorage.setItem('cart', JSON.stringify(existingCartItems));

  toast.success('Product added to Cart');

  window.location.reload()

  console.log(existingCartItems);

 };



 const { name, status, summery, resalePrice, originalPrice, yearOfPurchase, yearOfUse, sellerEmail, sellerName, sellerPhone, img, location, genre, post } = productDetails


 return (
  <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   ">
   <>

    <img src={img} alt="Movie" className='' />
   </>
   <div className="card-body">
    <h2 className="card-title font-bold text-5xl">{name}</h2>
    <h3 className='font-bold'>About this item:-</h3>
    <h5 className='text-xl m-0'>{summery}</h5>

    <div className='grid grid-cols-2 gap-5 my-3'>

     <div>
      <p><span className='font-semibold'>Seller Name:</span> {sellerName}</p>
      <p><span className='font-semibold'>Location:</span> {location}</p>
      <p><span className='font-semibold'>Original Price :</span> <span className='text-yellow-500'>$</span>{originalPrice}</p>
      <p><span className='font-semibold'>Reselling Price: </span> <span className='text-yellow-500'>$</span>{resalePrice}</p>
     </div>

     <div>
      <p><span className='font-semibold'>Seller Email:</span> {sellerEmail}</p>
      <p><span className='font-semibold'>Contact:</span> {sellerPhone}</p>
      <p><span className='font-semibold'>Year of Purchase: </span>{yearOfPurchase}</p>
      <p><span className='font-semibold'>Year of Used:</span> {yearOfUse}</p>
     </div>

    </div>

    <div className="card-actions justify-end">
     <label htmlFor="book" className="btn bg-purple-300  text-black hover:bg-purple-400 border-none capitalize" onClick={handleBuyNow}>Proceed to checkout</label>
     <label htmlFor="book" className="btn bg-purple-300 text-black hover:bg-purple-400 border-none capitalize" onClick={handleAddToCart} >Add to Cart</label>
    </div>
   </div>
  </div>


 );
};

export default ProductSection;