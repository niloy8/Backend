import { NavLink, Outlet } from "react-router";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl">Coffe Store</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/addcoffe">Add Coffe </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="Signin" className="btn">Sign In</NavLink>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;