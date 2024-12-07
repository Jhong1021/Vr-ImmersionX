import React, { useState } from "react";
import Product4 from "../Assets/images/product4.jpg";
import Product3 from "../Assets/images/Product3.png";
import Product2 from "../Assets/images/Product2.png";
import Product1 from "../Assets/images/Product1.png";
import Bg from "../Assets/images/bg.jpg";

const Product = () => {
    const [mainImage, setMainImage] = useState(Product4);

    const changeImage = (src) => {
        setMainImage(src);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${Bg})`,
            }}
        >
            <div className="w-full md:w-2/3 px-4 py-8 bg-opacity-75 rounded-lg shadow-lg">
                <div className="flex flex-wrap -mx-4">
                    {/* Product Images */}
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <img
                            src={mainImage}
                            alt="Product"
                            className="w-full h-auto rounded-lg shadow-md mb-4"
                            id="mainImage"
                        />
                        <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                            <div className="w-24 h-24 border-2 border-gray-300 rounded-md overflow-hidden">
                                <img
                                    src={Product4}
                                    alt="Thumbnail 1"
                                    className="w-full h-full object-cover cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onClick={() =>
                                        changeImage(Product4)
                                    }
                                />
                            </div>
                            <div className="w-24 h-24 border-2 border-gray-300 rounded-md overflow-hidden">
                                <img
                                    src={Product3}
                                    alt="Thumbnail 2"
                                    className="w-full h-full object-cover cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onClick={() =>
                                        changeImage(Product3)
                                    }
                                />
                            </div>
                            <div className="w-24 h-24 border-2 border-gray-300 rounded-md overflow-hidden">
                                <img
                                    src={Product2}
                                    alt="Thumbnail 3"
                                    className="w-full h-full object-cover cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onClick={() =>
                                        changeImage(Product2)
                                    }
                                />
                            </div>
                            <div className="w-24 h-24 border-2 border-gray-300 rounded-md overflow-hidden">
                                <img
                                    src={Product1}
                                    alt="Thumbnail 4"
                                    className="w-full h-full object-cover cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onClick={() =>
                                        changeImage(Product1)
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2 px-4 text-left">
                        <h2 className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent mb-2">Premium Wireless Headphones</h2>
                        <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
                        <div className="mb-4">
                            <span className="text-2xl font-bold mr-2">$349.99</span>
                            <span className="text-gray-500 line-through">$399.99</span>
                        </div>
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6 text-yellow-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ))}
                            <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                        </div>
                        <p className="text-gray-700 mb-6">
                            Experience premium sound quality and industry-leading noise cancellation with these wireless
                            headphones. Perfect for music lovers and frequent travelers.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Color:</h3>
                            <div className="flex space-x-2">
                                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg">
                                Add to Cart
                            </button>
                            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
