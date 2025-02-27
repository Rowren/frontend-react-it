import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../component/Footer";
import Sidebar from "./../component/SideBar";

const LayoutAdmin = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar ติดด้านซ้าย */}
            <Sidebar />
            
            {/* Main Content + Footer */}
            <div className="flex-1 flex flex-col ml-64">
                <main className="flex-grow p-4 overflow-auto">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default LayoutAdmin;
