import { Link } from "react-router-dom";
import DetailsModal from "./DetailsModal";

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
            <td>
                <label htmlFor={`my-modal-${sl + 1}`} className="rounded-btn cursor-pointer">View Details</label>
                <DetailsModal sl={sl} toy={toy} />
            </td>
        </tr>
    );
};

export default ToyRow;