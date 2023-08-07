import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
    const [toy, setToy] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://motive-toy-server.vercel.app/toys/toy/${id}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [id])

    const { toyName, pictureUrl, description, price, rating, availableQuantity } = toy || {}

    return (
        <div className="max-w-7xl mx-auto px-10 flex justify-center items-center pt-12 pb-20">
            <div className="w-full md:w-1/2 p-4">
                <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="relative pb-48 w-full h-[300px] overflow-hidden">
                        <img className="absolute inset-0 h-full w-full object-cover" src={pictureUrl} alt="" />
                    </div>
                    <div className="p-4">
                        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                        <h2 className="mt-2 mb-2 text-2xl font-bold text-[#333E48]">{toyName}</h2>
                        <p className="text-sm">{description}</p>
                        <div className="mt-3 flex justify-between items-center">
                            <span className="font-bold text-2xl text-[#333E48]">${price}</span>&nbsp;
                            <span className="text-base font-semibold text-[#333E48]">Available Quantity: {availableQuantity}</span>
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

                            <button className="primary-btn" title="This feature currently unavailable!">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToyDetails;