import { NavLink } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={`max-w-7xl lg:px-10 mx-auto relative`}>
            {/* overlay */}
            {
                open ? <div className="lg:hidden absolute w-full h-screen bg-gray-700 opacity-40"> </div> : ''
            }
            {/* navbar */}
            <div className="w-full flex items-center h-[90px] lg:my-5 px-4 lg:px-10 lg:justify-between bg-white border border-[#0787EA] rounded-lg">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="w-full">
                        <HiBars3CenterLeft onClick={() => setOpen(!open)} className="text-3xl" />
                    </label>
                </div>
                <div className="flex-1 lg:flex-none ml-4 lg:ml-0 text-3xl font-bold text-[#333E48]">Motive Toy</div>
                <div className="flex-none hidden lg:block">
                    <ul className="flex items-center">
                        <li >
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li >
                            <NavLink
                                to='/all-toys'
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                All Toys
                            </NavLink>
                        </li>
                        <li >
                            <NavLink
                                to='/blog'
                                className={({ isActive }) =>
                                    isActive ? "active" : "default"
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="primary-btn">Login</button>
                </div>
            </div>

            {/* sidebar */}
            <div className={`md:hidden w-3/4 h-screen absolute transition-all duration-500 ${open ? 'top-0 left-0' : 'top-0 -left-full'}`}>
                <ul className="p-4 pr-10 pt-10 bg-base-300 space-y-8 h-full relative">
                    <li >
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? "active" : "default"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink
                            to='/all-toys'
                            className={({ isActive }) =>
                                isActive ? "active" : "default"
                            }
                        >
                            All Toys
                        </NavLink>
                    </li>
                    <li >
                        <NavLink
                            to='/blog'
                            className={({ isActive }) =>
                                isActive ? "active" : "default"
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                    {
                        open && <IoClose onClick={() => setOpen(!open)} className="text-3xl absolute -top-6 right-2 cursor-pointer" />
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;