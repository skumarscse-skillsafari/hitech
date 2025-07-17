import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Mail, ExternalLink } from 'lucide-react';
import FacultyModal from './FacultyModal';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  education: string;
  image?: string;
  email: string;
  description: string;
  patents?: string;
  publications?: string;
}

interface FacultyCarouselProps {
  faculty?: FacultyMember[];
  departmentName?: string;
}

const FacultyCarousel: React.FC<FacultyCarouselProps> = ({
  faculty = [],
  departmentName = 'Department',
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);
  const cardWidth = 320; // Fixed width for each card
  const itemsToShow = 3;

  const maxIndex = faculty.length - itemsToShow;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const openModal = (member: FacultyMember) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-2xl font-bold text-gray-900">Meet our Faculty</h4>
          <p className="text-gray-600">Faculty members of {departmentName} Department</p>
        </div>
        {faculty.length > itemsToShow && (
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * cardWidth}px)`,
            width: `${faculty.length * cardWidth}px`,
          }}
        >
          {faculty.map((member) => (
            <div
              key={member.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${cardWidth}px` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-yellow-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || '/images/default-faculty.jpg'}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/default-faculty.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {member.email && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md"
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

                {/* Details */}
                <div className="p-4 space-y-2">
                  <h5 className="text-lg font-bold text-gray-900 group-hover:text-yellow-700">
                    {member.name}
                  </h5>
                  {member.designation && (
                    <p className="text-yellow-600 font-semibold text-sm">
                      {member.designation}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium text-gray-800">Specialized in:</span>{' '}
                    {member.specialization || ''}
                  </p>
                  {member.education && (
                    <p className="text-sm text-gray-600">
                      <strong>Education:</strong> {member.education}
                    </p>
                  )}

                  <button
                    onClick={() => openModal(member)}
                    className="text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center space-x-1 group"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && <FacultyModal member={selectedMember} onClose={closeModal} />}
    </div>
  );
};

export default FacultyCarousel;
