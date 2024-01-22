import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';
import Booking from './Booking';

const Books = () => {
    const books = useLoaderData()
    const [modalBook, setModalBook] = useState(null)
    // console.log(books)
    return (

        <div className='grid place-content-center'>
            {books.length ?
                <div className='grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 gap-16  pt-5 '>

                    {
                        books.map(book => <Book book={book} modalBook={modalBook} setModalBook={setModalBook} key={book._id}></Book>)
                    }


                </div> :
                <p className='font-bold text-3xl mt-16'>No items in this Category!</p>

            }
        </div>

    );
};

export default Books;