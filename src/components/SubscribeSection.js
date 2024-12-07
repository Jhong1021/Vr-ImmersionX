import React from 'react';
import Bg from '../Assets/images/close-up-man-wearing-vr-glasses.jpg';

const SubscribeSection = () => {
    return (
        <div id='subscribe'
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '0',
                margin: '0'
            }}
        >
            <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div
                    className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center"
                    style={{
                        backgroundColor: 'rgba(72, 55, 134, 0.8)',
                        backdropFilter: 'blur(5px)',
                        borderRadius: '0.5rem'
                    }}
                >
                    <div className="xl:w-0 xl:flex-1">
                        <h2 className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-5xl font-extrabold text-transparent">
                            Get the latest updates!
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                            Subscribe to our newsletter and stay updated on the latest developments.
                        </p>
                    </div>
                    <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                        <div id="mc_embed_signup">
                            <form className="sm:flex">
                                <input
                                    className="required rounded-md w-full px-4 py-2 email"
                                    id="mce-EMAIL"
                                    placeholder="Enter your email"
                                    required
                                    type="email"
                                    aria-required="true"
                                />
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button
                                        className="w-full flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                                        type="submit"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-800 text-center py-4">
                <p className="text-white text-sm">
                    &copy; {new Date().getFullYear()} Joene Tuban. All rights reserved.
                </p>
            </footer>

        </div>
    );
};

export default SubscribeSection;
