import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white text-center p-4 mt-4 absolute bottom-0 left-0">
            <p>&copy; {new Date().getFullYear()} It Store. All rights reserved.</p>
        </footer>
    )
}

export default Footer