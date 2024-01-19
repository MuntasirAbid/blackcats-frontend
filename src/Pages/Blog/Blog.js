
import React from 'react';

const Blog = () => {

    return (
        <div className='mt-6 pb-56 w-5/6 mx-auto'>
            <div className='text-center'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">

                        <h2 className="text-center font-bold text-4xl text-purple-900 mb-6"> FAQs</h2>
                        <div className='grid grid-cols-1'>

                            <h2 className='text-lg font-bold'>1- Is the website compatible with mobile devices?</h2>
                            <p> Yes. Compatible</p>
                            <p className='text-lg font-bold mt-3'>2- How can I reach you?</p>
                            <p>-You can see our contact information by clicking on the blog section at the bottom of the home page.</p>
                            <h2 className='text-lg font-bold mt-3'>3- Can I shop without becoming a member of the site?</h2>
                            <p>No. You have to become a member.</p>
                            <p className='text-lg font-bold mt-3'>4- Who pays the shipping fee?</p>
                            <p>- Shipping fee belongs to the buyer.</p>
                            <p className='text-lg font-bold mt-3'>5- Can I be both a seller and a buyer?</p>
                            <p>- Yes. You can be both a seller and a buyer.</p>
                            <p className='text-lg font-bold mt-3'>6- Do I need separate membership accounts to sell and buy products?</p>
                            <p>- No. One membership account is enough.</p>
                            <p className='text-lg font-bold mt-3'>7- When will my order arrive?</p>
                            <p>- It will reach you within 3 days.</p>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;