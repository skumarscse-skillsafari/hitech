import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface PlacementStudent {
  id: number;
  name: string;
  photo: string;
  companyName: string;
  companyLogo: string;
  packageLPA: string;
}

interface PlacementCarouselProps {
  students: PlacementStudent[];
  title?: string;
}

const PlacementCarousel: React.FC<PlacementCarouselProps> = ({
  students,
  title = "Training & Placement Highlights",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= students.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, students.length - itemsPerPage) : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const currentStudents = students.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="text-2xl font-bold text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-600">Celebrate our students' success stories</p>
        </div>
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
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full transition-colors group"
              disabled={currentIndex + itemsPerPage >= students.length}
            >
              <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        {currentStudents.map((student) => (
          <div
            key={student.id}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-200 hover:border-yellow-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={student.photo}
                alt={student.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                {student.packageLPA} LPA
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h5 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors mb-1">
                  {student.name}
                </h5>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={student.companyLogo}
                  alt={student.companyName}
                  className="h-8 w-8 object-contain rounded bg-white border border-gray-200"
                />
                <p className="text-gray-700 font-medium">{student.companyName}</p>
              </div>
              <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center space-x-1 group/btn">
                <span>View Details</span>
                <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 inline-block">
          <p className="text-gray-700">
            <span className="font-bold text-yellow-700">{students.length}</span> students placed in top companies
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacementCarousel;
