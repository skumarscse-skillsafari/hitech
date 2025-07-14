import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Shield, Star, Trophy, CheckCircle } from 'lucide-react';

interface Accreditation {
  name: string;
  fullName: string;
  grade: string;
  logo: string;
  color: string;
  icon: string;
  description: string;
  validUntil?: string;
}

interface AccreditationCardsProps {
  accreditations: Accreditation[];
}

const AccreditationCards: React.FC<AccreditationCardsProps> = ({ accreditations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const iconMap = {
    Award,
    Shield,
    Star,
    Trophy,
    CheckCircle
  };

  const enhancedAccreditations = [
    {
      name: 'AICTE',
      fullName: 'All India Council for Technical Education',
      grade: 'Approved',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-blue-50 border-blue-200 text-blue-700',
      icon: 'Shield',
      description: 'Statutory body for technical education approval and regulation',
      validUntil: '2025'
    },
    {
      name: 'Anna University',
      fullName: 'Anna University, Chennai',
      grade: 'Affiliated',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-green-50 border-green-200 text-green-700',
      icon: 'Award',
      description: 'State university affiliation for degree programs',
      validUntil: 'Permanent'
    },
    {
      name: 'NBA',
      fullName: 'National Board of Accreditation',
      grade: 'Accredited',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-purple-50 border-purple-200 text-purple-700',
      icon: 'Trophy',
      description: 'Quality assurance for technical education programs',
      validUntil: '2026'
    },
    {
      name: 'NAAC',
      fullName: 'National Assessment and Accreditation Council',
      grade: 'A+ Grade',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-yellow-50 border-yellow-200 text-yellow-700',
      icon: 'Star',
      description: 'Institutional accreditation for quality education',
      validUntil: '2027'
    },
    {
      name: 'NIRF',
      fullName: 'National Institutional Ranking Framework',
      grade: 'Top 50',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-orange-50 border-orange-200 text-orange-700',
      icon: 'Award',
      description: 'Government ranking framework for higher education',
      validUntil: '2024'
    },
    {
      name: 'ISO',
      fullName: 'International Organization for Standardization',
      grade: '9001:2015',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-red-50 border-red-200 text-red-700',
      icon: 'CheckCircle',
      description: 'International quality management system certification',
      validUntil: '2025'
    }
  ];

  const totalPages = Math.ceil(enhancedAccreditations.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= enhancedAccreditations.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, enhancedAccreditations.length - itemsPerPage) : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const currentAccreditations = enhancedAccreditations.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Approvals & Accreditations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is recognized by leading national and international bodies
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">
              Quality Assurance & Recognition
            </h3>
            
            {/* Navigation Controls */}
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

          {/* Accreditation Cards */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
              {currentAccreditations.map((accred, index) => {
                const IconComponent = iconMap[accred.icon as keyof typeof iconMap] || Award;
                return (
                  <div 
                    key={index}
                    className={`${accred.color} p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
                  >
                    <div className="text-center space-y-6">
                      {/* Logo */}
                      <div className="relative mx-auto w-24 h-24 bg-white rounded-full p-4 shadow-lg group-hover:shadow-xl transition-shadow">
                        <img 
                          src={accred.logo} 
                          alt={accred.name}
                          className="w-full h-full object-contain rounded-full"
                        />
                        <div className="absolute -top-2 -right-2 bg-yellow-500 p-2 rounded-full">
                          <IconComponent className="h-4 w-4 text-gray-900" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-2xl font-bold mb-2">{accred.name}</h4>
                        <p className="text-sm opacity-80 mb-3">{accred.fullName}</p>
                        <div className="bg-white/70 px-4 py-2 rounded-full inline-block mb-4">
                          <span className="font-bold text-lg">{accred.grade}</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">{accred.description}</p>
                        {accred.validUntil && (
                          <div className="text-xs font-medium opacity-75">
                            Valid until: {accred.validUntil}
                          </div>
                        )}
                      </div>

                      {/* Hover Effect */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="text-sm font-medium">
                          Click to learn more
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 inline-block">
                <p className="text-gray-700">
                  <span className="font-bold text-yellow-700">{enhancedAccreditations.length}</span> prestigious 
                  accreditations validating our commitment to educational excellence
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AccreditationCards;