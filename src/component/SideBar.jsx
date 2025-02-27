import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaBox, FaShoppingCart, FaThLarge, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // ล้าง session หรือ state ที่เกี่ยวข้องกับการล็อกอิน
        localStorage.removeItem("userToken"); // ลบ token ออกจาก localStorage (ถ้ามี)
        navigate("/login"); // กลับไปที่หน้า Login
    };

    return (
        <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 shadow-lg fixed top-0 left-0 flex flex-col justify-between">
            {/* ---- ส่วนของเมนูหลัก ---- */}
            <div>
                <h2 className="text-2xl font-bold mb-6 text-center tracking-wide">Admin Panel</h2>
                <nav>
                    <ul className="space-y-3">
                        <li>
                            <NavLink 
                                to="/admin" 
                                className={({ isActive }) => 
                                    `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                                        isActive 
                                        ? "bg-gray-700 text-white shadow-md scale-105"
                                        : "hover:bg-gray-700 hover:text-white text-gray-300"
                                    }`
                                } 
                                end
                            >
                                <FaHome className="text-lg" /> <span>Manage Users</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/admin/product" 
                                className={({ isActive }) => 
                                    `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                                        isActive 
                                        ? "bg-gray-700 text-white shadow-md scale-105"
                                        : "hover:bg-gray-700 hover:text-white text-gray-300"
                                    }`
                                }
                            >
                                <FaBox className="text-lg" /> <span>Manage Products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/admin/order" 
                                className={({ isActive }) => 
                                    `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                                        isActive 
                                        ? "bg-gray-700 text-white shadow-md scale-105"
                                        : "hover:bg-gray-700 hover:text-white text-gray-300"
                                    }`
                                }
                            >
                                <FaShoppingCart className="text-lg" /> <span>Manage Orders</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/admin/category" 
                                className={({ isActive }) => 
                                    `flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                                        isActive 
                                        ? "bg-gray-700 text-white shadow-md scale-105"
                                        : "hover:bg-gray-700 hover:text-white text-gray-300"
                                    }`
                                }
                            >
                                <FaThLarge className="text-lg" /> <span>Manage Categories</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* ---- ปุ่ม Logout ---- */}
            <div className="border-t border-gray-700 mt-6 pt-4">
                <button 
                    onClick={handleLogout} 
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300"
                >
                    <FaSignOutAlt className="text-lg" /> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
