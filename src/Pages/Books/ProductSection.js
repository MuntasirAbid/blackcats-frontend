import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

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

 const { _id, name, status, summery, resalePrice, originalPrice, yearOfPurchase, yearOfUse, sellerEmail, sellerName, sellerPhone, img, location, genre, post } = productDetails

 return (
  <div className="card card-side bg-base-100 shadow-xl">
   <img src={img} alt="Movie" />
   <div className="card-body">
    <h2 className="card-title font-bold text-5xl">{name}</h2>
    <h3 className='font-bold'>About this item:-</h3>
    <h5 className='text-xl m-0'>{summery}</h5>

    <div className=''>

     <div className='flex'>
      <p>Seller Name: {sellerName}</p>
      <p>Seller Email: {sellerEmail}</p>
     </div>
     <div className='flex'>
      <p>Location: {location}</p>
      <p>Contact: {sellerPhone}</p>
     </div>
     <div className='flex'>
      <div>
       <p>Original Price : ${originalPrice}</p>
       <p>Reselling Price: ${resalePrice}</p>
      </div>
      <div>
       <p>Year of Purchase: {yearOfPurchase}</p>
       <p>Year of Use: {yearOfUse}</p>
      </div>
     </div>



    </div>

    <div className="card-actions justify-end">
     <label htmlFor="book" className="btn btn-primary " onClick={handleBuyNow}>Proceed to checkout</label>
    </div>
   </div>
  </div>


 );
};

export default ProductSection;