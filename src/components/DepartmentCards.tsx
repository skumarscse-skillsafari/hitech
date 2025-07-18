import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Radio, Settings, Building, ArrowRight, Users, BookOpen, Brain, Globe, Briefcase } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  image: string;
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

const DepartmentCards: React.FC<DepartmentCardsProps> = ({ departments }) => {
  return (
    <section id="departments" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Departments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our world-class departments with cutting-edge curriculum, distinguished faculty, and state-of-the-art facilities
          </p>
        </div>

        {/* Department Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((dept) => {
            const IconComponent = iconMap[dept.icon as keyof typeof iconMap] || Monitor;
            
            return (
              <div 
                key={dept.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
              >
                {/* Department Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6 bg-white/90 p-3 rounded-lg">
                    <IconComponent className="h-3 w-3 text-gray-600" />
                  </div>
                  
                  {/* Department Badge */}
                  <div className="absolute top-6 right-6 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {dept.shortName}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-2">
                        <BookOpen className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="text-2xl font-bold text-gray-900">{dept.programs.length}</span>
                      </div>
                      <div className="text-sm text-gray-600">Programs</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="text-2xl font-bold text-gray-900">{dept.faculty.length}</span>
                      </div>
                      <div className="text-sm text-gray-600">Faculty</div>
                    </div>
                  </div>

                  {/* Programs Preview */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Programs Offered:</h4>
                    <div className="space-y-2">
                      {dept.programs.slice(0, 2).map((program, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-gray-700">{program.name}</span>
                          <span className="text-yellow-600 font-medium">{program.duration}</span>
                        </div>
                      ))}
                      {dept.programs.length > 2 && (
                        <div className="text-sm text-gray-500">
                          +{dept.programs.length - 2} more programs
                        </div>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link
                    to={`/department/${dept.id}`}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group/btn"
                  >
                    <span>Explore {dept.shortName}</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Departments Button */}
        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Explore All Departments</h3>
            <p className="text-gray-600 mb-4">Discover detailed information about our programs, faculty, and facilities</p>
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept) => (
                <Link
                  key={dept.id}
                  to={`/department/${dept.id}`}
                  className="bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-700 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  {dept.shortName}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DepartmentCards;