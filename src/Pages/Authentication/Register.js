import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import useToken from '../../Hooks/useToken';
import toast from 'react-hot-toast';
import SmallSpinner from '../../Components/Loading/SmallLoading';
import PrimaryButton from '../../Components/button/ButtonPrimary';

const Register = () => {
    const { user, createUser, updateUser, loading, setLoading, googleLogin } = useContext(AuthContext)
    const [saveAs, setSaveAs] = useState('Buyer')
    const [createEmail, setCreateEmail] = useState('')
    const [token] = useToken(createEmail)


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    if (token) {
        navigate('/')
    }
    // handle submit

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photof = form.photo.files[0];
        const password = form.password.value;
        const role = form.role.value;
        console.log(name, email, photof, password, role)

        const formData = new FormData()
        formData.append('image', photof)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG}`

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const photo = data.data.display_url;

                // create user

                createUser(email, password)
                    .then(res => {
                        const user = res.user;
                        console.log(user)
                        setSaveAs('Buyer')
                        // update user
                        const profile = {
                            displayName: name,
                            photoURL: photo
                        }
                        updateUser(profile)
                            .then(() => {
                                toast.success('Welcome to Black Cats! Enjoy shopping')
                                saveUser(name, email, photo, role)
                                setLoading(false)
                                navigate(from, { replace: true })
                            })
                            .catch(er => console.error(er))

                    })
                    .catch(er => {
                        toast.error(er.message)
                        console.log(er)
                        setLoading(false)
                    })


            })
            .catch(er => console.error(er))
    }

    // google login

    const handleGoogleUser = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                // saveUser
                saveUser(user.displayName, user.email, user.photoURL, saveAs)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(er => console.error(er))
    }




    const saveUser = (name, email, photo, role) => {
        const user = { name, email, photo, role }
        fetch("https://buy-sell-store-backend.vercel.app/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("bookToken")}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreateEmail(email)
            })
    }

    return (
        <div className='lg:w-1/2 mx-auto'>

            <div className='lg:my-auto lg:p-12 p-10 md:p-20 '>
                <h2 className='text-center text-3xl md:text-4xl font-bold pb-10 text-purple-300 '>Register!</h2>
                <form onSubmit={handleSubmit} className='bg-gray-300 shadow-lg rounded-2xl p-4 lg:p-16 md:p-16'>

                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-purple-400 font-bold">Your Full Name</label>
                        <input type="text" name="name" className="input border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-purple-300 w-full text-sm" placeholder="Name" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2  font-medium text-purple-400">Your E-mail</label>
                        <input type="email" name="email" className="input border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-purple-300 w-full text-sm" placeholder="E-mail" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="photo" className="block mb-2  font-medium text-purple-400">Your PhotoURL</label>
                        <input type="file" name="photo" className="file-input file-input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2  font-medium text-purple-400">Your password</label>
                        <input type="password" name="password" className="input border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-purple-300 w-full text-sm" placeholder="Password" required />
                    </div>

                    <select name='role' className="select select-bordered w-full max-w-xs mb-6 text-white bg-stone-500">

                        <option onClick={(e) => setSaveAs(e.value)}>Buyer</option>
                        <option onClick={(e) => { setSaveAs(e.value) }}>Seller</option>
                    </select>
                    <div className='flex gap-3 my-5'>
                        <input type="radio" name="radio-1" className="radio" />
                        <p>Accept rules</p>
                    </div>

                    <div>
                        <PrimaryButton
                            type='submit'
                            classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-200 ... '
                        >
                            {loading ? <SmallSpinner></SmallSpinner> : 'Register'}
                        </PrimaryButton>
                    </div>

                    <div className="divider">Or</div>
                    <div className='flex items-center flex-col
                    '>
                        <button onClick={handleGoogleUser} type="submit" className="text-white flex justify-center m-2 font-medium rounded-lg  px-5 lg:w-96 py-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Continue With Google < FcGoogle className='w-5 h-5 ml-2 mt-1'></FcGoogle> </button>


                    </div>
                    <p className='text-center my-2'><span>Already Have An Account ?</span> <Link className='text-orange-400' to="/login">Log In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;