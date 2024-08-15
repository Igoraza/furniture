import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ImQuotesLeft } from 'react-icons/im';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      text: "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire. The process from selection to delivery was smooth, and the customer support team was incredibly helpful throughout.",
      author: "Michael Roberts",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "My experience has been consistently outstanding. They've elevated my entire home with their products, and exceeded my expectations. From the bedroom to the living room, their wide range of stylish and well-crafted furnishings sets them apart. Their dedicated customer support...",
      author: "Marla Brown",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "d with the quality of the recliner chair I rovided is beyond compare, and the ments our living room. What sets apart is t products but also their commitment to ley went the extra mile to ensure I was my purchase, which is a rarity in today's",
      author: "John Doe",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-orange-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-orange-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-orange-500 font-semibold mb-2">Testimonial Section</h4>
          <h2 className="text-3xl font-bold mb-2">What Our Customer Say</h2>
          <p className="text-gray-600">
            Discover the Stories and Experiences of Our Delighted Customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-gray-900 mb-4">
              <ImQuotesLeft/>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;