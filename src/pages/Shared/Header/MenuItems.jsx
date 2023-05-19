import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const MenuItems = () => {
    const {user} = useContext(AuthContext)

    return (
        <>
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
            {
                user && <li >
                    <NavLink
                        to='/my-toys'
                        className={({ isActive }) =>
                            isActive ? "active" : "default"
                        }
                    >
                        My Toys
                    </NavLink>
                </li>
            }
            {
                user && <li >
                    <NavLink
                        to='/add-toy'
                        className={({ isActive }) =>
                            isActive ? "active" : "default"
                        }
                    >
                        Add a Toy
                    </NavLink>
                </li>
            }
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
        </>
    );
};

export default MenuItems;