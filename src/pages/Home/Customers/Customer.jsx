import { FaQuoteLeft } from 'react-icons/fa';

const Customer = ({review}) => {
    const {customerName, customerDesignation, customerImg, feedbackTitle, feedbackMessage} = review || {};
    return (
        <div className='bg-[#EAEAEA] text-[#333E48] p-10 rounded-md'>
            <FaQuoteLeft size={34}></FaQuoteLeft>
            <h3 className='text-2xl font-bold my-5'>{feedbackTitle}</h3>
            <p>{feedbackMessage.slice(0, 260)}...</p>

            <div className='flex gap-5 items-center mt-5 '>
                <img className='w-[65px] rounded-full' src={customerImg} alt="" />

                <div>
                    <h4 className='text-lg font-bold'>{customerName}</h4>
                    <p>{customerDesignation}</p>
                </div>
            </div>
        </div>
    );
};

export default Customer;