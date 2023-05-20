
const MyToyRow = ({ toy, sl, handleDeleteToy}) => {
    const {_id, toyName, pictureUrl, price, quantity, selectedValue } = toy || {};

    return (
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
            <td>{selectedValue}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <button className="btn mr-2">Update</button>
                <button onClick={() => handleDeleteToy(_id)} className="btn">Delete</button>
            </td>
        </tr>
    );
};

export default MyToyRow;