import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const ToyCard = ({ toy }) => {
    const {user} = useContext(AuthContext)
    const { _id, toyName, pictureUrl, price, rating, subCategory } = toy || {};

    const handleNotify = () => {
        if(!user){
            return toast('Please log in, in order to view details!', {
                icon: 'ℹ️',
            })
        }
    }

    return (
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className="card w-full shadow-xl border border-gray-200">
            <figure className="px-5 pt-5">
                <img width="200" src={pictureUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="p-5">
                <h2 className="font-bold text-2xl text-[#333E48]">{toyName}</h2>
                <h2 className="font-medium mt-1 mb-3 text-[#333E48]">{subCategory}</h2>
                <div className="flex justify-between items-center  mb-5">
                    <p className="font-bold text-2xl text-[#333E48]">Price: <span className="text-rose-500">${price}</span></p>
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
                    <Link onClick={handleNotify} to={`/toys/toy/${_id}`}><button className="rounded-btn">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;