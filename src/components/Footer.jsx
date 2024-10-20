import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto">

                <div className="flex flex-col px-2 md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold">Deepak Raut</h1>
                        <p className="mt-2">Your trusted financial partner.</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-x-6">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <ul className="mt-2">
                                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                                <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                                <li><a href="#" className="hover:text-gray-400">Services</a></li>

                                <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </div>
                        <div>

                            <h3 className="text-lg font-semibold">Contact Us</h3>
                            <p className="mt-2">
                                Address: Chh.sambhajinagar
                                <br />
                                Email: cadeepakraut@gmail.com
                                <br />
                                Phone: +91 1111111111111
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-700 py-4 text-center">
                    &copy; 2023 Cadeepakrout website. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;