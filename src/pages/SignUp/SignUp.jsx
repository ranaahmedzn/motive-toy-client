import { Link } from 'react-router-dom';
import image from '../../assets/images/image1.jpg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { RiAlertFill } from "react-icons/ri";
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordErr, setPasswordErr] = useState('')

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fullName = `${firstName}${lastName}`
        const photoUrl = form.photoUrl.value;
        // console.log(firstName, lastName, email, password, photoUrl)

        if (passwordErr) {
            return form.password.focus()
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                toast.success("Sign Up successful!👍")

                // update user profile info
                updateUserProfile(fullName, photoUrl)
            })
            .catch(error => toast.error(`${error.message}🔥`))

    }

    // set password field value to the state
    const handlePassword = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue)

        // handling password validation
        if (!/(?=.*[0-9])/.test(passwordValue)) {
            setPasswordErr('Password should contain at least one digit.')
        }
        else if (!/(?=.*[!@#$%^&*])/.test(passwordValue)) {
            setPasswordErr('Please include at least one special character')
        }
        else if (passwordValue.length < 6) {
            setPasswordErr('Password must be 6 character or longer.')
        }
        else {
            setPasswordErr('')
        }
    }

    return (
        <div className='bg-[#0787EA] pt-8 pb-16'>
            <Helmet>
                <title>Motive Toy | Sign Up</title>
            </Helmet>
            <div className='max-w-7xl mx-auto flex items-center justify-center'>
                <div className="w-3/4 h-full box-border mx-auto flex rounded-lg overflow-hidden border">
                    <img src={image} alt="" className='w-2/5' />
                    <div className='w-3/5 p-16 bg-white'>
                        <h3 className='font-bold text-2xl text-[#333E48] mb-5'>Create your account</h3>
                        <form onSubmit={handleSignUp}>
                            <div className='flex gap-3 mb-5'>
                                <div className='w-1/2'>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                                    <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter first name" required />
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                                    <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter last name" required />
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter email address" required />
                            </div>

                            <div className="mb-5 relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
                                <input onChange={handlePassword} type={show ? 'text' : 'password'} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter your password" required />

                                {
                                    passwordErr ? <p className='flex items-center gap-1 absolute -top-2 right-0 text-sm mt-2 font-medium text-rose-500'>
                                        <RiAlertFill />
                                        {passwordErr}
                                    </p> : ''

                                }

                                <span onClick={() => setShow(!show)} className='absolute top-10 right-3 cursor-pointer'>
                                    {
                                        show ? <FaEyeSlash />
                                            : <FaEye />
                                    }
                                </span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-900">Photo URL</label>
                                <input type="url" id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter photo url" required />
                            </div>

                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept <span className='text-rose-500 hover:underline'><Link to='/terms'>Terms & Conditions</Link></span></label>
                            </div>
                            <button type='submit' className='primary-btn w-full'>Sign Up</button>
                        </form>
                        <p className='text-center font-medium mt-6 text-sm'>Already have an account? <Link to='/login' className='text-rose-500 hover:underline '>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;