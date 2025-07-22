import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const obeInputCards = [
  {
    title: 'Graduate Attributes (GAs)',
    description:
      'Graduate Attributes are the qualities, knowledge, and capabilities that students are expected to acquire during their engineering education. These attributes include ethical reasoning, communication skills, and problem-solving abilities. They are aligned with NBA and Washington Accord standards.',
    image: '/gra.png',
    link: '#',
  },
  {
    title: 'National Credit Framework (NCrF)',
    description:
      'The NCrF provides a unified structure that integrates academic, vocational, and experiential learning across all levels. It facilitates seamless mobility, lifelong learning, and recognition of prior learning. It promotes skill-based education and aligns with NEP 2020 goals.',
    image: '/ncrf.png',
    link: '#',
  },
  {
    title: 'AICTE Program Indicators (PIs)',
    description:
      'Program Indicators help institutions measure student attainment of Program Outcomes and Course Outcomes. They provide clarity in evaluating performance using rubrics and benchmarks. These are mandated by AICTE and improve curriculum effectiveness.',
    image: '/aicte.jpg',
    link: '#',
  },
  {
    title: 'NEP 2020',
    description:
      'The National Education Policy 2020 advocates for flexible, holistic, and multidisciplinary learning. It enables multiple entry-exit points and focuses on skill development, research, and digital learning. NEP aims to create a future-ready education system.',
    image: '/nep.png',
    link: '#',
  },
  {
    title: 'Sustainable Development Goals (SDGs)',
    description:
      'SDGs serve as a universal blueprint for a sustainable future. Integrating them into engineering education ensures students understand global challenges such as climate change, clean energy, and social equity. Curriculum alignment supports national and international goals.',
    image: '/sdgs.png',
    link: '#',
  },
  {
    title: 'Bloom’s Taxonomy',
    description:
      'Bloom’s Taxonomy classifies learning objectives into six hierarchical levels: Remember, Understand, Apply, Analyze, Evaluate, and Create. It provides a structured approach to designing assessments and improving learning outcomes across all subjects.',
    image: '/blooms.png',
    link: '#',
  },
  {
    title: 'Academic Bank of Credits (ABC)',
    description:
      'The ABC platform is a digital repository that stores academic credits earned by students. It enables flexible, modular learning and supports student mobility across institutions. It empowers learners to curate their own educational journeys.',
    image: '/abc.png',
    link: '#',
  },
];

let sliderRef: any = null;

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
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
  return (
    <div className="bg-[#f9fafb] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl px-4 sm:px-8 py-10">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            OBE <span className="text-[#0F172A]">Inputs</span>
          </h2>
          <div className="w-32 h-1 bg-[#f59e0b] rounded-full m-4" />
        </div>

        {/* Buttons */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => sliderRef?.slickPrev()}
            className="p-2 mr-2 rounded-full border shadow bg-white hover:bg-yellow-200 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => sliderRef?.slickNext()}
            className="p-2 rounded-full border shadow bg-white hover:bg-yellow-200 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slider */}
        <Slider ref={(slider) => (sliderRef = slider)} {...sliderSettings}>
          {obeInputCards.map((item, index) => (
            <div key={index} className="px-3">
              <div className="h-[400px] bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-full h-[180px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h5 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                    {item.title}
                  </h5>
                  <p className="text-sm text-gray-600 text-justify flex-grow">
                    {item.description.length > 200
                      ? item.description.substring(0, 200) + '...'
                      : item.description}
                  </p>
                  <div className="mt-3 text-center">
                    <a
                      href={item.link}
                      className="inline-flex items-center px-3 py-1 text-sm font-medium text-yellow-700 bg-yellow-100 rounded hover:bg-yellow-200 transition"
                    >
                      Know More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ObeInput;
