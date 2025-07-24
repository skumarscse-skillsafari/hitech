import React, { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LazyLoadWrapper from '../components/LazyLoadWrapper';

const studentClubs = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Explore MERN, Next.js, APIs, databases and App building.',
    image: '../FullStack.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Data Analysis',
    description: 'Master Excel, SQL, Python, Power BI and data storytelling.',
    image: '../data_analyst.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Data Structures & Algorithms',
    description: 'Sharpen your problem-solving skills with core DSA topics.',
    image: '../algorithm.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Machine Learning',
    description: 'Dive into ML models, TensorFlow, and real-world applications.',
    image: '../ml.png',
    link: '#',
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Learn ethical hacking, system security, and capture-the-flag challenges.',
    image: '../cyber_security.png',
    link: '#',
  },
  {
    id: 6,
    title: 'Open Source & DevOps',
    description: 'Contribute to GitHub, CI/CD, Docker, and community projects.',
    image: '../devops.png',
    link: '#',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const StudentClubs = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <LazyLoadWrapper height="400px" delay={500}>
      <div className="bg-white p-12 rounded-2xl shadow-lg text-center mb-16">
        {/* Centered Title and Description */}
        <div className="mb-8">
          <h4 className="text-3xl md:text-5xl font-bold text-gray-900">Student Clubs</h4>
          <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4"></div>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Explore your passion through student-led technology clubs.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end mb-4 space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-100 rounded-full hover:bg-yellow-400 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-100 rounded-full hover:bg-yellow-400 transition"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Slider */}
        <Slider {...sliderSettings} ref={sliderRef}>
          {studentClubs.map((club) => (
            <div key={club.id} className="px-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-transform transform hover:scale-[1.02] duration-500 h-full">
                <div className="h-48 overflow-hidden ">
                  <img
                    src={club.image}
                    alt={club.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="font-bold text-lg text-gray-900 mb-2">{club.title}</h5>
                  <p className="text-gray-600 mb-4">{club.description}</p>
                  <a
                    href={club.link}
                    className="text-yellow-600 hover:text-yellow-700 font-medium text-sm inline-flex items-center space-x-1 group"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </LazyLoadWrapper>
  );
};

export default StudentClubs;
