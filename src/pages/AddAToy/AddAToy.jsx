import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddAToy = () => {
    const [subCategory, setSubCategory] = useState('Indoor')
    // console.log(selectedValue)
    const { user } = useContext(AuthContext)

    const handleAddToy = (event) => {
        event.preventDefault()

        const form = event.target;
        const toyName = form.toyName.value;
        const pictureUrl = form.pictureUrl.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newToy = { toyName, pictureUrl, sellerName, sellerEmail, subCategory, price: parseFloat(price), availableQuantity, rating, description }
        // console.log(newToy);'?

        fetch('https://motive-toy-server.vercel.app/toys/add-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Added',
                        'Successfully added a new toy!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-10 my-12">
            <Helmet>
                <title>Motive Toy | Add A Toy</title>
            </Helmet>
            <div className="text-center space-y-3">
                <h2 className="font-bold text-3xl text-center text-[#333E48]">Add a new Toy</h2>
                <p className="text-gray-500"> Add Your Favorite Sports Toys to the Collection and Elevate Your Game to New Heights!</p>
            </div>

            <section className="max-w-4xl p-8 mx-auto bg-[#0787EA] rounded-md shadow-md mt-10">
                <form onSubmit={handleAddToy}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="font-medium text-white dark:text-gray-200" htmlFor="username">Toy Name</label>
                            <input id="toyName" type="text" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" placeholder="Enter toy name" required />
                        </div>

                        <div>
                            <label className="font-medium text-white dark:text-gray-200" htmlFor="pictureUrl">Picture URL</label>
                            <input id="pictureUrl" type="url" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" placeholder="Toy photo url" required />
                        </div>

                        <div>
                            <label className="font-medium text-white dark:text-gray-200" htmlFor="sellerName">Seller Name</label>
                            <input id="sellerName" type="text" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" value={user?.displayName} placeholder="Enter seller name" required />
                        </div>

                        <div>
                            <label className="font-medium text-white dark:text-gray-200" htmlFor="setterEmail">Seller Email</label>
                            <input id="sellerEmail" type="email" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" value={user?.email} placeholder="Enter seller email" required />
                        </div>
                        <div>
                            <label className="font-medium text-white dark:text-gray-200" htmlFor="passwordConfirmation">Sub-category</label>
                            <select onChange={(e) => setSubCategory(e.target.value)} defaultValue={subCategory} className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none">
                                <option value='Indoor'>Indoor</option>
                                <option value='Outdoor'>Outdoor</option>
                                <option value='Miniature'>Miniature </option>
                            </select>
                        </div>
                        <div>
                            <label className="font-medium text-white dark:text-gray-200" htmlFor="price">Price</label>
                            <input id="price" type="number" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" placeholder="Toy price" required />
                        </div>

                        <div>
                            <label className="font-medium text-white dark:text-gray-200" htmlFor="quantity">Available Quantity</label>
                            <input id="quantity" type="number" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" placeholder="Enter quantity" required />
                        </div>

                        <div>
                            <label className="font-medium text-white dark:text-gray-200" htmlFor="rating">Rating</label>
                            <input id="rating" type="text" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" placeholder="Enter rating" required />
                        </div>
                        <div>
                            <label className="font-medium text-white dark:text-gray-200" htmlFor="description">Description</label>
                            <textarea id="description" type="textarea" className="block w-full px-2.5 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none" placeholder="Describe about your toy..."></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button type="submit" className="secondary-btn">Add Toy</button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default AddAToy;