import React from 'react';
import { Monitor, Radio, Settings, Building, ArrowRight, Users, BookOpen, Award, Lightbulb, Mail } from 'lucide-react';
import LazyLoadWrapper from './LazyLoadWrapper';

interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  image: string;
  vision: string;
  mission: string;
  programs: Array<{
    name: string;
    duration: string;
    intake: string;
    eligibility: string;
  }>;
  specializations: string[];
  facilities: string[];
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

interface DepartmentDetailProps {
  department: Department;
}

const iconMap = {
  Monitor,
  Radio,
  Settings,
  Building,
};

const DepartmentDetail: React.FC<DepartmentDetailProps> = ({ department }) => {
  const IconComponent = iconMap[department.icon as keyof typeof iconMap] || Monitor;

  return (
    <div className="space-y-8">
      {/* Department Header */}
      <LazyLoadWrapper height="300px" delay={500}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={department.image} 
              alt={department.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            {/* Icon */}
            <div className="absolute top-6 left-6 bg-white/90 p-4 rounded-lg">
              <IconComponent className="h-8 w-8 text-gray-600" />
            </div>
            
            {/* Department Info */}
            <div className="absolute bottom-6 left-6 text-white">
              <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-2 inline-block">
                {department.shortName}
              </div>
              <h1 className="text-3xl font-bold mb-2">{department.name}</h1>
              <p className="text-gray-200 max-w-md">{department.description}</p>
            </div>
          </div>
        </div>
      </LazyLoadWrapper>

      {/* Vision & Mission */}
      <LazyLoadWrapper height="200px" delay={800}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
              <Award className="h-5 w-5 text-yellow-500" />
              <span>Vision</span>
            </h4>
            <p className="text-gray-700 leading-relaxed">{department.vision}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-yellow-500" />
              <span>Mission</span>
            </h4>
            <p className="text-gray-700 leading-relaxed">{department.mission}</p>
          </div>
        </div>
      </LazyLoadWrapper>

      {/* Programs Offered */}
      <LazyLoadWrapper height="300px" delay={1000}>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Programs Offered</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {department.programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300 group">
                <h5 className="font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">{program.name}</h5>
                <div className="space-y-2 text-sm text-gray-600">
                  <div><span className="font-medium">Duration:</span> {program.duration}</div>
                  <div><span className="font-medium">Intake:</span> {program.intake}</div>
                  <div><span className="font-medium">Eligibility:</span> {program.eligibility}</div>
                </div>
                <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </LazyLoadWrapper>

      {/* Specializations */}
      <LazyLoadWrapper height="150px" delay={1200}>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Specializations</h4>
          <div className="flex flex-wrap gap-3">
            {department.specializations.map((spec, index) => (
              <span key={index} className="bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium border border-yellow-200 hover:bg-yellow-100 transition-colors">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </LazyLoadWrapper>

      {/* Facilities */}
      <LazyLoadWrapper height="200px" delay={1400}>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Facilities & Infrastructure</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {department.facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center space-x-3 hover:bg-yellow-50 hover:border-yellow-300 border border-gray-200 transition-all duration-300 group">
                <div className="w-3 h-3 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform"></div>
                <span className="text-gray-800 group-hover:text-yellow-700 transition-colors font-medium">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </LazyLoadWrapper>

      {/* Action Button */}
      <div className="text-center pt-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg">
          <span>Learn More About {department.shortName}</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default DepartmentDetail;