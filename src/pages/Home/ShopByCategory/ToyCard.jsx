import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const ToyCard = ({ toy }) => {
    const { _id, toy_name, picture, price, rating } = toy || {};

    return (
        <div className="card w-full shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50 border">
            <figure className="px-5 pt-5">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="p-5 space-y-4">
                <h2 className="font-bold text-2xl text-[#333E48]">{toy_name}</h2>
                <div className="flex justify-between items-center">
                        <p className="font-bold text-4xl text-rose-500">${price}</p>
                    <div>
                        <Rating className="text-yellow-400"
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        />
                        <span className="font-bold text-[#333E48] ml-2">{rating}</span>
                    </div>
                </div>
                <div>
                    <Link to={`/toy/${_id}`}><button className="rounded-btn">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;