import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 p-4 shadow-md z-10 fixed top-0 left-0 w-[100vw]" >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <a href="/">Deepak Raut</a>
                </div>

                {/* Menu - Links for larger screens */}
                <div className="hidden md:flex space-x-8">
                    <a href="/" className="text-white hover:text-gray-300">Home</a>
                    <a href="/services" className="text-white hover:text-gray-300">Tools</a>
                    <a href="/about" className="text-white hover:text-gray-300">About</a>
                    <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                </div>

                {/* Buttons */}
                {/* <div className="hidden md:flex space-x-4">
                    <a href="/login" className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-100">Login</a>
                    <a href="/signup" className="bg-yellow-400 text-blue-600 py-2 px-4 rounded-md hover:bg-yellow-300">Sign Up</a>
                </div> */}

                {/* Hamburger Menu for smaller screens */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <a href="/" className="block text-white py-2 px-4 hover:bg-blue-700">Home</a>
                    <a href="/services" className="block text-white py-2 px-4 hover:bg-blue-700">Services</a>
                    <a href="/about" className="block text-white py-2 px-4 hover:bg-blue-700">About</a>
                    <a href="/contact" className="block text-white py-2 px-4 hover:bg-blue-700">Contact</a>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
