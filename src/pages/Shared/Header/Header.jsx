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
        .then(err => console.log(err))
    }

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
                <div className="flex-1 lg:flex-none flex items-center gap-3 ml-4 lg:ml-0">
                    <img src={logo} className="w-[40px] md:w-[60px]" alt="" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#333E48]">Motive Toy</h3>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="flex items-center">
                        <MenuItems></MenuItems>
                    </ul>
                </div>
                <div>
                    {
                        user ? <div className="flex gap-2.5 items-center">
                            <img src={user?.photoURL} alt="" className="rounded-full w-10 border border-[#333E48]" />
                            <button onClick={handleSignOut} className="primary-btn hidden md:block">Sign Out</button>
                        </div>
                            : <Link to='/login'><button className="primary-btn">Login</button></Link>
                    }
                </div>
            </div>

            {/* sidebar */}
            <div className={`md:hidden w-3/4 h-screen absolute transition-all duration-500 ${open ? 'top-0 left-0' : 'top-0 -left-full'}`}>
                <ul className="p-4 pr-10 pt-10 bg-base-300 space-y-8 h-full relative">
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