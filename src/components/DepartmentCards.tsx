import React from 'react';
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
}

interface DepartmentCardsProps {
  departments: Department[];
}

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Radio,
  Settings,
  Building,
  Users,
  BookOpen,
  Brain,
  Globe,
  Briefcase
};

const DepartmentCards: React.FC<DepartmentCardsProps> = ({ departments }) => {
  return (
    <div className="px-4 py-6 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Our Departments
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => {
          const IconComponent = iconMap[dept.icon] || Monitor;

          return (
            <div
              key={dept.id}
              className="relative rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background image */}
              <div className="relative h-60 sm:h-64 md:h-72">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover"
                />

                {/* Icon Top-Left */}
                <div className="absolute top-2 left-2 bg-white/90 p-1 rounded-md sm:p-2">
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
                </div>

                {/* Top-right Badge */}
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                  {dept.shortName}
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end text-white text-sm sm:text-base leading-snug">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{dept.name}</h3>
                  <p className="line-clamp-5">{dept.description}</p>
                </div>
              </div>

              {/* Explore Button */}
              <div className="flex justify-between items-center px-4 py-2 bg-gray-50">
                <Link
                  to={`/department/${dept.id}`}
                  className="text-sm text-yellow-600 font-medium flex items-center hover:text-yellow-800"
                >
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentCards;
