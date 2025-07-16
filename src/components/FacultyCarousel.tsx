import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Award,
  BookOpen,
  ExternalLink
} from 'lucide-react';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  education: string;
  image: string;
  email: string;
  publications: number;
  researchAreas: string[];
}

interface FacultyCarouselProps {
  faculty?: FacultyMember[];
  departmentName?: string;
}

const FacultyCarousel: React.FC<FacultyCarouselProps> = ({
  faculty,
  departmentName = "Department"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.max(1, Math.ceil(faculty.length / itemsPerPage));
  const currentFaculty = faculty.slice(currentIndex, currentIndex + itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= faculty.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, faculty.length - itemsPerPage)
        : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="text-2xl font-bold text-gray-900 mb-2">
            Meet our Faculty
          </h4>
          <p className="text-gray-600">
            Faculty members of {departmentName} Department
          </p>
        </div>
        
        {faculty.length > itemsPerPage && (
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
                className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full transition-colors group disabled:opacity-50"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full transition-colors group disabled:opacity-50"
                disabled={currentIndex + itemsPerPage >= faculty.length}
              >
                <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
              </button>
            </div>
          </div>
        )}
      </div>

      {faculty.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {currentFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-200 hover:border-yellow-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/default-faculty.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {member.email && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={`mailto:${member.email}`}
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-md"
                    >
                      <Mail className="h-4 w-4 text-gray-600" />
                    </a>
                  </div>
                )}

                {member.experience && (
                  <div className="absolute bottom-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h5 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors mb-1">
                    {member.name}
                  </h5>
                  {member.designation && (
                    <p className="text-yellow-600 font-semibold text-sm mb-1">
                      {member.designation}
                    </p>
                  )}
                  {member.specialization && (
                    <p className="text-gray-600 text-sm">
                      {member.specialization}
                    </p>
                  )}
                </div>

                {member.education && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award className="h-4 w-4 text-orange-500" />
                    <span>{member.education}</span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">
                      {member.publications} Publications
                    </span>
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center space-x-1 group/btn">
                    <span>View Profile</span>
                    <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {member.researchAreas?.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-2">Research Areas:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.researchAreas.slice(0, 3).map((area, idx) => (
                        <span key={idx} className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
                          {area}
                        </span>
                      ))}
                      {member.researchAreas.length > 3 && (
                        <span className="text-gray-500 text-xs">+{member.researchAreas.length - 3}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-600">No faculty information available at this time</p>
        </div>
      )}
    </div>
  );
};

export default FacultyCarousel;
