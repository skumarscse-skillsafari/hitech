import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  Award,
  Shield,
  Star,
  Trophy,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import dqEmploy from '../../public/dq_employability.jpg';
import dqTSchool from '../../public/dq_tschool.jpg';
import heRank from '../../public/he_ranking.jpg';
import theWeek from '../../public/the_week.jpg';
import indiaToday from '../../public/india_today.jpg';
import csr from '../../public/csr.jpg';
import times from '../../public/times.jpg';
import aicte from '../../public/aicte.jpg';
import annaUniv from '../../public/annauniversity.jpg';
import nba from '../../public/nba.jpg';
import nirf from '../../public/nirf_logo.jpg';
import naac from '../../public/naac.jpg';
import iso from '../../public/isoo.jpg';
import dqEmployPopup from '../../public/Screenshot 2025-07-18 142539.png'; // uploaded image

interface Accreditation {
  name: string;
  fullName: string;
  rankings: string[];
  logo: string;
  color: string;
  icon: string;
}

const AccreditationCards: React.FC = () => {
  const iconMap = { Award, Shield, Star, Trophy, CheckCircle };

  const accreditations: Accreditation[] = [
    {
      name: 'DATA QUEST',
      fullName: 'Employability Index Ranking - 2025',
      rankings: [
        'Ranked 48 – All India Private Engineering Colleges',
        'Ranked 55 – All India (Government + Private) Engineering Colleges',
      ],
      logo: dqEmploy,
      color: 'from-blue-50 to-blue-100',
      icon: 'Shield',
    },
    {
      name: 'Data Quest',
      fullName: 'Best T-Schools 2025',
      rankings: [
        'Ranked 68 – All India Private Engineering Colleges',
        'Ranked 74 – All India (Government + Private) Engineering Colleges',
      ],
      logo: dqTSchool,
      color: 'from-green-50 to-green-100',
      icon: 'Award',
    },
    {
      name: 'HE Ranking',
      fullName: 'Higher Education Ranking - 2024',
      rankings: ['Ranked 71 – Best International Level Universities and Colleges'],
      logo: heRank,
      color: 'from-purple-50 to-purple-100',
      icon: 'Trophy',
    },
    {
      name: 'The Week',
      fullName: 'Engineering Survey 2025',
      rankings: [
        'Ranked 139 – All India Engineering Colleges',
        'Ranked 113 – All India Private Engineering Colleges',
        'Ranked 17 – All India Emerging Engineering Colleges',
        'Ranked 71 – South Zone',
        'Ranked 25 – Private Colleges in TN',
      ],
      logo: theWeek,
      color: 'from-yellow-50 to-amber-100',
      icon: 'Star',
    },
    {
      name: 'India Today',
      fullName: 'Survey 2025',
      rankings: [
        'Ranked 161 – Top Engineering Colleges in India',
        'Ranked 131 – Top Private Engineering Colleges',
        'Ranked 51 – Emerging Engineering Colleges',
        'Ranked 40 – Emerging Private Engineering Colleges',
      ],
      logo: indiaToday,
      color: 'from-orange-50 to-orange-100',
      icon: 'Award',
    },
    {
      name: 'CSR Review',
      fullName: 'Engineering Colleges Survey 2025',
      rankings: [
        'Ranked 2 – Top Emerging Engineering Colleges of Super Excellence',
        'Ranked 6 – Top Engineering Colleges in Tamil Nadu',
        'Ranked 17 – Top 20 by Faculty, Research, Consultancy, EDP & Other Programmes',
      ],
      logo: csr,
      color: 'from-red-50 to-red-100',
      icon: 'CheckCircle',
    },
    {
      name: 'Times Ranking',
      fullName: 'Annual Top Engineering Institute Ranking Survey - 2025',
      rankings: ['Ranked 135 – Top 175 Engineering Institute Rankings 2025'],
      logo: times,
      color: 'from-indigo-50 to-indigo-100',
      icon: 'Trophy',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (index: number) => {
    const isDqEmployCard =
      accreditations[index].name === 'DATA QUEST' &&
      accreditations[index].fullName.includes('Employability');
    if (isDqEmployCard) {
      setShowModal(true);
    } else {
      setExpandedIndex(prev => (prev === index ? null : index));
    }
  };

  const allLogos = [
    dqEmploy,
    dqTSchool,
    heRank,
    theWeek,
    indiaToday,
    csr,
    times,
    aicte,
    annaUniv,
    nba,
    nirf,
    naac,
    iso,
  ];

  return (
    <section className="py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Rankings & Recognitions</h2>
          <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our institution is consistently ranked among the top engineering colleges in national surveys and recognized by premier accreditation bodies.
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="overflow-hidden py-8 mb-12 bg-white rounded-2xl shadow-lg">
          <div className="flex animate-scroll space-x-12">
            {[...allLogos, ...allLogos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img
                  src={logo}
                  alt={`Accreditation ${idx}`}
                  className="h-16 w-16 object-cover rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 p-8">
            <h3 className="text-3xl font-bold text-white text-center">National Rankings Overview</h3>
          </div>

          <div className="p-8">
            <Slider {...sliderSettings}>
              {accreditations.map((accred, index) => {
                const IconComponent = iconMap[accred.icon as keyof typeof iconMap] || Award;
                const isExpanded = expandedIndex === index;
                const hasMore = accred.rankings.length > 1;

                return (
                  <div key={index} className="px-3">
                    <div
                      className={`bg-gradient-to-br ${accred.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 overflow-hidden ${isExpanded ? 'h-auto' : 'h-[420px]'}`}
                    >
                      <div className="p-6 text-center cursor-pointer" onClick={() => handleCardClick(index)}>
                        <div className="relative mx-auto w-24 h-24 mb-4">
                          <div className="w-full h-full bg-white rounded-full shadow-xl overflow-hidden flex items-center justify-center">
                            <img
                              src={accred.logo}
                              alt={accred.name}
                              className="w-full h-full object-cover  rounded-full"
                              style={{ objectPosition: 'center' }}
                              onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r  from-yellow-400 to-orange-400 p-2 rounded-full shadow-lg">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">{accred.name}</h4>
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">{accred.fullName}</p>
                      </div>

                      <div className="px-6 pb-6">
                        <div className="space-y-3 ">
                          <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-white/40">
                            <p className="text-sm font-semibold text-gray-700 leading-relaxed">{accred.rankings[0]}</p>
                          </div>
                          {isExpanded && accred.rankings.slice(1).map((ranking, i) => (
                            <div key={i} className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-white/40 animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
                              <p className="text-sm font-semibold text-gray-700 leading-relaxed">{ranking}</p>
                            </div>
                          ))}
                        </div>

                        {hasMore && (
                          <div className="mt-6 text-center">
                            <button
                              onClick={() => handleCardClick(index)}
                              className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-gray-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                              {isExpanded ? (
                                <>
                                  Show Less
                                  <ChevronUp className="h-4 w-4" />
                                </>
                              ) : (
                                <>
                                  Show More ({accred.rankings.length - 1} more)
                                  <ChevronDown className="h-4 w-4" />
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            <div className="p-6 text-center">
              <img
                src={dqEmployPopup}
                alt="Data Quest Employability"
                className="mx-auto rounded-xl max-h-72 object-contain mb-6 shadow-lg"
              />
              <p className="text-lg font-medium text-gray-700 leading-relaxed">
                HiTech is ranked as Ranked <span className="font-bold text-orange-500">"48"</span> Under All Over India - Private Engineering Colleges,
                Ranked <span className="font-bold text-orange-500">“55”</span> Under All Over India - Both Government and Private Engineering Colleges
                by <span className="font-semibold text-blue-600">DATA QUEST Employability Index Ranking -2025</span><br />
                
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .slick-dots {
          bottom: -50px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #f59e0b;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #f59e0b;
        }
        .slick-prev:before,
        .slick-next:before {
          font-size: 20px;
          color: #f59e0b;
        }
      `}</style>
    </section>
  );
};

export default AccreditationCards;
