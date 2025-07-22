import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  ExternalLink,
  GraduationCap,
  Brain,
} from 'lucide-react';
import FacultyModal from './FacultyModal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  publications?: string;
  patents?: string;
}

const getHighestDegree = (education: string): string => {
  const degreeOrder = ['Ph.D', 'PhD', 'D.Sc', 'M.E', 'M.Tech', 'M.Sc', 'MBA', 'MCA', 'B.E', 'B.Tech', 'B.Sc', 'BCA'];
  const found = degreeOrder.find((degree) => education?.toUpperCase().includes(degree.toUpperCase()));
  return found || education;
};

interface FacultyCarouselProps {
  faculty?: FacultyMember[];
  departmentName?: string;
}

const FacultyCarousel: React.FC<FacultyCarouselProps> = ({
  faculty = [],
  departmentName = 'Department',
}) => {
  const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);
  const sliderRef = React.useRef<Slider | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const openModal = (member: FacultyMember) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg relative">
      {/* Header and buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
        <div>
          <h4 className="text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Meet our Faculty</h4>
          <p className="text-gray-600">Faculty members of {departmentName} Department</p>
        </div>

        {faculty.length > 3 && (
          <div className="flex items-center gap-2 justify-end">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-yellow-200 flex items-center justify-center"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-yellow-200 flex items-center justify-center"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>

      {/* Slider section */}
      {faculty.length > 0 ? (
        <Slider ref={sliderRef} {...sliderSettings}>
          {faculty.map((member) => (
            <div key={member.id} className="px-3">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-200 hover:border-yellow-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || '/images/default-faculty.jpg'}
                    alt={`Faculty photo of ${member.name}`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/default-faculty.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Email */}
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

                  {/* Experience */}
                  {member.experience && (
                    <div className="absolute bottom-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {member.experience}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h5 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors mb-1">
                      {member.name}
                    </h5>
                    {member.designation && (
                      <p className="text-yellow-600 font-semibold text-sm">{member.designation}</p>
                    )}

                    <div className="flex items-start gap-2 text-sm text-gray-600 mt-2">
                      <Brain className="h-4 w-4 text-purple-600 mt-0.5" />
                      <span>
                        <span className="font-medium text-gray-800">Specialization:</span>{' '}
                        {member.specialization || '—'}
                      </span>
                    </div>

                    {member.education && (
                      <div className="flex items-start gap-2 text-sm text-gray-600 mt-2">
                        <GraduationCap className="h-4 w-4 text-blue-600 mt-0.5" />
                        <span>
                          <strong>Education:</strong> {getHighestDegree(member.education)}
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => openModal(member)}
                      className="text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center space-x-1 group mt-3"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-600">No faculty information available at this time</p>
        </div>
      )}

      {selectedMember && <FacultyModal member={selectedMember} onClose={closeModal} />}
    </div>
  );
};

export default FacultyCarousel;
