import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductSection from './ProductSection';

const ProductDetails = () => {

 const productDetails = useLoaderData();
 const { _id } = productDetails;
 console.log(productDetails);

 return (
  <div>
   <ProductSection productDetails={productDetails}></ProductSection>
  </div>
 );
};

export default ProductDetails;