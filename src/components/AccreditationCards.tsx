import React, { useState } from 'react';
import Slider from 'react-slick';
import {
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
import nba from '../../public/nba.jpg';
import naac from '../../public/naac.jpg';
import nirf from '../../public/nirf_logo.jpg';

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
      className="absolute right-[-25px] md:right-[-27px] top-1/2 transform -translate-y-1/2 bg-[#fdeedb] hover:bg-[#fcd3a1] rounded-full shadow-lg w-10 h-10 md:w-8 md:h-8 flex items-center justify-center cursor-pointer z-20 transition-all duration-300"
    >
      <ChevronRight className="text-[#f59e0b] w-5 h-5 md:w-7 md:h-7" />
    </div>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-[-25px] md:left-[-27px] top-1/2 transform -translate-y-1/2 bg-[#fdeedb] hover:bg-[#fcd3a1] rounded-full shadow-lg w-10 h-10 md:w-8 md:h-8 flex items-center justify-center cursor-pointer z-20 transition-all duration-300"
    >
      <ChevronLeft className="text-[#f59e0b] w-5 h-5 md:w-7 md:h-7" />
    </div>
  );
};

const AccreditationCards: React.FC = () => {
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
        'HiTech is ranked <span class="font-bold text-orange-500">"48"</span> ...',
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
        'HiTech is ranked <span class="font-bold text-orange-500">"68"</span> ...',
    },
    {
      name: 'HE Ranking',
      fullName: 'Higher Education Ranking - 2024',
      rankings: ['Ranked 71 – Best International Level Universities and Colleges'],
      logo: heRank,
      color: 'from-purple-50 to-purple-100',
      popupImage: heRankPopup,
      popupDescription:
        'HiTech is ranked <span class="font-bold text-orange-500">"71"</span> ...',
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
        'HiTech is ranked <span class="font-bold text-orange-500">"139"</span> ...',
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
        'HiTech is ranked <span class="font-bold text-orange-500">"161"</span> ...',
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
        'HiTech is ranked <span class="font-bold text-orange-500">"2"</span> ...',
    },
    {
      name: 'Times Ranking',
      fullName: 'Engineering Institute Ranking Survey 2025',
      rankings: ['Ranked 135 – Top 175 Engineering Institute Rankings 2025'],
      logo: times,
      color: 'from-indigo-50 to-indigo-100',
      popupImage: timesPopup,
      popupDescription:
        'HiTech is ranked <span class="font-bold text-orange-500">"135"</span> ...',
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

  const staticLogos = [
    { src: aicte, alt: "AICTE" },
    { src: nba, alt: "NBA" },
    { src: naac, alt: "NAAC" },
    { src: nirf, alt: "NIRF" }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
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

        <div className="flex justify-center items-center py-8 mb-12 bg-white rounded-2xl shadow-lg">
          <div className="flex space-x-8 md:space-x-12">
            {staticLogos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-16 md:h-20 md:w-20 object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-visible">
          <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">National Rankings Overview</h3>
          </div>

          <div className="p-4 md:p-8 relative overflow-visible">
            <Slider {...sliderSettings}>
              {accreditations.map((accred, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <div key={index} className="px-2 md:px-3">
                    <div
                      className={`bg-gradient-to-br ${accred.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 overflow-hidden min-h-[300px]`}
                      onClick={() => accred.popupImage && handleCardClick(index)}
                    >
                      <div className="p-4 md:p-6 text-center cursor-pointer">
                        <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-4">
                          <div className="w-full h-full bg-white rounded-full shadow-xl overflow-hidden flex items-center justify-center">
                            <img
                              src={accred.logo}
                              alt={accred.name}
                              className="w-full h-full object-cover rounded-full"
                            />
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
                          {isExpanded &&
                            accred.rankings.slice(1).map((ranking, i) => (
                              <div key={i} className="bg-white/80 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm border border-white/40 animate-fadeIn">
                                <p className="text-xs md:text-sm font-semibold text-gray-700 leading-relaxed">{ranking}</p>
                              </div>
                            ))}
                        </div>

                        <div className="mt-4 md:mt-6 text-center">
                          <button
                            onClick={(e) => handleShowMoreClick(index, e)}
                            className="inline-flex items-center gap-1 text-[#d38b03] hover:text-[#f59e0b] font-semibold text-sm md:text-base transition-colors duration-300"
                          >
                            {isExpanded ? (
                              <>
                                Show Less <ChevronUp className="h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Show More <ChevronDown className="h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default AccreditationCards;
