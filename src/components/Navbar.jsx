import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const route = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Analytics", path: "/statistics" },
        { id: 3, name: "All Ready Applied", path: "/appliedJob" },
        { id: 4, name: "FAQ", path: "/blog" },
    ]
    return (
        <nav className='px-10 md:px-72 py-10 md:py-12 md:flex justify-between items-center bg-my-color-1 bg-opacity-10'>
            <Link to="/" className="inline-block bg-gradient-to-r from-my-color-1 to-my-color-2 bg-clip-text text-3xl text-transparent">jobsRiver</Link>
            <ul className='md:flex'>
                {
                    route.map((route) => <li key={route.id} className='py-2 px-4 text-xl'>
                        <NavLink
                            to={route.path}
                            className={({ isActive }) => isActive ? "text-my-color-1" : "text-dark-3"}
                        >
                            {route.name}
                        </NavLink>
                    </li>)
                }
            </ul>
            <button className='btn-primary'>Join Now</button>

        </nav>
    );
};

export default Navbar;