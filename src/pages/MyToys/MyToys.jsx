import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";

const MyToys = () => {
    const [toys, setToys] = useState([])
    const { user } = useContext(AuthContext)
    // console.log(user?.email)

    const url = `http://localhost:5000/my-toys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])

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
    
    return (
        <div className="max-w-7xl mx-auto lg:px-10 my-12">
            <h3 className="font-bold text-3xl text-center text-[#333E48] mb-10">All the Toys you have added</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
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
                            ></MyToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;