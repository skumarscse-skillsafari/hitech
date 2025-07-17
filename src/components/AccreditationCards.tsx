import React, { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  Star,
  Trophy,
  CheckCircle,
} from 'lucide-react';

import aicte from '../../public/aicte.jpg';
import ann from '../../public/annauniversity.jpg';
import nba from '../../public/nba.jpg';
import naac from '../../public/naac.jpg';
import nirf from '../../public/nirf_logo.jpg';
import iso from '../../public/isoo.jpg';

interface Accreditation {
  name: string;
  fullName: string;
  grade: string;
  logo: string;
  color: string;
  icon: string;
  
  validUntil?: string;
}

const AccreditationCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const iconMap = {
    Award,
    Shield,
    Star,
    Trophy,
    CheckCircle,
  };

  const accreditations: Accreditation[] = [
    {
      name: 'AICTE',
      fullName: 'All India Council for Technical Education',
      grade: 'Approved',
      logo: aicte,
      color: 'bg-blue-50 border-blue-200 text-blue-700',
      icon: 'Shield',
    
      validUntil: '2025',
    },
    {
      name: 'Anna University',
      fullName: 'Anna University, Chennai',
      grade: 'Affiliated',
      logo: ann,
      color: 'bg-green-50 border-green-200 text-green-700',
      icon: 'Award',
    
      validUntil: 'Permanent',
    },
    {
      name: 'NBA',
      fullName: 'National Board of Accreditation',
      grade: 'Accredited',
      logo: nba,
      color: 'bg-purple-50 border-purple-200 text-purple-700',
      icon: 'Trophy',
     
      validUntil: '2026',
    },
    {
      name: 'NAAC',
      fullName: 'National Assessment and Accreditation Council',
      grade: 'A Grade',
      logo: naac,
      color: 'bg-yellow-50 border-yellow-200 text-yellow-700',
      icon: 'Star',
    
      validUntil: '2027',
    },
    {
      name: 'NIRF',
      fullName: 'National Institutional Ranking Framework',
      grade: 'Top 50',
      logo: nirf,
      color: 'bg-orange-50 border-orange-200 text-orange-700',
      icon: 'Award',

      validUntil: '2024',
    },
    {
      name: 'ISO',
      fullName: 'International Organization for Standardization',
      grade: '9001:2015',
      logo: iso,
      color: 'bg-red-50 border-red-200 text-red-700',
      icon: 'CheckCircle',
      
      validUntil: '2025',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % accreditations.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? accreditations.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleAccreditations = () => {
    const visible: Accreditation[] = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(accreditations[(currentIndex + i) % accreditations.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h3 className="text-2xl font-bold text-gray-900">Quality Assurance & Recognition</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={prev}
                className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full transition-colors group"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
              </button>
              <button
                onClick={next}
                className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full transition-colors group"
              >
                <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 p-8 transition-all duration-700">
            {getVisibleAccreditations().map((accred, index) => {
              const IconComponent = iconMap[accred.icon as keyof typeof iconMap] || Award;
              return (
                <div
                  key={index}
                  className={`${accred.color} p-6 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer`}
                >
                  <div className="text-center space-y-4">
                    <div className="relative mx-auto w-20 h-20 bg-white rounded-full p-4 shadow-lg group-hover:shadow-xl">
                      <img
                        src={accred.logo}
                        alt={accred.name}
                        className="w-full h-full object-contain rounded-full"
                      />
                      <div className="absolute -top-2 -right-2 bg-yellow-500 p-2 rounded-full">
                        <IconComponent className="h-4 w-4 text-gray-900" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold">{accred.name}</h4>
                    <p className="text-sm text-gray-600">{accred.fullName}</p>
                    <div className="bg-white/70 px-3 py-1 rounded-full inline-block text-lg font-bold">
                      {accred.grade}
                    </div>
                    <p className="text-sm">{accred.description}</p>
                    {accred.validUntil && (
                      <div className="text-xs text-gray-500">
                        Valid until: {accred.validUntil}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default AccreditationCards;