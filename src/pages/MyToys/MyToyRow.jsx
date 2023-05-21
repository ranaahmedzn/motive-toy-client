import UpdateModal from "./UpdateModal";

const MyToyRow = ({ toy, sl, handleDeleteToy, handleUpdateToy}) => {
    const { _id, toyName, pictureUrl, price, availableQuantity, subCategory } = toy || {};

    return (
        <>
            <tr>
                <th>
                    {sl + 1}
                </th>
                <td>
  
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-20 rounded">
                                <img src={pictureUrl} />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {toyName}
                </td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <td>{availableQuantity}</td>
                <td>
                    <label htmlFor={`my-modal-${sl + 1}`} className="btn mr-2">Update</label>
                    <UpdateModal handleUpdateToy={handleUpdateToy} sl={sl} toy={toy} />

                    <button onClick={() => handleDeleteToy(_id)} className="btn">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default MyToyRow;