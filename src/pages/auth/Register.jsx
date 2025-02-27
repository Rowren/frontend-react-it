import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  
  // เก็บค่าฟอร์ม
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  // จัดการการเปลี่ยนค่าในอินพุต
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ฟังก์ชันสมัครสมาชิก
  const handleRegister = (e) => {
    e.preventDefault();
    
    // ตรวจสอบว่าข้อมูลครบหรือไม่
    if (!formData.fullName || !formData.email || !formData.password || !formData.address || !formData.phone) {
      alert("Please fill in all fields.");
      return;
    }

    // จำลองการส่งข้อมูลไปยัง Backend (สามารถใช้ fetch/axios ต่อ API ได้)
    console.log("Registered Data:", formData);
    
    // นำไปที่หน้า Login หลังสมัครเสร็จ
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Register</h2>

        <form className="space-y-5" onSubmit={handleRegister}>
          <div className="relative">
            <label className="block mb-1 text-black">Full Name</label>
            <FaUser className="absolute left-3 top-10 text-gray-500" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
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
              placeholder="Create a password"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="relative">
            <label className="block mb-1 text-black">Address</label>
            <FaMapMarkerAlt className="absolute left-3 top-10 text-gray-500" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="relative">
            <label className="block mb-1 text-black">Phone Number</label>
            <FaPhone className="absolute left-3 top-10 text-gray-500" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-black mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
