import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/image1.jpg'
import google from '../../assets/logos/google.png'
import twitter from '../../assets/logos/twitter.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [email, setEmail] = useState('')
    const [show, setShow] = useState(false)
    const { signInUser, googleLogin, twitterLogin, resetPassword } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                form.reset()
                toast.success("Login successful!👍")
                navigate(from, {replace: true})
            })
            .catch(error => toast.error(`${error.message}🔥`))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                // console.log(user)
                toast.success("Successfully login with Google!👍")
                navigate(from, {replace: true})
            })
            .catch(err => toast.error(`${err.message}🔥`))
    }

    const handleTwitterLogin = () => {
        twitterLogin()
            .then(result => {
                const user = result.user;
                // console.log(user)
                toast.success("Successfully login with Twitter!👍")
                navigate(from, {replace: true})
            })
            .catch(err => toast.error(`${err.message}🔥`))
    }

    const handleResetPassword = () => {
        if (!email) {
            return toast.error('You have to provide your email first!🔥')
        }
        resetPassword(email)
            .then(() => toast('Please check your email!', {
                icon: 'ℹ️',
            }))
            .catch(err => toast.error(`${err}🔥`))
    }

    return (
        <div className='bg-[#0787EA] pt-16 md:pt-8 pb-16 px-4'>
            <Helmet>
                <title>Motive Toy | Login</title>
            </Helmet>
            <div className='max-w-7xl mx-auto flex items-center justify-center'>
                <div className="w-full md:w-3/4 mx-auto flex flex-col-reverse md:flex-row-reverse rounded-lg overflow-hidden border">
                    <img src={image} alt="" className='hidden md:block w-full md:w-2/5' />
                    <div className='w-full md:w-3/5 p-6 md:p-16 bg-white'>
                        <h3 className='font-bold text-2xl text-[#333E48] mb-5'>Sign into your account</h3>
                        <form onSubmit={handleLogin}>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter email address" required />
                            </div>

                            <div className="mb-2 relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
                                <input type={show ? 'text' : 'password'} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter your password" required />

                                <span onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer'>
                                    {
                                        show ? <FaEyeSlash />
                                            : <FaEye />
                                    }
                                </span>
                            </div>

                            <div className="flex items-start mb-6">
                                <p onClick={handleResetPassword} className='text-sm font-medium text-rose-500 cursor-pointer hover:underline'>Forgotten password?</p>
                            </div>
                            <button type='submit' className='primary-btn w-full'>Login</button>
                        </form>
                        <p className='text-center font-medium mt-6 text-sm'>Don&apos;t have an account? <Link to='/signup' className='text-rose-500 hover:underline '>Sign Up</Link></p>
                        <div className="divider w-1/2 mx-auto">OR</div>
                        <div className='hidden md:flex gap-3 justify-between'>
                            <button onClick={handleGoogleLogin} type="button" className="social-login-btn">
                                <img src={google} alt="" className='w-[25px]' />
                                Sign in with Google
                            </button>
                            <button onClick={handleTwitterLogin} type="button" className="social-login-btn">
                                <img src={twitter} alt="" className='w-[25px]' />
                                Sign in with Twitter
                            </button>
                        </div>
                        
                        {/* for smaller device */}
                        <div className='md:hidden flex gap-2 justify-between'>
                            <button onClick={handleGoogleLogin} type="button" className="social-login-btn">
                                <img src={google} alt="" className='w-[25px]' />
                                Continue
                            </button>
                            <button onClick={handleTwitterLogin} type="button" className="social-login-btn">
                                <img src={twitter} alt="" className='w-[25px]' />
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;