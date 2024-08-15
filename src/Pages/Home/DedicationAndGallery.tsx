import React from 'react';
import { FaStar, FaBed, FaChair } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const DedicationAndGallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-black min-h-96 text-white p-8 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold mb-12">
              Our Dedication to Your Satisfaction
            </h2>
            <p className="mb-12">
              We take pride in our unwavering commitment to quality and customer satisfaction. 
              With a track record of excellence, we provide you with the finest furniture and a 
              service you can trust.
            </p>
            <div className="flex space-x-8">
              <div>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm">4.9 / 5 rating</p>
                <p className="font-semibold">Quality</p>
              </div>
              <div>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm">4.8 / 5 rating</p>
                <p className="font-semibold">Customer Satisfaction</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-12">
              <div className="flex items-center mb-2">
                <FaBed className="text-orange-500 mr-2" size={24} />
                <h3 className="text-xl font-semibold">Quality Craftsmanship</h3>
              </div>
              <p className="text-sm max-w-md">
                Our furniture is meticulously handcrafted to stand the test of time, ensuring it can be enjoyed 
                for generations to come.
              </p>
            </div>
            <div className="mb-12">
              <div className="flex items-center mb-2">
                <FaChair className="text-orange-500 mr-2" size={24} />
                <h3 className="text-xl font-semibold">Extensive Selection</h3>
              </div>
              <p className="text-sm max-w-md">
                Discover a wide variety of styles and options to suit your unique preferences and needs.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <MdSupportAgent className="text-orange-500 mr-2" size={24} />
                <h3 className="text-xl font-semibold">Dedicated Customer Support</h3>
              </div>
              <p className="text-sm max-w-md">
                Quickly navigate you and engage with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DedicationAndGallery;