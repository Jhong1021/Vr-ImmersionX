import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="shadow fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
            <div className="relative flex max-w-5xl mx-auto flex-col overflow-hidden px-4 py-2 md:flex-row md:items-center">
                <a
                    href="#"
                    className="flex items-center whitespace-nowrap text-lg font-black sm:text-xl md:text-2xl"
                >
                    {/* Image Logo */}
                    <span className="mr-2 flex-shrink-0">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/VR_Logo_Virtual_Reality_Logo.svg/512px-VR_Logo_Virtual_Reality_Logo.svg.png?20210510054426" // Replace with your image URL
                            alt="ImmersionX Logo"
                            width="50"
                            height="50"
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                        />
                    </span>
                    {/* Text Logo */}
                    <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl md:text-3xl">
                        ImmersionX
                    </span>
                </a>

                {/* Mobile menu toggle */}
                <input
                    type="checkbox"
                    className="peer hidden"
                    id="navbar-open"
                    checked={isOpen}
                    onChange={toggleNavbar}
                />
                <label
                    className="absolute top-3 right-5 cursor-pointer md:hidden"
                    htmlFor="navbar-open"
                >
                    <span className="sr-only">Toggle Navigation</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </label>

                {/* Navbar */}
                <nav
                    aria-label="Header Navigation"
                    className={`peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row ${isOpen ? "pt-8 max-h-60" : ""
                        }`}
                >
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 md:space-x-6">
                        <li className="text-gray-600 hover:text-blue-600 font-medium text-sm md:text-base">
                            <a href="#home">Home</a>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600 font-medium text-sm md:text-base">
                            <a href="#features">Features</a>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600 font-medium text-sm md:text-base">
                            <a href="#subscribe">Subscribe</a>
                        </li>
                        <li className="text-gray-600">
                            <button
                                className="inline-flex items-center justify-center px-4 py-2 text-sm md:text-base font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg transition-colors"
                            >
                                Login
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
