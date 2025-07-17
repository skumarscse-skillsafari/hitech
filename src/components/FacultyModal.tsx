import React from 'react';
import {
  X,
  Mail,
  User,
  GraduationCap,
  Briefcase,
  Info,
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
  image?: string;
}

interface FacultyModalProps {
  member: FacultyMember;
  onClose: () => void;
}

const FacultyModal: React.FC<FacultyModalProps> = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="bg-white w-full max-w-4xl mx-4 md:mx-auto rounded-2xl shadow-2xl p-8 relative animate-fadeIn overflow-y-auto max-h-[90vh] border border-gray-200">
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 transition"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>

        {/* Photo */}
        <div className="w-36 h-36 rounded-full overflow-hidden mx-auto border-4 border-gray-200 shadow-md mb-6">
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
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-yellow-600 text-sm font-medium mt-1">
            {member.designation || '—'}
          </p>
        </div>

        {/* Info Sections */}
        <div className="space-y-6 text-sm text-gray-800 divide-y divide-gray-200">
          {/* Education */}
          <div className="flex items-start gap-4 pt-0">
            <GraduationCap className="h-5 w-5 text-orange-500 mt-0.5" />
            <div>
              <p className="font-semibold">Education</p>
              <p>{member.education || '—'}</p>
            </div>
          </div>

          {/* Specialization */}
          <div className="flex items-start gap-4 pt-6">
            <User className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-semibold">Specialization</p>
              <p>{member.specialization || '—'}</p>
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-start gap-4 pt-6">
            <Briefcase className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-semibold">Experience</p>
              <p>{member.experience || '—'}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 pt-6">
            <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-semibold">Email</p>
              {member.email ? (
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 underline break-words"
                >
                  {member.email}
                </a>
              ) : (
                <p>—</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="flex items-start gap-4 pt-6">
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

