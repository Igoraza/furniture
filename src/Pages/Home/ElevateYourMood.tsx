import React from 'react';
import { FaCheckCircle, FaUserCircle } from 'react-icons/fa';
import { MdOutlineVerified } from 'react-icons/md';

const ElevateYourMood: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center">
        {/* left side image */}
      <div className="md:w-1/2 relative">
        <img 
          src="/elavate.png" 
          alt="Elevated living space" 
          className="w-full h-[30rem] object-contain rounded-lg"
        />
        {/* Overlay elements */}
        <div className="absolute top-4 left-4 bg-white rounded-lg p-2 flex items-center shadow-md">
          <FaUserCircle className="text-gray-400 mr-2" size={24} />
          <div>
            <p className="font-semibold">Mark Anderson</p>
            <p className="text-sm text-gray-500">Furniture Connoisseur</p>
          </div>
          <div className="ml-2 bg-orange-500 text-white rounded-full p-1">
            <FaCheckCircle size={16} />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-orange-500 rounded-full p-2 shadow-md -rotate-6">
          <MdOutlineVerified  size={24} className="text-white" />
        </div>
        <div className="absolute bottom-0 right-4 bg-white rounded-full py-3 px-6 shadow-md flex items-center">
          <MdOutlineVerified  className="text-red-500 mr-2" />
          <span className="text-sm">We think about every detail</span>
        </div>
      </div>
      {/* right side content */}
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">
          Elevate Your Mood with Comfort Furniture
        </h1>
        <p className="text-gray-600 mb-6">
          Experience the pinnacle of design quality. Our products are meticulously crafted with an unwavering commitment to excellence. From the finest materials to expert craftsmanship, each piece embodies durability, comfort, and timeless style. Elevate your space with the assurance of exceptional quality and lasting beauty.
        </p>
        <ul className="mb-6">
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-orange-500 mr-2" />
            <span>Experience Unparalleled Quality</span>
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-orange-500 mr-2" />
            <span>Built to Last for Generations</span>
          </li>
          <li className="flex items-center mb-2">
            <FaCheckCircle className="text-orange-500 mr-2" />
            <span>Loved by Customers Worldwide</span>
          </li>
        </ul>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
          Shop Now
        </button>
      </div>

      
    </div>
  );
};

export default ElevateYourMood;