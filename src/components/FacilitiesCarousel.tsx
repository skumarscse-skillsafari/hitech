import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Award,
  BookOpen,
  ExternalLink,
  X
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
  faculty: FacultyMember[];
  departmentName?: string;
}

const FacultyCarousel: React.FC<FacultyCarouselProps> = ({
  faculty,
  departmentName = "Department"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(faculty.length / itemsPerPage);

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

  const currentFaculty = faculty.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      {/* Faculty Carousel */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Distinguished Faculty</h4>
            <p className="text-gray-600">
              Meet our expert faculty members from {departmentName}
            </p>
          </div>

          {/* Pagination */}
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {currentFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-200 hover:border-yellow-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Email */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-md"
                  >
                    <Mail className="h-4 w-4 text-gray-600" />
                  </a>
                </div>

                {/* Experience */}
                <div className="absolute bottom-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {member.experience}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h5 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors mb-1">
                    {member.name}
                  </h5>
                  <p className="text-yellow-600 font-semibold text-sm mb-1">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 text-sm">{member.specialization}</p>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Award className="h-4 w-4 text-orange-500" />
                  <span>{member.education}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">
                      {member.publications} Publications
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedFaculty(member)}
                    className="text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center space-x-1 group/btn"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-700 mb-2">Research Areas:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.researchAreas.slice(0, 3).map((area, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {area}
                      </span>
                    ))}
                    {member.researchAreas.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{member.researchAreas.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 text-center">
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 inline-block">
            <p className="text-gray-700">
              <span className="font-bold text-yellow-700">{faculty.length}</span> distinguished
              faculty members contributing to excellence in {departmentName}
            </p>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-full max-w-xl rounded-xl relative shadow-xl">
            <button
              onClick={() => setSelectedFaculty(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-start gap-4">
              <img
                src={selectedFaculty.image}
                alt={selectedFaculty.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <h2 className="text-xl font-bold">{selectedFaculty.name}</h2>
                <p className="text-sm text-gray-600">{selectedFaculty.designation}</p>
                <p className="text-sm text-gray-600">{selectedFaculty.specialization}</p>
                <p className="text-sm text-gray-600">{selectedFaculty.education}</p>
                <p className="text-sm text-gray-600">
                  Experience: {selectedFaculty.experience}
                </p>
                <p className="text-sm text-gray-600">
                  Publications: {selectedFaculty.publications}
                </p>
                <div>
                  <p className="font-medium text-sm mt-2 mb-1">Research Areas:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {selectedFaculty.researchAreas.map((area, idx) => (
                      <li key={idx}>{area}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FacultyCarousel;
