
const UpdateModal = ({ toy, sl, handleUpdateToy}) => {
    const { _id, toyName } = toy || {};

    const handleUpdate = (event) => {
        event.preventDefault()

        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = { price, availableQuantity, description}
        // console.log(newToy)

        handleUpdateToy(_id, updatedToy)
    }

    return (
        <>
            <input type="checkbox" id={`my-modal-${sl + 1}`} className="modal-toggle" />
            <div className='modal'>
                <div className="modal-box relative w-11/12">
                    <label htmlFor={`my-modal-${sl + 1}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold text-[#333E48]">{toyName}</h3>

                    <form onSubmit={handleUpdate}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="font-medium text-[#333E48] dark:text-gray-200" htmlFor="price">Price</label>
                                <input id="price" type="number" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" defaultValue={toy.price} required />
                            </div>

                            <div>
                                <label className="font-medium text-[#333E48] dark:text-gray-200" htmlFor="quantity">Available Quantity</label>
                                <input id="quantity" type="number" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" defaultValue={toy.availableQuantity} required />
                            </div>
                            <div className="col-span-2">
                                <label className="font-medium text-[#333E48] dark:text-gray-200" htmlFor="description">Description</label>
                                <textarea id="description" type="textarea" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" defaultValue={toy.description} ></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button type="submit" className="primary-btn">Update Toy</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateModal;