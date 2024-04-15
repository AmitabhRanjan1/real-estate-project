import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#0E46A3]' : 'text-black'}
                            to={"/"}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#0E46A3]' : 'text-black'} to={"/estate"}>Estate</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#0E46A3]' : 'text-black'} to={"/latest-luxury"}>Latest in Luxury</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#0E46A3]' : 'text-black'} to={"/updateprofile"}>UpdateProfile</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#0E46A3]' : 'text-black'} to={"/userprofile"}>UserProfile</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[#0E46A3] font-bold lg:text-2xl">Brightest Luxury</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-7 font-semibold text-lg">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#0E46A3]' : 'text-black'}
                            to={"/"}>Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#0E46A3]' : 'text-black'} to={"/estate"}>Estate</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#0E46A3]' : 'text-black'} to={"/latest-luxury"}>Latest in Luxury</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#0E46A3]' : 'text-black'} to={"/updateprofile"}>UpdateProfile</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#0E46A3]' : 'text-black'} to={"/userprofile"}>UserProfile</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-1 lg:gap-3 md:gap-3">
                    <NavLink className="btn text-white lg:font-bold bg-[#0E46A3]" to={"/register"}>Register</NavLink>
                    <NavLink className="lg:btn md:btn hidden lg:text-base lg:font-bold" to={"/login"}>LogIn</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;