import React, { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const obeInputCards = [
  {
    title: 'Graduate Attributes (GAs)',
    description:
      'Graduate Attributes are the qualities, knowledge, and capabilities that students are expected to acquire during their engineering education. These attributes include ethical reasoning, communication skills, and problem-solving abilities. They are aligned with NBA and Washington Accord standards.',
    image: '/gra.png',
  },
  {
    title: 'National Credit Framework (NCrF)',
    description:
      'The NCrF provides a unified structure that integrates academic, vocational, and experiential learning across all levels. It facilitates seamless mobility, lifelong learning, and recognition of prior learning. It promotes skill-based education and aligns with NEP 2020 goals.',
    image: '/ncrf.png',
  },
  {
    title: 'AICTE Program Indicators (PIs)',
    description:
      'Program Indicators help institutions measure student attainment of Program Outcomes and Course Outcomes. They provide clarity in evaluating performance using rubrics and benchmarks. These are mandated by AICTE and improve curriculum effectiveness.',
    image: '/aicte.jpg',
  },
  {
    title: 'NEP 2020',
    description:
      'The National Education Policy 2020 advocates for flexible, holistic, and multidisciplinary learning. It enables multiple entry-exit points and focuses on skill development, research, and digital learning. NEP aims to create a future-ready education system.',
    image: '/nep.png',
  },
  {
    title: 'Sustainable Development Goals (SDGs)',
    description:
      'SDGs serve as a universal blueprint for a sustainable future. Integrating them into engineering education ensures students understand global challenges such as climate change, clean energy, and social equity. Curriculum alignment supports national and international goals.',
    image: '/sdgs.png',
  },
  {
    title: "Bloom's Taxonomy",
    description:
      "Bloom's Taxonomy classifies learning objectives into six hierarchical levels: Remember, Understand, Apply, Analyze, Evaluate, and Create. It provides a structured approach to designing assessments and improving learning outcomes across all subjects.",
    image: '/blooms.png',
  },
  {
    title: 'Academic Bank of Credits (ABC)',
    description:
      'The ABC platform is a digital repository that stores academic credits earned by students. It enables flexible, modular learning and supports student mobility across institutions. It empowers learners to curate their own educational journeys.',
    image: '/abc.png',
  },
];

let sliderRef: any = null;

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const ObeInput = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-gradient-to-b py-14 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl border border-yellow-100 px-6 sm:px-10 py-10">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            OBE <span className="text-black">Inputs</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            OBE Inputs guide the curriculum to ensure students achieve defined learning outcomes effectively.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="p-2 mr-2 rounded-full bg-white border border-gray-300 hover:bg-yellow-100 transition"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button
            onClick={() => sliderRef?.slickNext()}
            className="p-2 rounded-full bg-white border border-gray-300 hover:bg-yellow-100 transition"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Cards */}
        <Slider ref={(slider) => (sliderRef = slider)} {...sliderSettings}>
          {obeInputCards.map((item, index) => {
            const isExpanded = expandedCards[index] || false;
            const fullSentences = item.description.split('. ');
            const visibleText = fullSentences.slice(0, 2).join('. ') + (fullSentences.length > 2 ? '.' : '');
            const hiddenText = fullSentences.slice(2).join('. ').trim();

            return (
              <div key={index} className="px-3 focus:outline-none h-full">
                <div className="bg-yellow-50 border border-yellow-100 rounded-2xl shadow-md hover:shadow-lg flex flex-col h-full min-h-[520px] transition-all duration-300">
                  {/* Image */}
                  <div className="h-[160px] bg-white flex items-center justify-center p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-[120px] object-contain transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-image.png';
                        target.className = 'h-full w-full object-contain';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h5 className="text-lg font-semibold text-center text-yellow-700 mb-3">
                      {item.title}
                    </h5>

                    <div className="text-sm text-gray-700 mb-4">
                      <p>{visibleText}</p>
                      {isExpanded && hiddenText && (
                        <p className="mt-2">{hiddenText.endsWith('.') ? hiddenText : hiddenText + '.'}</p>
                      )}
                    </div>

                    {hiddenText && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-auto text-yellow-600 text-sm font-medium flex items-center justify-center hover:text-yellow-700 transition"
                      >
                        {isExpanded ? 'Show Less' : 'Show More'}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ObeInput;
