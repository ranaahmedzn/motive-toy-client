import { useEffect, useState } from "react";

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('All')
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/toys-by-category?category=${activeTab}`)
        .then(res => res.json())
        .then(data => setToys(data))
    }, [activeTab])

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div className="max-w-7xl h-full lg:px-10 mx-auto my-12">
            <h3 className="font-bold text-3xl text-[#333E48] text-center">Shop By Category</h3>

            <ul className="w-3/4 mx-auto my-8 grid grid-cols-4 border-2 border-[#0787EA] rounded-lg">
                <li onClick={() => handleTabClick('All')} className={`${activeTab === 'All' ? 'active-tab' : 'default-tab'}`}>All</li>

                <li onClick={() => handleTabClick('Indoor')} className={`${activeTab === 'Indoor' ? 'active-tab' : 'default-tab'} border-l-2 border-r-2 border-[#0787EA]`}>Indoor</li>

                <li onClick={() => handleTabClick('Outdoor')} className={`${activeTab === 'Outdoor' ? 'active-tab' : 'default-tab'} border-r-2 border-[#0787EA]`}>Outdoor</li>

                <li onClick={() => handleTabClick('Miniature')} className={`${activeTab === 'Miniature' ? 'active-tab' : 'default-tab'}`}>Miniature</li>
            </ul>
        </div>
    );
};

export default ShopByCategory;