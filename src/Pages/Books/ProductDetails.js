import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductSection from './ProductSection';
import Booking from './Booking';


const ProductDetails = () => {

 const productDetails = useLoaderData();
 const [modalBook, setModalBook] = useState(null);

 return (
  <div>
   <ProductSection productDetails={productDetails} setModalBook={setModalBook} />

   {
    modalBook &&
    <Booking book={modalBook} setModalBook={setModalBook}></Booking>
   }
  </div>
 );
};

export default ProductDetails;