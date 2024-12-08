'use client';

import { useState } from 'react';

export default function ProductList() {
  // Array of images to be displayed in the grid (you can update with your actual image paths)
  const images = [
    "/image1.jpg", // Replace with actual image paths
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>

      {/* Grid layout for images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-75"
            />
            
            {/* Overlay with hover effect */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>

            {/* Text displayed on hover */}
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">Image {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}