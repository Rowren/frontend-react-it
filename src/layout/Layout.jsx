import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer' // แก้ชื่อให้ถูกต้อง

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <nav>
                <Navbar />
            </nav>

            <main className="flex-grow">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
