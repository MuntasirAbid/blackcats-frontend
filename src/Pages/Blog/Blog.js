
import React from 'react';

const Blog = () => {

    return (
        <div className='py-24 pb-56 w-5/6 mx-auto'>
            <div className='text-center'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">

                        <h2 className="text-center font-bold text-xl "> Frequently Asked Questions</h2>
                        <div className='grid grid-cols-1'>

                            <details className="dropdown">
                                <summary className="m-1 btn">1- Is the website compatible with mobile devices?</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <p>Yes. Compatible</p>

                                </ul>
                            </details>
                            <details className="dropdown">
                                <summary className="m-1 btn">2- How can I reach you?</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <p>- You can see our contact information by clicking on the blog section at the bottom of the home page.</p>

                                </ul>
                            </details>
                            <details className="dropdown">
                                <summary className="m-1 btn">3- Can I shop without becoming a member of the site?</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <p>- No. You have to become a member.</p>

                                </ul>
                            </details>


                            <p></p>
                            <p> </p>
                            <p></p>
                            <p></p>
                            <p>4- Who pays the shipping fee?</p>
                            <p>- Shipping fee belongs to the buyer.</p>
                            <p>5- Can I be both a seller and a buyer?</p>
                            <p>- Yes. You can be both a seller and a buyer.</p>
                            <p>6- Do I need separate membership accounts to sell and buy products?</p>
                            <p>- No. One membership account is enough.</p>
                            <p>7- When will my order arrive?</p>
                            <p>- It will reach you within 3 days.</p>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;