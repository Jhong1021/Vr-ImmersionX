import React from "react";
import RainySeasonImage from "../Assets/images/banner.jpg"; // Replace with your image path

const SaleBanner = () => {
    return (
        <div className="relative bg-cover bg-center h-48 sm:h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url(${RainySeasonImage})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white pb-6 px-4">
                <h2 className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent mb-4">
                    30% Year End Sale
                </h2>
                <p className="text-sm sm:text-lg md:text-xl mb-6">
                    Don't miss out on the best VR experiences at unbeatable prices!
                </p>
                <a
                    href="#"
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xs sm:text-sm md:text-base px-5 py-3 text-center"
                >
                    Shop now
                </a>
            </div>
        </div>
    );
};

export default SaleBanner;
