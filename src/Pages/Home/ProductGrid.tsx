import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductGrid: React.FC = () => {
  const products = [
    { name: 'Fabric Chair', price: 95.00, image: 'https://images.pexels.com/photos/7480783/pexels-photo-7480783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Fabric Chair', price: 95.00, image: 'https://images.pexels.com/photos/7602820/pexels-photo-7602820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Fabric Chair', price: 95.00, image: 'https://images.pexels.com/photos/8251063/pexels-photo-8251063.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Fabric Chair', price: 95.00, image: 'https://images.pexels.com/photos/1002745/pexels-photo-1002745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Fabric Chair', price: 95.00, image: 'https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Fabric Chair', price: 95.00, image: 'https://images.pexels.com/photos/8251063/pexels-photo-8251063.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Fabric Chair', price: 95.00, image: 'https://images.pexels.com/photos/7602820/pexels-photo-7602820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Fabric Chair', price: 95.00, image: 'https://images.pexels.com/photos/7480783/pexels-photo-7480783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-y-6 justify-between items-center mb-6">
        <div>
        <h4 className='label bg-gray-300 w-48 rounded-full p-2 text-red-600 font-bold'>Checkout Our Products</h4>
        <h2 className="text-2xl font-bold mt-3">Crafted with excellent material</h2>
        </div>
        <div className="flex flex-wrap space-y-3 justify-center space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">Best Seller</button>
          <button className="px-4 py-2 text-sm font-medium">Chair</button>
          <button className="px-4 py-2 text-sm font-medium">Table</button>
          <button className="px-4 py-2 text-sm font-medium">Bed</button>
          <button className="px-4 py-2 text-sm font-medium">Closet</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md w-64">
            <img src={product.image} alt={product.name} className="w-full h-72 object-contain" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500 line-through">$105.00</span>
                <span className="text-black font-bold">${product.price.toFixed(2)}</span>
                <button className="bg-gray-200 p-2 rounded-full">
                  <FaShoppingCart className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;