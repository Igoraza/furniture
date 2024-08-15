
export default function Gallery() {
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
    <div className="min-h-screen">
        <h5 className="font-bold px-6 py-2 bg-gray-200 rounded-full text-amber-800 text-center w-64 mx-auto">Checkout Our Collection</h5>
        <h2 className="text-center lg:text-5xl font-bold text-2xl mt-3 mb-3 ">Our Furniture Gallery</h2>
        <h5 className="text-gray-500 text-center">Explore Our Gallery Of Inspiring Designs</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center mt-5 gap-3">
            {products.slice(0,6).map((data,index) => (
                <img key={index} src={data.image} className="" alt={data.name} />
            ))}
        </div>
    </div>
  )
}
