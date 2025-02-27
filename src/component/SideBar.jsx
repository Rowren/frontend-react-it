import { NavLink } from "react-router-dom";
import { FaHome, FaBox, FaShoppingCart, FaThLarge } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col fixed top-0 left-0">
            <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
            <nav className="flex-1">
                <ul className="space-y-2">
                    <li>
                        <NavLink to="/admin" className={({ isActive }) => isActive ? "block p-2 bg-gray-700 rounded flex items-center space-x-2" : "block p-2 hover:bg-gray-700 rounded flex items-center space-x-2"} end>
                            <FaHome /> <span>Manage Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/product" className={({ isActive }) => isActive ? "block p-2 bg-gray-700 rounded flex items-center space-x-2" : "block p-2 hover:bg-gray-700 rounded flex items-center space-x-2"}>
                            <FaBox /> <span>Manage Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/order" className={({ isActive }) => isActive ? "block p-2 bg-gray-700 rounded flex items-center space-x-2" : "block p-2 hover:bg-gray-700 rounded flex items-center space-x-2"}>
                            <FaShoppingCart /> <span>Manage Orders</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/category" className={({ isActive }) => isActive ? "block p-2 bg-gray-700 rounded flex items-center space-x-2" : "block p-2 hover:bg-gray-700 rounded flex items-center space-x-2"}>
                            <FaThLarge /> <span>Manage Categories</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
