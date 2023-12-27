import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {

 let pages = [];

 for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  pages.push(i)
 }

 return (
  <div >
   {
    pages.map((page, index) => {
     return <button className='p-1' key={index} onClick={() => setCurrentPage(page)}>{page + 1}</button>
    })
   }
  </div>
 );
};

export default Pagination;