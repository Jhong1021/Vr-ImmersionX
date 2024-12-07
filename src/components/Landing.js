import React from "react";
import Man from "../Assets/images/man-trying-futuristic-device.jpg";

const LandingPage = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center md:bg-right"
            style={{
                backgroundImage: `url(${Man})`,
            }}
        >
            <section id="home" className="h-screen flex items-center justify-start pl-6">
                {/* Content Section */}
                <div className="flex flex-col items-center text-center sm:max-w-screen-sm md:max-w-screen-md">
                    {/* <h2 className="bg-clip-text text-6xl font-extrabold text-gray-700">
                        ImmersionX
                    </h2> */}
                    <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl mt-10">
                        "Unlock Endless Worlds with Virtual Reality."
                    </p>

                    <a
                        href="#"
                        className="mt-8 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg"
                    >
                        Learn more
                        <svg
                            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
