import React from 'react';

const FurnitureReview: React.FC = () => {
  return (
    <section className="w-full">
      {/* Main content section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Furniture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4">
          <div className="text-white  max-w-lg ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Our Furniture Review</h1>
            <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      
      {/* Subscription section */}
      <div className="bg-gray-800 py-8 px-4 flex  items-center lg:justify-evenly flex-wrap ">
        <h2 className="text-white lg:max-w-sm text-left font-bold text-lg md:text-xl lg:text-2xl mb-4">
          Subscribe to get attractive offers on our products
        </h2>
        <div className="w-full lg:max-w-xl flex items-center ">
          <input
            type="email"
            placeholder="E.g. youremail@mail.com"
            className="input h-12 flex-grow p-2  rounded-l-md focus:outline-none text-gray-800"
          />
          <button className=" relative right-28 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 ">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default FurnitureReview;