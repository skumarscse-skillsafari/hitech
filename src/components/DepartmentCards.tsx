import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor, Radio, Settings, Building, ArrowRight,
  Users, BookOpen, Brain, Globe, Briefcase
} from 'lucide-react';

interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  image: string;
  hasExternalLink?: boolean;
  externalUrl?: string;
  programs: Array<{
    name: string;
    duration: string;
    intake: string;
    eligibility: string;
  }>;
  faculty: Array<{
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
  }>;
}

interface DepartmentCardsProps {
  departments: Department[];
}

const iconMap = {
  Monitor,
  Radio,
  Settings,
  Building,
  Brain,
  Globe,
  Briefcase,
};

const DepartmentCardItem: React.FC<{ dept: Department }> = ({ dept }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[dept.icon as keyof typeof iconMap] || Monitor;

  const WORD_LIMIT = 40;
  const words = dept.description.split(' ');
  const isLong = words.length > WORD_LIMIT;
  const displayedText = isExpanded 
    ? dept.description 
    : words.slice(0, WORD_LIMIT).join(' ') + (isLong ? '...' : '');

  return (
    <div
      className="bg-white w-[90%] sm:w-full mx-auto rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Department Image */}
      <div className="relative min-h-[280px] sm:h-48 overflow-hidden flex-shrink-0">
        <img
          src={dept.image}
          alt={dept.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Icon */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/90 p-2 sm:p-3 rounded-lg">
          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
        </div>

        {/* Department Badge */}
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
          {dept.shortName}
        </div>

        {/* Desktop Title */}
        <div className="hidden sm:block absolute bottom-0 w-full px-6 py-6 z-10 text-white">
          <h3 className="text-xl font-bold leading-snug">
            {dept.name}
          </h3>
        </div>
      </div>

      {/* Mobile Title */}
      <div className="block sm:hidden px-5 pt-5 flex-shrink-0">
        <h3 className="text-xl font-bold text-gray-900 leading-snug text-center">
          {dept.name}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 space-y-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-base text-gray-600 leading-relaxed text-justify">
            {displayedText}
          </p>
          
          {isLong && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 focus:outline-none transition-colors"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>

        {/* View Details Button */}
        {dept.hasExternalLink && dept.externalUrl ? (
          <button
            onClick={() => {
              if (dept.externalUrl) {
                window.location.assign(dept.externalUrl);
              }
            }}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group/btn text-base mt-auto cursor-pointer"
          >
            <span>Explore {dept.shortName}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        ) : (
          <Link
            to={`/department/${dept.id}`}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group/btn text-base mt-auto"
          >
            <span>Explore {dept.shortName}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

const DepartmentCards: React.FC<DepartmentCardsProps> = ({ departments }) => {
  return (
    <section id="departments" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Academic Departments
          </h2>
           <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our world-class departments with cutting-edge curriculum, distinguished faculty, and state-of-the-art facilities
          </p>
        </div>

        {/* Department Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {departments.map((dept) => (
            <DepartmentCardItem key={dept.id} dept={dept} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DepartmentCards;
