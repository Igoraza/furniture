import React from "react";

const FurnitureCategories: React.FC = () => {
  const categories = [
    {
      name: "Dining Tables",
      image: "/table.png",
    },
    {
      name: "Chairs",
      image: "chair.png",
    },
    {
      name: "Office Desks",
      image: "desk.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center bg-gray-200">
            <div className="p-4">
              <h3 className="font-semibold mb-5 text-nowrap text-xl">{category.name}</h3>
              <button className="text-nowrap font-bold">
                See More
              </button>
            </div>
            <img
              src={category.image}
              alt={category.name}
              className="w-56 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureCategories;
