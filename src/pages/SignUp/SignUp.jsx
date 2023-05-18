import { Link } from 'react-router-dom';
import image from '../../assets/images/image1.jpg'

const SignUp = () => {
    return (
        <div className='h-screen max-w-7xl mx-auto my-10 flex items-center justify-center'>
            <div className="w-3/4 mx-auto flex rounded-lg overflow-hidden border">
                <img src={image} alt="" className='w-2/5' />
                <div className='w-3/5 p-16'>
                    <h3 className='font-bold text-2xl text-[#333E48] mb-5'>Create your account</h3>
                    <form>
                        <div className='flex gap-3 mb-6'>
                            <div className='w-1/2'>
                                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                                <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter first name" required />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                                <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter last name" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter email address" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">Photo URL</label>
                            <input type="url" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter photo url" required />
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
    );
};

export default SignUp;