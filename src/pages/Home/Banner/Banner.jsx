import { Link } from 'react-router-dom';
import image from '../../../assets/images/image2.png'

const Banner = () => {
    return (
        <div className="w-full h-[calc(100vh-90px)] lg:h-[calc(100vh-154px)] overflow-hidden bg-[#0787EA]">
            <div className="w-full max-w-7xl h-full px-4 lg:px-10 mx-auto flex flex-col lg:flex-row justify-center items-center">
                <div
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="linear" className="w-full lg:w-1/2 space-y-5 lg:-mt-[32px]">
                    <h1 className="text-[46px] lg:text-6xl font-bold text-white leading-[55px] lg:leading-[65px]">Your Ultimate <br /> Destination for Play</h1>
                    <p className="text-gray-100">Unleash the joy of play at Your Ultimate Destination for Play. Discover a wide range of high-quality toys that ignite imagination and bring endless fun. Find the perfect toy to create cherished memories and laughter-filled moments.</p>
                    <button className="secondary-btn mr-4">Explore More</button>
                    <Link to='/toys/all-toys'><button className='outlined-btn'>All Toys</button></Link>
                </div>
                <div className='hidden lg:block w-full lg:w-1/2'>
                    <img
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1500"
                        data-aos-easing="linear"
                        src={image} alt="" className='w-[600px] ml-auto' />
                </div>
            </div>
        </div>
    );
};

export default Banner;