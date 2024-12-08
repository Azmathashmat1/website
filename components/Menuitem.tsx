import React from 'react';
import iamge from 'next/image';
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
    const productImages = [
        <img
        src="/images/shirt.png" alt="my image " w-4 h-4 />
        
    ];

    return (
        <div className='relative text-center p-10'>
            {/* Background Style */}
            <div
                style={{
                    background: `url(https://outfitters.com.pk/products/f0485-103)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.1,
                    position: 'absolute',
                    inset: 0,
                }}
            ></div>

            {/* Heading */}
            <h1 className='font-bold text-4xl mb-4 text-white z-10 relative'>
                Most Requested Collection
            </h1>
            <h2 className='text-3xl text-white z-10 relative'>
                Order Now...!
            </h2>

            {/* Product Cards */}
            <section id='projects' className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
                        <a href="#">
                            <img
                                src={productImages[index]}
                                alt={`product${index + 1}`}
                                className="h-80 w-72 object-cover rounded-t-xl"
                            />
                        </a>
                        <div className="px-4 py-3 w-72">
                            <span className="text-slate-500 mr-3 uppercase text-xs">Category</span>
                        </div>
                        <p className="text-lg font-bold text-red-700 truncate block capitalize">
                            Brand Name {index + 1}
                        </p>

                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black my-3 cursor-auto">$1200</p>
                        </div>

                        <del>
                            <div className="ml-auto">
                                <FaShoppingCart className="w-5 h-5 text-blue-800" />
                                <br />
                                <p className="text-sm text-blue-800 cursor-auto ml-2">
                                    $1500
                                </p>
                            </div>
                        </del>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProductCardGrid;
