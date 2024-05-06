import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-[#ffffff] shadow-lg z-10 p-2">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex gap-1 mb-2 md:mb-0">
                <Link to="/">
                    <img src="Vector.png" alt="logo" />
                    </Link>
                    <Link to="/">
                        <img src="Ik developers.png" alt="logo" />
                    </Link>
                </div>

                {/* Hamburger Icon for Small Devices */}
                <div className="md:hidden ml-auto">
                    <IoIosMenu className="text-gray-600 text-2xl cursor-pointer" onClick={toggleMenu} />
                </div>

                {/* Navigation Menu */}
                <ul className={`md:flex ${showMenu ? 'flex flex-col' : 'hidden'} space-y-2 md:space-y-0 md:space-x-4 text-[#4A5568] text-base`}>
                <li className="hover:text-black"><Link to="/about">About Us</Link></li>
                    <li className="hover:text-black"><Link to="/services">Services</Link></li>
                    <li className="hover:text-black"><Link to="/casestudies">Case Studies</Link></li>
                    <li className="hover:text-black"><Link to="/work">How It Works</Link></li>
                    <li className="hover:text-black"><Link to="/blog">Blog</Link></li>
                    <li className="hover:text-black"><Link to="/hire">Hire</Link></li>
                </ul>

                {/* Button */}
                <button className="hidden md:flex bg-gradient-to-r from-[#6675F7] to-[#57007B] w-[124px] h-[42px] rounded-[5px] text-white px-4 py-2 mt-2 md:mt-0 hover:bg-blue-600 hover:text-white">
                   Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Navbar;