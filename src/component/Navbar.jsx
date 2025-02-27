import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLaptop, FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { CartContext } from './user/CartContext'; // นำเข้า CartContext

const Navbar = () => {
    const { cart } = useContext(CartContext);

    // คำนวณจำนวนสินค้าทั้งหมดในตะกร้า
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                
                {/* Left: Brand */}
                <div className="flex-1">
                    <Link to="/" className="text-2xl font-bold text-blue-400">
                        Computer Store
                    </Link>
                </div>
                
                {/* Center: Navigation links */}
                <div className="flex-1 text-center">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <Link 
                                to="/" 
                                className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                            >
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/product" 
                                className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                            >
                                <FaLaptop /> Products
                            </Link>
                        </li>
                        <li className="relative">
                            <Link 
                                to="/order" 
                                className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                            >
                                <FaShoppingCart /> Orders
                                {/* แสดงจำนวนสินค้าถ้ามีมากกว่า 0 */}
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
                
                {/* Right: Login and Register */}
                <div className="flex-1 flex justify-end">
                    <ul className="flex space-x-4">
                        <li>
                            <Link 
                                to="/login" 
                                className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                            >
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/register" 
                                className="flex items-center gap-2 hover:text-blue-400 transition duration-300"
                            >
                                <FaUserPlus /> Register
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;
