import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
  capacity?: string;
  equipment?: string[];
}

interface FacilitiesCarouselProps {
  facilities: Facility[];
  departmentName: string;
}

const FacilitiesCarousel: React.FC<FacilitiesCarouselProps> = ({ 
  facilities = [], 
  departmentName = "Department" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.max(1, Math.ceil(facilities.length / itemsPerPage));
  const currentFacilities = facilities.slice(currentIndex, currentIndex + itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev + itemsPerPage >= facilities.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev === 0 ? Math.max(0, facilities.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          {departmentName} Facilities
        </h3>
        
        {facilities.length > itemsPerPage && (
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPage(idx)}
                  className={`w-2 h-2 rounded-full ${
                    Math.floor(currentIndex / itemsPerPage) === idx 
                      ? 'bg-yellow-500' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-1 rounded-full bg-gray-100 hover:bg-yellow-100"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1 rounded-full bg-gray-100 hover:bg-yellow-100"
                disabled={currentIndex + itemsPerPage >= facilities.length}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {facilities.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFacilities.map(facility => (
            <div key={facility.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 relative">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/default-facility.jpg';
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2">{facility.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{facility.description}</p>
                {facility.capacity && (
                  <p className="text-sm mb-1"><span className="font-medium">Capacity:</span> {facility.capacity}</p>
                )}
                {facility.equipment?.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-1">Equipment:</p>
                    <div className="flex flex-wrap gap-1">
                      {facility.equipment.map((item, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No facilities information available</p>
        </div>
      )}
    </div>
  );
};

export default FacilitiesCarousel;