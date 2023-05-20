import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/error.gif'
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <img src={errorImg} alt="" />
            <div className='-mt-8'>
                <Link to='/'><button className='rounded-btn flex gap-2 items-center'>
                    <FaHome />
                    <span>Back to Home</span>
                </button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;