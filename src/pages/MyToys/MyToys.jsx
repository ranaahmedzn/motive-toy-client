import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaArrowDown, FaArrowUp, FaRandom } from "react-icons/fa";
import LoadingPage from "../LoadingPage/LoadingPage";

const MyToys = () => {
    const [toys, setToys] = useState([])
    const [control, setControl] = useState(false)
    const [selectedValue, setSelectedValue] = useState('Sort By Price')
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/my-toys?email=${user?.email}&type=${selectedValue}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
            })
    }, [url, control])

    const handleUpdateToy = (id, updatedToy) => {
        fetch(`http://localhost:5000/toys/update-toy/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Updated!',
                        'Your toy has been updated.',
                        'success'
                    )

                    // change control value for loading my toys again 
                    setControl(!control)
                }
            })
    }

    const handleDeleteToy = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this toy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/delete-toy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )

                            const rest = toys.filter(toy => toy._id !== id)
                            setToys(rest)
                        }
                    })
            }
        })
    }

    if(loading){
        return <LoadingPage />
    }

    return (
        <div className="max-w-7xl mx-auto lg:px-10 my-12">
            <Helmet>
                <title>Motive Toy | My Toys</title>
            </Helmet>
            <h3 className="font-bold text-3xl text-center text-[#333E48] mb-10">All the Toys you have added</h3>

            <div className="mb-6">
                <select onChange={(e) => setSelectedValue(e.target.value)} defaultValue={selectedValue} className="bg-gray-50 border border-gray-300 text-gray-900 text-base font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5">
                    <option selected>Sort By Price</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Sub-Category</th>
                            <th className="flex items-center gap-1">Price
                                {
                                    selectedValue === "Ascending" ? <FaArrowDown /> : selectedValue === "Descending" ? <FaArrowUp /> : <FaRandom />
                                }
                            </th>
                            <th>Available Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, idx) => <MyToyRow
                                key={toy._id}
                                sl={idx}
                                toy={toy}
                                handleDeleteToy={handleDeleteToy}
                                handleUpdateToy={handleUpdateToy}
                            ></MyToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;