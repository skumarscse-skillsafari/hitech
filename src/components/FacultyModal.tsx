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
  publications?: string;
  image?: string;
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

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto backdrop-blur-sm px-4 py-12">
      <div
        ref={modalRef}
        className={`relative bg-white w-full max-w-3xl mx-auto rounded-xl shadow-xl p-5 sm:p-6 border border-gray-200 transform transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
          onClick={handleClose}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Faculty Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-gray-200 shadow mb-4">
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
        <div className="text-center mb-5">
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-yellow-600 text-sm mt-1">
            {member.designation || '—'}
          </p>
        </div>

        {/* Info Sections */}
        <div className="space-y-4 text-sm text-gray-800 divide-y divide-gray-200">
          <div className="flex items-start gap-3 pt-0">
            <GraduationCap className="h-5 w-5 text-orange-500 mt-0.5" />
            <div>
              <p className="font-semibold">Education</p>
              <p>{member.education || '—'}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-4">
            <User className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-semibold">Specialization</p>
              <p>{member.specialization || '—'}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-4">
            <Briefcase className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-semibold">Experience</p>
              <p>{member.experience || '—'}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-4">
            <PenTool className="h-5 w-5 text-purple-600 mt-0.5" />
            <div>
              <p className="font-semibold">Patents</p>
              <p>{member.patents || '—'}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-4">
            <FileText className="h-5 w-5 text-pink-600 mt-0.5" />
            <div>
              <p className="font-semibold">Publications</p>
              <p>{member.publications || '—'}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-4">
            <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-semibold">Email</p>
              {member.email ? (
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 underline break-words hover:text-blue-800"
                >
                  {member.email}
                </a>
              ) : (
                <p>—</p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3 pt-4">
            <Info className="h-5 w-5 text-gray-600 mt-1" />
            <div>
              <p className="font-semibold mb-1">Description</p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {member.description || '—'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyModal;
