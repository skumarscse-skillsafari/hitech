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
  ChevronRight,
  ChevronLeft,
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
import dqEmployPopup from '../../public/data/dq_employ.png';
import dqTSchoolPopup from '../../public/data/dq_tschool_popup.png';
import heRankPopup from '../../public/data/he_popup.png';
import theWeekPopup from '../../public/data/theweek_popup.png';
import indiaTodayPopup from '../../public/data/indiatoday_popup.png';
import csrPopup from '../../public/data/csrank.png';
import timesPopup from '../../public/data/timesrank.png';

interface Accreditation {
  name: string;
  fullName: string;
  rankings: string[];
  logo: string;
  color: string;
  
  popupImage?: string;
  popupDescription?: string;
}

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-[-15px] md:right-[-35px] top-1/2 transform -translate-y-1/2 bg-[#fdeedb] hover:bg-[#fcd3a1] rounded-full shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer z-10 transition-all duration-300"
    >
      <ChevronRight className="text-[#f59e0b] w-4 h-4 md:w-6 md:h-6" />
    </div>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-[-15px] md:left-[-35px] top-1/2 transform -translate-y-1/2 bg-[#fdeedb] hover:bg-[#fcd3a1] rounded-full shadow-lg w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer z-10 transition-all duration-300"
    >
      <ChevronLeft className="text-[#f59e0b] w-4 h-4 md:w-6 md:h-6" />
    </div>
  );
};

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
      
      popupImage: dqEmployPopup,
      popupDescription:
        'HiTech is ranked <span class="font-bold text-orange-500">"48"</span> Under All Over India - Private Engineering Colleges, Ranked <span class="font-bold text-orange-500">"55"</span> Under All Over India - Both Government and Private Engineering Colleges by <span class="font-semibold text-blue-600">DATA QUEST Employability Index Ranking - 2025</span>',
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
      
      popupImage: dqTSchoolPopup,
      popupDescription:
        'HiTech is ranked <span class="font-bold text-orange-500">"68"</span> Under All Over India - Private Engineering Colleges, Ranked <span class="font-bold text-orange-500">"74"</span> Under All Over India - Both Government and Private Engineering Colleges by <span class="font-semibold text-blue-600">Data Quest Best T-Schools 2025</span>',
    },
    {
      name: 'HE Ranking',
      fullName: 'Higher Education Ranking - 2024',
      rankings: ['Ranked 71 – Best International Level Universities and Colleges'],
      logo: heRank,
      color: 'from-purple-50 to-purple-100',
      
      popupImage: heRankPopup,
      popupDescription:
        'HiTech is ranked <span class="font-bold text-orange-500">"71"</span> Under Best International Level Universities And Colleges by <span class="font-semibold text-blue-600">HE Higher Education Ranking-2024</span>',
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
      
      popupImage: theWeekPopup,
      popupDescription:
        'HiTech is ranked <span class="font-bold text-orange-500">"139"</span> in All India Engineering Colleges, <span class="font-bold text-orange-500">"113"</span> in Private Engineering Colleges, and <span class="font-bold text-orange-500">"17"</span> in Emerging Engineering Colleges by <span class="font-semibold text-blue-600">The Week Engineering Survey 2025</span>',
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
      
      popupImage: indiaTodayPopup,
      popupDescription:
        'HiTech is ranked <span class="font-bold text-orange-500">"161"</span> Under Top Engineering Colleges in India, Ranked <span class="font-bold text-orange-500">"131"</span> Under Top Engineering (Pvt) Colleges in India, Ranked <span class="font-bold text-orange-500">"51"</span> Under Emerging Engineering Colleges in India, Ranked <span class="font-bold text-orange-500">"40"</span> Under Emerging Engineering (Pvt) Colleges in India, by <span class="font-semibold text-blue-600">India Today Survey 2025</span>',
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
    
      popupImage: csrPopup,
      popupDescription:
        'HiTech is ranked <span class="font-bold text-orange-500">"2"</span> Under Top Emerging Engineering Colleges of Super Excellence, Ranked <span class="font-bold text-orange-500">"6"</span> Under Top Engineering Colleges in Tamilnadu, Ranked <span class="font-bold text-orange-500">"17"</span> Under Top 20 Engineering Colleges Ranked by Faculty, Research, Consultancy, EDP & Other Programmes by <span class="font-semibold text-blue-600">Competition Success Review Engineering Colleges Survey 2025</span>',
    },
    {
      name: 'Times Ranking',
      fullName: 'Annual Top Engineering Institute Ranking Survey - 2025',
      rankings: ['Ranked 135 – Top 175 Engineering Institute Rankings 2025'],
      logo: times,
      color: 'from-indigo-50 to-indigo-100',
 
      popupImage: timesPopup,
      popupDescription:
        'HiTech is ranked <span class="font-bold text-orange-500">"135"</span> Under Top 175 Engineering Institute Rankings 2025, by <span class="font-semibold text-blue-600">Times Annual Top Engineering Institute Ranking Survey 2025</span>',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<number | null>(null);

  const handleShowMoreClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  const handleCardClick = (index: number) => {
    if (accreditations[index].popupImage) {
      setShowModal(index);
    }
  };

  const allLogos = [
    dqEmploy, dqTSchool, heRank, theWeek, indiaToday,
    csr, times, aicte, annaUniv, nba, nirf, naac, iso,
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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          slidesToScroll: 1
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        } 
      },
    ],
  };

  return (
    <section className="py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Rankings & Recognitions</h2>
          <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our institution is consistently ranked among the top engineering colleges in national surveys and recognized by premier accreditation bodies.
          </p>
        </div>

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

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">National Rankings Overview</h3>
          </div>

          <div className="p-4 md:p-8 relative">
            <Slider {...sliderSettings}>
              {accreditations.map((accred, index) => {
              
                const isExpanded = expandedIndex === index;
                const hasMore = accred.rankings.length > 1;
                const hasPopup = !!accred.popupImage;

                return (
                  <div key={index} className="px-2 md:px-3">
                    <div
                      className={`bg-gradient-to-br ${accred.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 overflow-hidden min-h-[300px]`}
                      onClick={() => hasPopup && handleCardClick(index)}
                    >
                      <div className="p-4 md:p-6 text-center cursor-pointer">
                        <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-4">
                          <div className="w-full h-full bg-white rounded-full shadow-xl overflow-hidden flex items-center justify-center">
                            <img
                              src={accred.logo}
                              alt={accred.name}
                              className="w-full h-full object-cover rounded-full"
                              style={{ objectPosition: 'center' }}
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-full shadow-lg">
                          
                          </div>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{accred.name}</h4>
                        <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">{accred.fullName}</p>
                      </div>

                      <div className="px-4 md:px-6 pb-4 md:pb-6">
                        <div className="space-y-2 md:space-y-3">
                          <div className="bg-white/80 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm border border-white/40">
                            <p className="text-xs md:text-sm font-semibold text-gray-700 leading-relaxed">{accred.rankings[0]}</p>
                          </div>
                          {isExpanded && accred.rankings.slice(1).map((ranking, i) => (
                            <div key={i} className="bg-white/80 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm border border-white/40 animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
                              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-relaxed">{ranking}</p>
                            </div>
                          ))}
                        </div>
                        {hasMore && (
                          <div className="mt-4 md:mt-6 text-center">
                            <button
                              onClick={(e) => handleShowMoreClick(index, e)}
                              className="inline-flex items-center gap-1 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/90 hover:bg-white text-gray-700 text-sm md:text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                              {isExpanded ? (
                                <>
                                  Show Less <ChevronUp className="h-3 w-3 md:h-4 md:w-4" />
                                </>
                              ) : (
                                <>
                                  Show More ({accred.rankings.length - 1} more) <ChevronDown className="h-3 w-3 md:h-4 md:w-4" />
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

      {showModal !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(null)}
              className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>
            <div className="p-4 md:p-6 text-center">
              <img
                src={accreditations[showModal].popupImage}
                alt="Popup"
                className="mx-auto rounded-xl max-h-[60vh] object-contain mb-4 md:mb-6 shadow-lg"
              />
              <p
                className="text-base md:text-lg font-medium text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: accreditations[showModal].popupDescription || '' }}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-scroll { animation: scroll 30s linear infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .slick-dots { bottom: -40px; }
        .slick-dots li button:before {
          font-size: 10px;
          color: #f59e0b;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #f59e0b;
        }
        @media (max-width: 768px) {
          .slick-dots { bottom: -30px; }
        }
      `}</style>
    </section>
  );
};

export default AccreditationCards;