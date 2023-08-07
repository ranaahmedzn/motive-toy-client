// for slides
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Customer from './Customer';


const Customers = () => {
    const [reviews, setReviews] = useState([]);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        fetch('./reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    const handlePrev = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };
    const handleNext = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };

    return (
        <div className='max-w-7xl mx-auto px-4 lg:px-10 py-10 mb-10 lg:mb-20'>
            <div className='flex justify-between items-center'>
                <h3 className="text-4xl lg:text-[40px] leading-[48px] lg:leading-[54px] font-bold text-[#333E48] mb-8">Some of our <br /> Happy Customers</h3>
                <div className='flex gap-2'>
                    <button className='btn-nav-control' onClick={handlePrev}>
                        <FaArrowLeft size={18}/>
                    </button>
                    <button className='btn-nav-control' onClick={handleNext}>
                        <FaArrowRight size={18}/>
                    </button>
                </div>
            </div>

            <Swiper
                spaceBetween={30}
                slidesPerView="auto"
                grabCursor={true}
                effect={'fade'}
                modules={[Pagination]}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
               {
                reviews.map(review =>  <SwiperSlide
                key={review.id} 
                className='res-slide w-full md:max-w-[48.7%]'>
                    <Customer review={review}></Customer>
                </SwiperSlide>)
               }
            </Swiper>

        </div>
    );
};

export default Customers;