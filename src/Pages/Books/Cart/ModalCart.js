import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';


const ModalCart = ({ products, setCartModal, totalProductPrices }) => {

 const { user } = useContext(AuthContext)



 const { name, author, img, originalPrice, resalePrice, status, location, post, sellerName, summery, yearOfUse, yearOfPurchase, sellerEmail } = products

 const navigate = useNavigate()

 const handleSubmit = (e) => {
  e.preventDefault()

  const form = e.target;
  const location = form.place.value;
  const phone = form.phone.value;
  const buyerName = user.displayName;
  const buyerEmail = user.email
  const totalProductPrices = form.totalProductPrices.value

  navigate("/cartItemsPayments", {

   state: {
    cartInfo: {
     products, totalProductPrices, location, phone, buyerName, buyerEmail
    }
   }

  })
 }

 const handleCancel = () => {
  setCartModal(null)
 }


 return (
  <>
   {products && (
    <div >
     <input type="checkbox" id="products" className="modal-toggle" />
     <div className="modal">
      <div className="modal-box relative">
       <label htmlFor="products" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
       <h3 className="text-lg font-bold">Order your products</h3>
       <form onSubmit={handleSubmit}>

        <div className='flex gap-10'>

         <div className="form-control w-full max-w-xs">
          <label className="label">
           <span className="text-base">Price</span>
          </label>
          <input
           type="text"
           name="totalProductPrices"
           placeholder="Type here"
           disabled
           value={`$${totalProductPrices}`}
           className="input input-bordered w-full"
          />
         </div>

        </div>
        <div className='flex gap-10'>
         <div className="form-control w-full ">
          <label className="label">
           <span className="text-base">Name</span>
          </label>
          <input type="text" placeholder="Type here" disabled defaultValue={user?.displayName} className="input input-bordered w-full " />

         </div>
         <div className="form-control w-full ">
          <label className="label">
           <span className="text-base">Email</span>
          </label>
          <input type="text" placeholder="Type here" disabled defaultValue={user?.email} className="input input-bordered w-full " />

         </div>

        </div>
        <div className="flex gap-10">
         <div className="form-control w-full ">
          <label className="label">
           <span className="text-base">Phone Number</span>
          </label>
          <input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full" required />

         </div>
         <div className="form-control w-full ">
          <label className="label">
           <span className="text-base">Meeting Place</span>
          </label>
          <input type="text" name='place' placeholder="Type here" className="input input-bordered w-full" required />

         </div>
        </div>
        <div className='flex gap-5 justify-end'>
         <div className='flex justify-end my-2'>
          <button type="submit" className='btn bg-purple-300 text-black hover:bg-purple-400 border-none capitalize'>Buy</button>
         </div>
         <div className='flex justify-end my-2'>
          <button onClick={handleCancel} className='btn bg-purple-300 text-black hover:bg-red-500 border-none capitalize'>Cancel</button>
         </div>
        </div>
       </form>
      </div>
     </div>
    </div>
   )}
  </>
 );
}


export default ModalCart;