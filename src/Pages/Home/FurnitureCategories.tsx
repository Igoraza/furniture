
interface FurnitureCategoriesProps {
  category: number;
}

const FurnitureCategories = ({category}:FurnitureCategoriesProps) => {
  const category_one = [
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
  const category_two = [
    {
      name: "Sofa",
  image: "  https://images.pexels.com/photos/7534185/pexels-photo-7534185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Night Stand",
      image: "https://images.pexels.com/photos/5825694/pexels-photo-5825694.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Bed",
      image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]
  const categories = category === 1 ? category_one : category_two 
  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-200">
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
