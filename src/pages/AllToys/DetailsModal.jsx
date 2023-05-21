import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const DetailsModal = ({sl, toy}) => {
    const { toy_name, picture, description, price, rating, available_quantity } = toy || {}

    return (
        <>
            <input type="checkbox" id={`my-modal-${sl + 1}`} className="modal-toggle" />
            <div className='modal'>
                <div className="modal-box relative w-11/12">
                    <label htmlFor={`my-modal-${sl + 1}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="w-full p-4">
                <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="relative pb-48 w-full h-[300px] overflow-hidden">
                        <img className="absolute inset-0 h-full w-full object-cover" src={picture} alt="" />
                    </div>
                    <div className="p-4">
                        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                        <h2 className="mt-2 mb-2 text-2xl font-bold text-[#333E48]">{toy_name}</h2>
                        <p className="text-sm">{description}</p>
                        <div className="mt-3 flex justify-between items-center">
                            <span className="font-bold text-2xl text-[#333E48]">${price}</span>&nbsp;
                            <span className="text-base font-semibold text-[#333E48]">Available Quantity: {available_quantity}</span>
                        </div>

                        <hr className="my-5" />

                        <div className="flex items-center justify-between">
                            <div>
                                <Rating className="text-yellow-400 mr-2"
                                    readonly
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar />}
                                    placeholderSymbol={<FaStar />}
                                    fullSymbol={<FaStar />}
                                />
                                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-bold uppercase tracking-wide text-xs">{rating}</span>
                            </div>
                            
                            <button className="primary-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </>
    );
};

export default DetailsModal;