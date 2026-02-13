import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthContext/AuthContext';

const Navbar = () => {
    const navigate = useNavigate()
    const { user, singOutUser } = use(AuthContext)

    const handleSignOut = () => {
        singOutUser()
            .then(() => {
                alert("User Signed Out")
                navigate("/signIn")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const signOut = <>
        <button onClick={handleSignOut} className="btn btn-error">Sign Out</button>
    </>

    const btn = <>
        <NavLink className="btn btn-outline" to="/register">Register</NavLink>
        <NavLink className="btn btn-primary" to="/signIn">Sign In</NavLink>
    </>

    const isUser = <>
        {
            user ? signOut : btn
        }
    </>

    const responsivelinks = <>
        <li><NavLink className='text-base' to="/" >Home</NavLink></li>

        <div className="lg:hidden mt-4 flex flex-col gap-2 border-t border-base-300 pt-4">
            {isUser}
        </div>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-2 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-48 p-4 shadow">
                        {responsivelinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Career Codeer</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className='text-base' to="/" >Home</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex gap-3">
                    {isUser}
                </div>
            </div>
        </div>
    );
};

export default Navbar;