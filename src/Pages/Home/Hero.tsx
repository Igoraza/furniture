import { FaPlay, FaThumbsUp } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="">
      <div className="grid lg:flex  gap-4 items-center p-4 w-full justify-center">
        <section className="w-full ">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold ">
            Perfect Harmony: Comfort & Style
          </h2>
          <p className="text-lg mt-3 mb-4 max-w-md text-gray-500">
            Explore furniture that harmoniously combines comfort and style to
            evaluate your home
          </p>
          <div className="flex gap-x-8">
            <button className="btn border border-gray-800 rounded-full">
              Explore Our Offers
            </button>
            <button className="btn rounded-full">
              <FaPlay />
              Watch Videos
            </button>
          </div>
        </section>
        <section className="w-full">
          <img src="/hero.png" className="max-" alt="Hero Image" />
        </section>
      </div>

      <div className="flex justify-evenly bg-white p-4 relative bottom-16 w-full lg:w-[60rem] 2xl:w-[70rem] lg:rounded-tr-full flex-wrap gap-4">
        <div>
            <span className="font-bold text-gray-500">Comfort</span>
            <span className="flex text-sm items-center space-x-2">
                <FaThumbsUp className="text-amber-400"/>
                <span className="text-gray-500">Cozy Seating</span>
            </span>
        </div>
        <div>
            <span className="font-bold text-gray-500">Quality Assurance</span>
            <span className="flex text-sm items-center space-x-2">
                <FaThumbsUp className="text-amber-400"/>
                <span className="text-gray-500">Cozy Seating</span>
            </span>
        </div>
        <div>
            <span className="font-bold text-gray-500">Free Shipping</span>
            <span className="flex text-sm items-center space-x-2">
                <FaThumbsUp className="text-amber-400"/>
                <span className="text-gray-500">Cozy Seating</span>
            </span>
        </div>
        <div>
            <span className="font-bold text-gray-500">Secure Checkout</span>
            <span className="flex text-sm items-center space-x-2">
                <FaThumbsUp className="text-amber-400"/>
                <span className="text-gray-500">Cozy Seating</span>
            </span>
        </div>
        <button className="btn rounded-full border border-gray-900 px-8">See More</button>
      </div>
    </main>
  );
}
