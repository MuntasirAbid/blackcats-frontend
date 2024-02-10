import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import SmallSpinner from '../../Components/Loading/SmallLoading';
import PrimaryButton from '../../Components/button/ButtonPrimary';
import registerImage from "../../assets/registerImg.jpeg"

const Register = () => {
    const { createUser, updateUser, loading, setLoading, googleLogin } = useContext(AuthContext)
    const [saveAs, setSaveAs] = useState('Buyer')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // useEffect(() => {
    //     if (token) {
    //         // Token received, set it in localStorage

    //         navigate('/');
    //     }
    // }, [token, navigate]);

    // handle submit

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photof = form.photo.files[0];
        const password = form.password.value;
        const role = form.role.value;

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
                        // setAuthToken(user)
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
        fetch("http://localhost:10000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('bookToken', data.token)
            })
    }

    return (
        <div className='grid lg:grid-cols-2 md:mt-5 lg:mt-0'>

            <div className=' lg:my-auto lg:px-5 p-10 md:p-5  '>
                <h2 className='text-center text-3xl md:text-4xl font-bold pb-10 text-purple-300 '>Register!</h2>
                <form onSubmit={handleSubmit} className='bg-gray-300 shadow-lg rounded-2xl p-4 lg:p-5 md:p-16'>

                    <div className="mb-1">
                        <label htmlFor="name" className="block mb-1 text-purple-400 font-semibold">Your Full Name</label>
                        <input type="text" name="name" className="input input-sm border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-purple-300 w-full text-sm" placeholder="Name" required />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="email" className="block mb-2  font-medium text-purple-400">Your E-mail</label>
                        <input type="email" name="email" className="input input-sm border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-purple-300 w-full text-sm" placeholder="E-mail" required />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="photo" className="block mb-2  font-semibold text-purple-400">Your PhotoURL</label>
                        <input name="photo" type="file" class="block w-full text-xs text-slate-500" required />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="password" className="block mb-1  font-medium text-purple-400">Your password</label>
                        <input type="password" name="password" className="input input-sm border-2 placeholder-white bg-stone-500 caret-white text-black focus:border-purple-300 w-full text-sm" placeholder="Password" required />
                    </div>

                    <select name='role' className="select select-sm  w-full max-w-xs py-1 text-white text-sm bg-stone-500">
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
                            classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-100 duration-200 ... '
                        >
                            {loading ? <SmallSpinner></SmallSpinner> : 'Register'}
                        </PrimaryButton>
                    </div>

                    <div className="divider">Or</div>
                    <div className='flex items-center flex-col
                    '>
                        <button onClick={handleGoogleUser} type="submit" className="text-white flex justify-center m-2 font-medium rounded-lg  px-5 lg:w-96 py-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Continue With Google < FcGoogle className='w-5 h-5 ml-2 mt-1'></FcGoogle> </button>


                    </div>
                    <p className='text-center my-2'><span>Already Have An Account ?</span> <Link className='text-orange-500 hover:underline' to="/login">Log In</Link></p>
                </form>
            </div>

            <div className='hidden lg:flex items-center justify-center mt-16 '>
                <img className='rounded w-[720px] h-[450px]' src={registerImage} alt="" />
            </div>

        </div>
    );
};

export default Register;