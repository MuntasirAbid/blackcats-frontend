import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';
import { toast } from 'react-hot-toast';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../firebase.config';
import loginImg from "../../../src/assets/MicrosoftTeams-image.png"
import PrimaryButton from '../../Components/button/ButtonPrimary';
import SmallSpinner from '../../Components/Loading/SmallLoading';
import Divider from '../../Components/Divider/Divider';


const auth = getAuth(app)

const Login = () => {
    const { logIn, googleLogin, loading, setLoading } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const [loginEmail, setLoginEmail] = useState('')

    const [error, setError] = useState()
    const [token] = useToken(loginEmail)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token]);

    const handleSubmit = (data) => {

        data.preventDefault()
        const form = data.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginEmail(email);


            })
            .catch(error => {
                console.log(error.message)
                setError(error.message);
                setLoading(false)

            })

    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email)
        console.log(email);
    }

    const handleReset = () => {

        if (!userEmail) {
            toast.error('Please enter your email first!')
            return;
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                toast.success("Please check your email for password reset link")
            })
            .catch(er => {
                console.log(er);
                setError(er)
            })
    }

    return (
        <div className='grid lg:grid-cols-2 md:mt-5 lg:mt-0 '>

            <div className='  lg:my-auto lg:p-12 p-10 md:p-20 '>
                <h2 className='text-center text-3xl md:text-4xl font-bold pb-12 text-purple-300'>Log In to join Now !</h2>
                <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-2xl p-4 md:p-20'>

                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2  font-medium text-purple-400">Your E-mail</label>
                        <input
                            onBlur={handleEmailBlur}
                            type="email" name="email" className="input border-2 placeholder-gray-200 bg-stone-500 caret-white text-black focus:border-purple-300 w-full text-sm" placeholder="E-mail" required="Email is required"
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password" className="block mb-2  font-medium text-purple-400">Your password</label>
                        <input type="password" name="password" className="input border-2 placeholder-gray-200 bg-stone-500 caret-white text-black focus:border-purple-300 w-full text-sm" placeholder="Password" required="" />
                    </div>
                    <p className='text-xl text-red-500 py-3'>{error}</p>
                    <div className='pb-2'>
                        <Link onClick={handleReset} className='text-xs hover:underline text-gray-400'>
                            Forgot Password?
                        </Link>
                    </div>

                    <div>
                        <PrimaryButton
                            type='submit'
                            classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-200 ... '
                        >
                            {loading ? <SmallSpinner></SmallSpinner> : 'Login'}
                        </PrimaryButton>
                    </div>


                </form>


                <div className="my-2 flex items-center justify-center">
                    <div className="bg-gradient-to-r from-purple-400 via-purple-600 h-1 w-10 md:w-40 lg:w-64"></div>
                    <div className='divider text-sm text-purple-500 px-4'>New To Black Cats?</div>
                    <div className="bg-gradient-to-l from-purple-400 via-purple-600 h-1 w-16 md:w-40 lg:w-64"></div>
                </div>



                <Link className='' to="/register">
                    <div className='grid place-content-center rounded-lg shadow-md p-1 text-white bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 hover:from-purple-500 hover:via-purple-700 hover:to-purple-500 focus:from-gray-200 focus:via-gray-400 focus:to-gray-200 hover:text-gray-300 hover:cursor-pointer'>
                        <button>Create your Black Cats Account</button>
                    </div>
                </Link>
            </div>

            <div className=' hidden  lg:flex  items-center justify-center  '>
                <img className='rounded w-[720px] h-[405px]' src={loginImg} alt="" />
            </div>


        </div>
    );
};

export default Login;