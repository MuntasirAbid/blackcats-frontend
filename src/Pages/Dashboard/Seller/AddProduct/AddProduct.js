import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:10000/bookGenre')
            .then(res => res.json())
    })
    const [quantity, setQuantity] = useState('');
    const [yearOfPurchase, setYearOfPurchase] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [yearOfPurchaseError, setYearOfPurchaseError] = useState('');
    const [yearOfUse, setYearOfUse] = useState('');
    const [yearOfUseError, setYearOfUseError] = useState('');
    const [formValid, setFormValid] = useState(true);


    const handleQuantityChange = (event) => {
        const inputValue = event.target.value;
        setQuantity(inputValue);

        // Check if the input is a negative number
        if (inputValue <= 0) {
            setQuantityError('Quantity cannot be less then 1');
            setFormValid(false)
        } else {
            setQuantityError('');
            setFormValid(true)
        }
    };

    const handleYearOfPurchaseChange = (event) => {
        const inputValue = event.target.value;
        setYearOfPurchase(inputValue);

        // Check if the input is a negative number
        if (inputValue <= 0) {
            setYearOfPurchaseError('Year of purchase should be a positive number');
            setFormValid(false)
        } else {
            setYearOfPurchaseError('');
            setFormValid(true)
        }
    };

    const handleYearOfUseChange = (event) => {
        const inputValue = event.target.value;
        setYearOfUse(inputValue);

        // Check if the input is a negative number
        if (inputValue < 0) {
            setYearOfUseError('Year of use cannot be a negative number');
            setFormValid(false)
        } else {
            setYearOfUseError('');
            setFormValid(true)
        }
    };




    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.product.value;
        const summery = form.des.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const yearOfUse = form.yearOfUse.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const sellerName = user?.displayName;
        const sellerEmail = user.email;
        const condition = form.condition.vale;
        const location = form.place.value;
        const sellerPhone = form.phone.value;
        const productQuantity = form.quantity.value;
        const genre = form.genre.value;
        const image = form.photo.files[0]
        const status = "Available"

        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG}`
        console.log(process.env.REACT_APP_IMG)
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const img = data?.data?.display_url;
                const product = { name, status, summery, resalePrice, originalPrice, yearOfPurchase, yearOfUse, sellerEmail, sellerName, sellerPhone, productQuantity, img, condition, location, genre }
                fetch('http://localhost:10000/products', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem("bookToken")}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success("Added Successfully! Please press the Advertise button to show the product in our Collections")
                            navigate('/dashboard/myproduct')
                        }
                    })
            })

    }

    // console.log(process.env.REACT_APP_IMG)
    return (
        <div>

            <h2 className='text-4xl font-semibold my-10 text-center'>Add A Product</h2>
            <form onSubmit={handleSubmit} className='md:w-1/2 mx-auto my-10 px-5 md:p-10 rounded-3xl shadow-md'>
                <div className=''>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-base">Product Name</span>
                        </label>
                        <input type="text" name='product' placeholder="Type here" className="input input-bordered w-full " required />

                    </div>

                </div>
                <div className="flex gap-28">
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="text-base">Original Price</span>
                        </label>
                        <input type="number" name='originalPrice' placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="text-base">Resale Price</span>
                        </label>
                        <input type="number" name='resalePrice' placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="text-base">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='des' required placeholder="Description"></textarea>

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="text-base">Product's Photo</span>
                    </label>
                    <input type="file" name="photo" className="file-input file-input-bordered w-full max-w-xs" required />
                </div>

                <div className='flex gap-28'>
                    <div>
                        <label className="label">
                            <span className="text-base">Category</span>
                        </label>
                        <select name='genre' className="select select-bordered w-full" required>
                            {
                                categories.map(c => <option value={c.genre} key={c._id}>{c.genre}</option>)

                            }
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base">Condition</span>
                        </label>
                        <select name='condition' className="select select-bordered w-full max-w-xs" required>
                            <option value='Excellent'>Excellent</option>
                            <option value='Good'>Good</option>
                            <option value='Fair'>Fair</option>
                        </select>
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
                            <span className="text-base">location</span>
                        </label>
                        <input type="text" name='place' placeholder="Type here" className="input input-bordered w-full" required />

                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-base">Year of Purchase</span>
                        </label>
                        <input
                            type="number"
                            name="yearOfPurchase"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                            value={yearOfPurchase}
                            onChange={handleYearOfPurchaseChange}
                            required
                        />
                        {yearOfPurchaseError && (
                            <p className="text-red-500">{yearOfPurchaseError}</p>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-base">Year of Used</span>
                        </label>
                        <input
                            type="number"
                            name="yearOfUse"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                            value={yearOfUse}
                            onChange={handleYearOfUseChange}
                            required
                        />
                        {yearOfUseError && <p className="text-red-500">{yearOfUseError}</p>}
                    </div>
                </div>


                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="text-base">Please input the quantity</span>
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        value={quantity}
                        onChange={handleQuantityChange}
                        required
                    />
                    {quantityError && <p className="text-red-500">{quantityError}</p>}
                </div>


                <div className='flex justify-center  my-10'>
                    <button type="submit" disabled={!formValid} className='btn px-24 '>Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;