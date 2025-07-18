import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  Mail,
  User,
  GraduationCap,
  Briefcase,
  Info,
  FileText,
  PenTool,
  CalendarDays,
} from 'lucide-react';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  education: string;
  email: string;
  description: string;
  patents?: string;
  publications?: string | number;
  image?: string;
  joiningDate?: string;
}

interface FacultyModalProps {
  member: FacultyMember;
  onClose: () => void;
}

const FacultyModal: React.FC<FacultyModalProps> = ({ member, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const getSortedEducation = (education: string) => {
    const degreeOrder = [
      'Ph.D',
      'PhD',
      'D.Sc',
      'M.E',
      'M.Tech',
      'M.Sc',
      'MBA',
      'MCA',
      'B.E',
      'B.Tech',
      'B.Sc',
      'BCA',
    ];

    const getRank = (deg: string) =>
      degreeOrder.findIndex((d) =>
        deg.toUpperCase().includes(d.toUpperCase())
      );

    return education
      ?.split(',')
      .map((deg) => deg.trim())
      .sort((a, b) => getRank(a) - getRank(b))
      .reverse()
      .join(', ');
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    return isNaN(date.getTime())
      ? dateStr
      : date.toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto backdrop-blur-sm px-4 py-12">
      <div
        ref={modalRef}
        className={`relative bg-white w-full max-w-3xl mx-auto rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Header Section with Light Orange Background */}
        <div className="bg-amber-100 pb-4 pt-6 px-6 sm:px-8 relative flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-amber-800 transition"
            onClick={handleClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Faculty Image - Centered with adjusted spacing */}
          <div className="w-45 h-36 rounded-full overflow-hidden mx-auto border-4 border-amber-300 shadow-lg">
            <img
              src={member.image || '/images/default-faculty.jpg'}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/default-faculty.jpg';
              }}
            />
          </div>

          {/* Name & Designation */}
          <div className="text-center mt-3">
            <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-amber-600 text-base mt-1">
              {member.designation || '—'}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 space-y-4 text-sm text-gray-800">
          {/* Info Sections */}
          <div className="space-y-4 divide-y divide-gray-200">
            <div className="flex items-start gap-3 pt-0">
              <GraduationCap className="h-6 w-6 text-orange-500 mt-0.5" />
              <div>
                <p className="font-semibold text-base">Education</p>
                <p className="text-base">{getSortedEducation(member.education) || '—'}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <User className="h-6 w-6 text-yellow-500 mt-0.5" />
              <div>
                <p className="font-semibold text-base">Specialization</p>
                <p className="text-base">{member.specialization || '—'}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <Briefcase className="h-6 w-6 text-green-600 mt-0.5" />
              <div>
                <p className="font-semibold text-base">Experience</p>
                <p className="text-base">{member.experience || '—'}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <CalendarDays className="h-6 w-6 text-red-500 mt-0.5" />
              <div>
                <p className="font-semibold text-base">Date of Joining</p>
                <p className="text-base">{formatDate(member.joiningDate)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <PenTool className="h-6 w-6 text-purple-600 mt-0.5" />
              <div>
                <p className="font-semibold text-base">Patents</p>
                <p className="text-base">{member.patents || '—'}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <FileText className="h-6 w-6 text-pink-600 mt-0.5" />
              <div>
                <p className="font-semibold text-base">Number of Publications</p>
                <p className="text-base">{member.publications !== undefined ? member.publications : '—'}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <Mail className="h-6 w-6 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-base">Email</p>
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 underline break-words hover:text-blue-800 text-base"
                  >
                    {member.email}
                  </a>
                ) : (
                  <p className="text-base">—</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4">
              <Info className="h-6 w-6 text-gray-600 mt-1" />
              <div>
                <p className="font-semibold mb-1 text-base">Description</p>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                  {member.description || '—'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyModal;