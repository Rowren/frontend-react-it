import React from 'react'
import Sidebar from '../component.jsx/SideBar'
import { Outlet } from 'react-router-dom'
import Footer from '../component.jsx/Footer'

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
