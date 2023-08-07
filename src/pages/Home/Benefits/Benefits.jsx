import img1 from '../../../assets/images/quality.png'
import img2 from '../../../assets/images/shipping.png'
import img3 from '../../../assets/images/warranty.png'

const Benefits = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 lg:px-10 py-10 mb-10 lg:mb-20'>
            <h3 className="text-4xl lg:text-[40px] leading-[48px] lg:leading-[54px] font-bold text-[#333E48] mb-8">Benefits You Get When <br /> Using Our Services</h3>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                <div className="flex items-start gap-3 p-7 rounded-lg bg-gradient-to-r from-gray-100 to-indigo-50">
                    <div>
                        <img className="mb-4 w-[60px]" src={img1} alt="" />
                        <h3 className="font-bold text-2xl mb-3">Best Quality</h3>
                        <p className="text-gray-500">Discover the finest sports toys that are built to last. Our curated selection ensures top-notch quality for endless play and skill development.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-7 rounded-lg bg-gradient-to-r from-gray-100 to-indigo-50">
                    <div>
                        <img className="mb-4 w-[60px]" src={img2} alt="" />
                        <h3 className="font-bold text-2xl mb-3">Fee Shipping</h3>
                        <p className="text-gray-500">Experience the joy of free shipping on all orders. No hidden fees, just pure excitement as your sports toys arrive at your doorstep.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-7 rounded-lg bg-gradient-to-r from-gray-100 to-indigo-50">
                    <div>
                        <img className="mb-4 w-[60px]" src={img3} alt="" />
                        <h3 className="font-bold text-2xl mb-3">Warranty</h3>
                        <p className="text-gray-500">Shop with confidence knowing that our sports toys are backed by a reliable warranty. Your satisfaction is our guarantee.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;