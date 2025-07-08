import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  package: string;
  year: string;
  department: string;
  image: string;
  testimonial: string;
}

interface PlacementTestimonialsProps {
  testimonials: Testimonial[];
}

const PlacementTestimonials: React.FC<PlacementTestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - itemsPerPage) : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
          <Star className="h-6 w-6 text-yellow-500" />
          <span>Success Stories</span>
        </h3>
        
        {/* Navigation Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? 'bg-yellow-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full transition-colors group"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full transition-colors group"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-2 gap-8 min-h-[300px]">
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-20">
              <Quote className="h-12 w-12 text-yellow-500" />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                <p className="text-yellow-600 font-semibold">{testimonial.company}</p>
                <p className="text-gray-600 text-sm">{testimonial.department} • Class of {testimonial.year}</p>
              </div>
              <div className="ml-auto text-right">
                <div className="text-3xl font-bold text-gray-900">{testimonial.package}</div>
                <div className="text-gray-600 text-sm">Package</div>
              </div>
            </div>
            
            <blockquote className="text-gray-700 italic leading-relaxed text-lg relative z-10">
              "{testimonial.testimonial}"
            </blockquote>

            {/* Rating Stars */}
            <div className="flex items-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Count Info */}
      <div className="mt-8 text-center">
        <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 inline-block">
          <p className="text-gray-700">
            <span className="font-bold text-yellow-700">{testimonials.length}</span> success stories 
            from our accomplished alumni
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacementTestimonials;