import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  // เก็บค่าฟอร์ม
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // จัดการการเปลี่ยนค่าในอินพุต
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ฟังก์ชันเข้าสู่ระบบ
  const handleLogin = (e) => {
    e.preventDefault();

    // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    // จำลองการตรวจสอบข้อมูลเข้าสู่ระบบ
    console.log("Login Data:", formData);

    // นำไปที่หน้า Home หลังจากเข้าสู่ระบบสำเร็จ
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-900 to-gray-900">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Login</h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="relative">
            <label className="block mb-1 text-black">Email</label>
            <FaEnvelope className="absolute left-3 top-10 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="relative">
            <label className="block mb-1 text-black">Password</label>
            <FaLock className="absolute left-3 top-10 text-gray-500" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-black mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
