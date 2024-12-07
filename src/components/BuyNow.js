import React from "react";
import Women from "../Assets/images/woman-experiencing-virtual-reality-close-up.jpg";
import BackgroundImage from "../Assets/images/young-man-s-playing-vr-glasses-neon-light.jpg";
import Group from "../Assets/images/group.jpg";

const BuyNow = () => {
    return (
        <section id="features" className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4">
                {/* Image Section */}
                <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-4">
                    <img
                        src={Women}
                        alt="Product"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Heading Section 1 */}
                <div
                    className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 flex flex-col items-center justify-end p-4"
                    style={{
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="text-center">
                        <h1 className="mb-4 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent">
                            Unparalleled Immersion
                        </h1>
                        <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white">
                            Escape the limits of your screen. With VR, you don’t just watch—you live the experience.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg"
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
                </div>

                {/* Heading Section 2 */}
                <div
                    className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 flex flex-col items-center justify-end p-4"
                    style={{
                        backgroundImage: `url(${Group})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="text-center">
                        <h1 className="mb-4 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent">
                            Remote Socializing Made Fun
                        </h1>
                        <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white">
                            Connect with friends and family in virtual spaces, no matter where they are.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg"
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
                </div>
            </div>
        </section>
    );
};

export default BuyNow;
