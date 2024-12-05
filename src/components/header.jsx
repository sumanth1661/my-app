import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logoimg from '../assets/logo.svg';

const Header = () => {
    const [nav, setNav] = useState(false);
    const location = useLocation();

    const handleNav = () => {
        setNav(!nav);
    };

    const handleLinkClick = () => {
        setNav(false);
    };

    const isActiveLink = (path) => location.pathname === path ? 'text-violet-400' : 'text-gray-300';

    return (
        <header className='bg-gradient-to-r from-black via-gray-1000 to-black text-gray-100 shadow-md h-[78px] max-w-[1800px] mx-auto flex justify-between items-center px-8 z-10'>
            <img src={logoimg} alt='Logo' className='h-10 w-auto' />
            
            {/* Desktop Navigation */}
            <nav className='hidden md:flex flex-grow justify-center space-x-6'>
                {['/', '/about', '/services', '/projects', '/blog','/gallery'].map((path, index) => (
                    <Link
                        key={index}
                        to={path}
                        onClick={handleLinkClick}
                        className={`p-2 text-lg font-raleway font-semibold rounded-md ${isActiveLink(path)} hover:text-violet-600 hover:bg-slate-950 hover:scale-105 transition-all duration-300`}
                    >
                        {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                    </Link>
                ))}
            </nav>

            {/* Contact Button */}
            <Link 
                to="/contact" 
                onClick={handleLinkClick}
                className="hidden md:block px-6 py-2 border border-white text-white font-raleway font-bold rounded-3xl shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
                Contact Me
            </Link>

            {/* Mobile Navigation Toggle */}
            <div onClick={handleNav} className='block md:hidden text-violet-600 cursor-pointer'>
                {nav ? <AiOutlineClose size={24} className="transition-transform transform rotate-90 duration-300" /> : <AiOutlineMenu size={24} />}
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`${nav ? 'left-0' : 'left-[-100%]'} fixed top-0 h-full w-[60%] bg-gray-900 text-gray-100 backdrop-blur-lg p-8 z-20 shadow-lg transition-all duration-500 ease-in-out`}>
                <img src={logoimg} alt='Logo' className='h-10 w-auto mb-10' />
                <ul className='space-y-6 text-lg font-medium'>
                    {['/', '/about', '/services', '/projects', '/blog', '/contact'].map((path, index) => (
                        <li key={index} className={`${isActiveLink(path)} transition-colors duration-300`}>
                            <Link
                                to={path}
                                onClick={handleLinkClick}
                                className={`p-3 block hover:bg-gray-800 hover:text-violet-400 rounded-md transition-transform transform hover:scale-105`}
                            >
                                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
