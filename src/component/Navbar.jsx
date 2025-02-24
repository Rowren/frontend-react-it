import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLaptop, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-400">Computer Store</Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="flex items-center gap-2 hover:text-blue-400 transition duration-300">
                            <FaHome /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/product" className="flex items-center gap-2 hover:text-blue-400 transition duration-300">
                            <FaLaptop /> Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/order" className="flex items-center gap-2 hover:text-blue-400 transition duration-300">
                            <FaShoppingCart /> Orders
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;