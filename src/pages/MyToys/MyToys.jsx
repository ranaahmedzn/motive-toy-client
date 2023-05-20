import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
    const [toys, setToys] = useState([])
    const {user} = useContext(AuthContext)
    // console.log(user?.email)

    const url = `http://localhost:5000/my-toys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data))
    }, [url])

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
                            ></MyToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;