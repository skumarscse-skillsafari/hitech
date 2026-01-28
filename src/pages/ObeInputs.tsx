import React, { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, ChevronDown, X } from 'lucide-react';
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
    image: '/OBE inputs/NCrF.jpg',
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
    image: '/OBE inputs/SDGs.png',
  },
  {
    title: "Bloom's Taxonomy",
    description:
      "Bloom's Taxonomy classifies learning objectives into six hierarchical levels: Remember, Understand, Apply, Analyze, Evaluate, and Create. It provides a structured approach to designing assessments and improving learning outcomes across all subjects.",
    image: '/OBE inputs/Blooms.png',
  },
  {
    title: 'Academic Bank of Credits (ABC)',
    description:
      'The ABC platform is a digital repository that stores academic credits earned by students. It enables flexible, modular learning and supports student mobility across institutions. It empowers learners to curate their own educational journeys.',
    image: '/OBE inputs/ABC.jpg',
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
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-gradient-to-b py-14 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl border border-yellow-100 px-6 sm:px-10 py-10 ">
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

        {/* Slider Cards */}
        <Slider ref={(slider) => (sliderRef = slider)} {...sliderSettings}>
          {obeInputCards.map((item, index) => {
            const isExpanded = expandedCards[index] || false;

            return (
              <div
                key={index}
                className="px-3 focus:outline-none cursor-pointer"
                onClick={() => setSelectedCard(item)}
              >
                <div className="bg-yellow-50 border border-yellow-100 rounded-2xl shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  {/* Image */}
                 <div className="h-[160px] bg-white flex items-center justify-center p-4 relative overflow-hidden rounded-t-xl">
  <img
    src={item.image.startsWith('/') ? `${import.meta.env.BASE_URL}${item.image.slice(1)}` : item.image}
    alt={item.title}
    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      target.src = `${import.meta.env.BASE_URL}placeholder-image.png`;
      target.className = 'h-full w-full object-cover';
    }}
  />
</div>


                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h5 className="text-lg font-semibold text-center text-yellow-700 mb-3">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-700">
                      {isExpanded
                        ? item.description
                        : item.description.length > 100
                        ? item.description.substring(0, 100) + '...'
                        : item.description}
                    </p>

                    {item.description.length > 100 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(index);
                        }}
                        className="mt-4 text-yellow-600 text-sm font-medium flex items-center justify-center hover:text-yellow-700 transition"
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

      {/* Popup Modal */}
      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-12 relative animate-fadeIn">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
            >
              <X size={24} />
            </button>

            {/* Image Placeholder */}
            <div className="w-full h-52 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <img
                src={(selectedCard.image || '/placeholder-image.png').startsWith('/') ? `${import.meta.env.BASE_URL}${(selectedCard.image || '/placeholder-image.png').slice(1)}` : (selectedCard.image || '/placeholder-image.png')}
                alt={selectedCard.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Title + Description */}
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">{selectedCard.title}</h3>
            <p className="text-gray-700">{selectedCard.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ObeInput;
