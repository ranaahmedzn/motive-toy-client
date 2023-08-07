import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import logo from '../../../assets/logos/logo.png'
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import MenuItems from "./MenuItems";

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    // console.log(user)

    const handleSignOut = () => {
        signOutUser()
            .then(() => toast.success('Sign out successful!👍'))
            .then(err => { })
    }

    return (
        <div className={`max-w-7xl lg:px-10 mx-auto`}>
            {/* overlay */}
            {
                open ? <div className="lg:hidden fixed w-full h-screen bg-gray-700 opacity-40"> </div> : ''
            }
            {/* navbar */}
            <div className="w-full flex items-center h-[90px] px-4 lg:px-10 lg:justify-between bg-white border border-[#0787EA] lg:rounded-lg">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="w-full">
                        <HiBars3CenterLeft onClick={() => setOpen(!open)} className="text-3xl" />
                    </label>
                </div>
                <div className="flex-1 lg:flex-none flex items-center gap-3 ml-4 lg:ml-0">
                    <img src={logo} className="w-[40px] md:w-[60px]" alt="" />
                    <Link to='/'><h3 className="text-2xl lg:text-3xl font-bold text-[#333E48]">Motive Toy</h3></Link>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="flex gap-1 items-center">
                        <MenuItems></MenuItems>
                    </ul>
                </div>
                <div>
                    {/* todo */}
                    {
                        user ?
                            <div className="flex gap-2.5 items-center">
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img src={user?.photoURL} alt="" className="rounded-full w-10 border border-[#333E48] hover:cursor-text" />
                                </div>
                                <button onClick={handleSignOut} className="hidden md:block relative rounded px-5 py-2.5 overflow-hidden group bg-[#0787EA] hover:bg-gradient-to-r hover:from-[#0787EA] hover:to-[#0762ea] hover:shadow-lg text-white font-bold transition-all ease-out duration-300">
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Sign Out</span>
                                </button>
                            </div>
                            : <Link to='/login'><button className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#0787EA] hover:bg-gradient-to-r hover:from-[#0787EA] hover:to-[#0762ea] hover:shadow-lg text-white font-bold transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">Login</span>
                            </button></Link>
                    }
                </div>
            </div>

            {/* sidebar */}
            <div className={`md:hidden w-3/4 h-screen fixed z-50 transition-all duration-500 ${open ? 'top-0 left-0' : 'top-0 -left-full'}`}>
                <ul className="p-4 pr-10 pt-10 bg-white space-y-8 h-full relative">
                    <MenuItems></MenuItems>
                    {
                        user && <li><button onClick={handleSignOut} className="primary-btn">Sign Out</button></li>
                    }
                    {
                        open && <IoClose onClick={() => setOpen(!open)} className="text-3xl absolute -top-6 right-2 cursor-pointer" />
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;