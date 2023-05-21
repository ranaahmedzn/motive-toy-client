import DetailsModal from "./DetailsModal";

const ToyRow = ({toy, sl}) => {
    const {_id, toyName, sellerName, subCategory, price, availableQuantity} = toy || {};
    
    return (
        <tr>
            <th>{sl + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>
                <label htmlFor={`my-modal-${sl + 1}`} className="rounded-btn cursor-pointer">View Details</label>
                <DetailsModal sl={sl} toy={toy} />
            </td>
        </tr>
    );
};

export default ToyRow;