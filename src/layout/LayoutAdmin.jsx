import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './../component/Footer';
import Sidebar from './../component/SideBar';

const LayoutAdmin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default LayoutAdmin
