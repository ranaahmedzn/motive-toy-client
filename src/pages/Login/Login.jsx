import image from '../../assets/images/image1.jpg'
import google from '../../assets/logos/google.png'
import twitter from '../../assets/logos/twitter.png'

const Login = () => {
    return (
        <div className='h-screen max-w-7xl mx-auto flex items-center justify-center'>
            <div className="w-3/4 mx-auto flex rounded-lg overflow-hidden border">
                <img src={image} alt="" className='w-2/5' />
                <div className='w-3/5 p-16'>
                    <h3 className='font-bold text-2xl text-[#333E48] mb-5'>Sign into your account</h3>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg" placeholder="Enter email address" required />
                        </div>

                        <div className="flex items-start mb-6">
                            <p className='text-sm font-medium text-rose-500 cursor-pointer'>Forgotten password?</p>
                        </div>
                        <button type='submit' className='primary-btn w-full'>Login</button>
                    </form>
                    <div className="divider w-1/2 mx-auto">OR</div>
                    <div className='flex gap-3 justify-between'>
                        <button type="button" className="social-login-btn">
                            <img src={google} alt="" className='w-[25px]' />
                            Sign in with Google
                        </button>
                        <button type="button" className="social-login-btn">
                            <img src={twitter} alt="" className='w-[25px]' />
                            Sign in with Twitter
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;