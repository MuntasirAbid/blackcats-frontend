


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useLocation, useNavigation } from 'react-router-dom';
import BigLoading from '../../../../Components/Loading/BigLoading'

import CartCheckoutForm from './CartCheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const PaymentCartItems = () => {

 const locations = useLocation()

 const { cartInfo } = locations.state || {}

 const { products, totalProductPrices } = cartInfo || {};

 return (
  <div className='text-center pt-16 p-2 bg-gray-300'>
   <h3 className="text-3xl">Payment for {products.products.length} products</h3>
   <p className="text-xl">Please pay <strong>{totalProductPrices}</strong> for your product</p>
   <div className='w-96 my-12 mx-auto'>
    <Elements stripe={stripePromise}>
     <CartCheckoutForm
      cartInfo={cartInfo}
     >
     </CartCheckoutForm>
    </Elements>
   </div>
  </div>
 );
};

export default PaymentCartItems;