import { FaEnvelope } from "react-icons/fa";

const SubscribeSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-10 mb-16">
            <div className="h-[380px] bg-[#0787EA] flex items-center justify-center rounded-3xl">
                <div>
                    <div className="text-center w-full  space-y-4 mb-7">
                        <h3 className="font-bold text-4xl text-white">Subscribe to our Newsletter for updated</h3>
                        <p className="w-3/5 mx-auto text-gray-100">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur illo facere, cupiditate in laboriosam autem hic nihil libero laborum rerum?</p>
                    </div>
                    <form className="w-1/2 mx-auto">
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
                                <FaEnvelope className="text-xl text-[#9CA3AF]" />
                            </div>
                            <input type="search" id="search" className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:outline-none placeholder:text-[#9CA3AF] font-medium" placeholder="Enter your email" required />
                            <button type="submit" className="text-white absolute right-1.5 top-[5px] bg-[#0787EA] focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;