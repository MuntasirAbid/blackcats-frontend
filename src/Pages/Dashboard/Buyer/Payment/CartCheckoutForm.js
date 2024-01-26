import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CartCheckoutForm = ({ cartInfo }) => {

 // const { price, book, img, buyerName, buyerEmail, location, sellerName, sellerEmail } = booking;


 const { buyerName, buyerEmail, location, phone, totalProductPrices, products } = cartInfo


 console.log(cartInfo)

 const [cardError, setCardError] = useState('');
 const [success, setSuccess] = useState('');
 const [processing, setProcessing] = useState(false);
 const [transactionId, setTransactionId] = useState('');
 const [clientSecret, setClientSecret] = useState("");

 const stripe = useStripe();
 const elements = useElements();

 // useEffect(() => {
 //  // Create PaymentIntent as soon as the page loads
 //  fetch("https://buy-sell-store-backend.vercel.app/create-payment-intent", {
 //   method: "POST",
 //   headers: {
 //    "Content-Type": "application/json",
 //    authorization: `bearer ${localStorage.getItem('bookToken')}`
 //   },
 //   body: JSON.stringify({ totalProductPrices }),
 //  })
 //   .then((res) => res.json())
 //   .then((data) => setClientSecret(data.clientSecret));
 // }, [totalProductPrices]);

 // const handleSubmit = async (e) => {
 //  e.preventDefault()



 //  if (!stripe || !elements) {

 //   return;
 //  }


 //  const card = elements.getElement(CardElement);

 //  if (card == null) {
 //   return;
 //  }


 //  const { error, paymentMethod } = await stripe.createPaymentMethod({
 //   type: 'card',
 //   card,
 //  });


 //  if (error) {
 //   console.log(error);
 //   setCardError(error.message);
 //  }
 //  else {
 //   setCardError('');
 //  }
 //  setSuccess('');
 //  setProcessing(true);
 //  const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
 //   clientSecret,
 //   {
 //    payment_method: {
 //     card: card,
 //     billing_details: {
 //      name: buyerName,
 //      email: buyerEmail
 //     },
 //    },
 //   },
 //  );


 //  if (confirmError) {
 //   setCardError(confirmError.message);
 //   return;
 //  }
 //  if (paymentIntent.status === "succeeded") {
 //   console.log('card info', card);
 //   // store payment info in the database
 //   const payment = {
 //    totalProductPrices,
 //    products,
 //    transactionId: paymentIntent.id,
 //    buyerEmail,


 //   }
 //   fetch('https://buy-sell-store-backend.vercel.app/payments', {
 //    method: 'POST',
 //    headers: {
 //     'content-type': 'application/json',
 //     authorization: `bearer ${localStorage.getItem('bookToken')}`
 //    },
 //    body: JSON.stringify(payment)
 //   })
 //    .then(res => res.json())
 //    .then(data => {
 //     console.log(data);
 //     if (data.insertedId) {
 //      setSuccess('Congrats! your payment completed');
 //      setTransactionId(paymentIntent.id);
 //      toast.success("Payment Successfull !")
 //     }
 //    })
 //  }

 //  setProcessing(false)

 // }
 return (
  <div className='mr-10 '>
   <form onSubmit={''}>

    <div className='flex gap-2'>
     <input className='shadow-lg border-none bg-gray-200 rounded-lg' type="text" name='name' placeholder="name" defaultValue={buyerName} disabled />
     <input className='shadow-lg border-none bg-gray-200 rounded-lg' type="text" name='email' placeholder="email" defaultValue={buyerEmail} disabled />
    </div>
    <CardElement className='shadow-xl p-10 rounded-md'
     options={{
      style: {
       base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
         color: '#aab7c4',
        },
       },
       invalid: {
        color: '#9e2146',
       },
      },
     }}
    />
    <button type="submit" className='btn my-7'
     disabled={!clientSecret || processing}>
     Pay
    </button>
   </form>

   <p className="text-red-500 font-semibold">{cardError}</p>
   {
    success && <div>
     <p className='text-green-500'>{success}</p>
     <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
    </div>
   }
  </div>
 );
};

export default CartCheckoutForm;