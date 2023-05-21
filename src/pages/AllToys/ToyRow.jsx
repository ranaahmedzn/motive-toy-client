import { Link } from "react-router-dom";

const ToyRow = ({toy, sl}) => {
    const {_id, Name, SellerName, SubCategory, Price, AvailableQuantity} = toy || {};

    return (
        <tr>
            <th>{sl + 1}</th>
            <td>{SellerName}</td>
            <td>{Name}</td>
            <td>{SubCategory}</td>
            <td>{Price}</td>
            <td>{AvailableQuantity}</td>
            <td><Link to={`/toys/toy/${_id}`}><button className="rounded-btn">View Details</button></Link></td>
        </tr>
    );
};

export default ToyRow;