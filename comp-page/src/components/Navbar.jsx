import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#ffffff] shadow-lg z-10 p-2">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex gap-1 mb-2 md:mb-0">
                    <img src="Vector.png" alt="logo" />
                    <img src="Ik developers.png" alt="logo" />
                </div>

                {/* Navigation Menu */}
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-[#4A5568] text-base">
                    <li className="hover:text-black">About Us</li>
                    <li className="hover:text-black">Services</li>
                    <li className="hover:text-black">Case Studies</li>
                    <li className="hover:text-black">How It Works</li>
                    <li className="hover:text-black">Blog</li>
                    <li className="hover:text-black">Hire</li>
                </ul>

                {/* Button */}
                <button className="flex bg-gradient-to-r from-[#6675F7] to-[#57007B] w-[124px] h-[42px] rounded-[5px] text-white px-4 py-2 mt-2 md:mt-0 hover:bg-blue-600 hover:text-white">
                    Button
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
