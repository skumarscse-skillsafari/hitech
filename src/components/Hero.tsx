import React from 'react';
import { ArrowRight, Play, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  hero: {
    title: string;
    subtitle: string;
    stats: {
      number: string;
      label: string;
    }[];
  };
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    setTimeout(() => {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleWatchCampusTour = () => {
    console.log('Initiating campus tour.');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/clg.jpg')` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60"></div>

      {/* Hero Content */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 transform sm:-translate-y-16 md:-translate-y-[0.5in] lg:translate-y-6">
  <div className="space-y-10 text-center">
    {/* Title */}
    <div className="animate-fadeIn">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 leading-snug text-center mx-auto mt-6 sm:mt-0 px-2 sm:px-4 break-words">
        Get The Best In Everything
      </div>
      <p className="mt-4 text-base sm:text-lg md:text-xl font-medium tracking-wide pt-4 text-gray-200">
        Education <span className="mx-2 text-yellow-400">|</span> Ethics <span className="mx-2 text-yellow-400">|</span> Excellence
      </p>
    </div>


          {/* Subtitle */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              {hero.subtitle}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={handleApplyNow}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={handleWatchCampusTour}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Play className="h-5 w-5" />
              Watch Campus Tour
            </button>

            <a
              href="https://yourcollege.edu/fees-payment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <CreditCard className="h-5 w-5" />
              Fees Payment
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
            {hero.stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* TNEA Code */}
      <div className="fixed left-0 top-1/3 transform -translate-y-1/2 z-50">
        <div className="rotate-90 origin-bottom-left">
          <button
            className="text-sm md:text-base font-bold bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-b-xl shadow-lg transition-all duration-300 whitespace-nowrap rotate-180"
            title="TNEA Code"
          >
            TNEA: 2740
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
