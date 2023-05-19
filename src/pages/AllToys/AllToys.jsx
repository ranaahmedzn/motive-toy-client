import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";

const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-toys')
        .then(res => res.json())
        .then(data => setToys(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto lg:px-10 my-20 overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <ToyRow
                        key={toy._id}
                        toy={toy}
                        sl={index}
                        ></ToyRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;