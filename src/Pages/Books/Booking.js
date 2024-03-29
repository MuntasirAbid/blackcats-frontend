import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';


const Booking = ({ book, setModalBook }) => {
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const { name, author, img, originalPrice, resalePrice, status, location, post, sellerName, summery, yearOfUse, yearOfPurchase, sellerEmail } = book

    const [quantity, setQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState(resalePrice);
    const [quantityError, setQuantityError] = useState()
    const [formValid, setFormValid] = useState(true)

    const handleQuantityChange = (event) => {
        const newQuantity = event.target.value;
        setQuantity(newQuantity);

        if (newQuantity <= 0) {
            setQuantityError("Quantity cannot be less then 1")
            setFormValid(false)
        } else {
            setTotalPrice(newQuantity * resalePrice);
            setQuantityError('');
            setFormValid(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const location = form.place.value;
        const phone = form.phone.value;
        const quantity = form.quantity.value;
        const buyerName = user.displayName;


        const booking = { location, sellerName, phone, quantity, img, status, sellerEmail, buyerName, buyerEmail: user.email, book: name, price: totalPrice }


        fetch("https://buy-sell-store-backend.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("bookToken")}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setModalBook(null)
                toast.success("Booking Successful! Please go to your order to pay for the product")
                navigate("/dashboard")
            })
        console.log(booking);
    }

    const handleCancel = () => {
        setModalBook(null)
    }
    return (
        <>
            {book && (
                <div >
                    <input type="checkbox" id="book" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            {/* <label htmlFor="book" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                            <h3 className="text-lg font-bold">Order "{name}" Now !</h3>
                            <form onSubmit={handleSubmit}>
                                <div className='flex gap-10'>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-base">Product Name</span>
                                        </label>
                                        <input type="text" placeholder="Type here" disabled defaultValue={book.name} className="input input-bordered w-full " />

                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-base">Price</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            disabled
                                            value={totalPrice}
                                            className="input input-bordered w-full"
                                        />
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-base">Quantity</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            placeholder="Type here"
                                            className="input input-bordered w-full"
                                            value={quantity}
                                            required
                                            onChange={handleQuantityChange}
                                        />
                                        {quantityError && (
                                            <p className="text-red-500">{quantityError}</p>
                                        )}

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
                                        <button type="submit" disabled={!formValid} className='btn bg-green-500 text-black hover:bg-green-600 border-none capitalize'>Buy</button>
                                    </div>
                                    <div className='flex justify-end my-2'>
                                        <button onClick={handleCancel} className='btn bg-green-500 text-black hover:bg-red-500 border-none capitalize'>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Booking;