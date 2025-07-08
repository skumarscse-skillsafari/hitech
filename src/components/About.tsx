import React from 'react';
import { CheckCircle2, Award, Star, Shield, Trophy } from 'lucide-react';

interface AboutProps {
  about: {
    title: string;
    content: string;
    highlights: string[];
    image: string;
  };
}

const About: React.FC<AboutProps> = ({ about }) => {
  const accreditations = [
    {
      name: 'NAAC',
      fullName: 'National Assessment and Accreditation Council',
      grade: 'A+ Grade',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-blue-50 border-blue-200 text-blue-700',
      icon: Award
    },
    {
      name: 'NBA',
      fullName: 'National Board of Accreditation',
      grade: 'Accredited',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-green-50 border-green-200 text-green-700',
      icon: Shield
    },
    {
      name: 'NIRF',
      fullName: 'National Institutional Ranking Framework',
      grade: 'Top 50',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-purple-50 border-purple-200 text-purple-700',
      icon: Trophy
    },
    {
      name: 'ISO',
      fullName: 'International Organization for Standardization',
      grade: '9001:2015',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-orange-50 border-orange-200 text-orange-700',
      icon: Star
    },
    {
      name: 'AICTE',
      fullName: 'All India Council for Technical Education',
      grade: 'Approved',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-red-50 border-red-200 text-red-700',
      icon: Award
    },
    {
      name: 'Anna University',
      fullName: 'Anna University, Chennai',
      grade: 'Affiliated',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=200',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      icon: Shield
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {about.title}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {about.content}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={about.image} 
                alt="Campus" 
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>

        </div>

        {/* Accreditations Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Accreditations & Recognitions
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading national and international bodies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((accred, index) => {
              const IconComponent = accred.icon;
              return (
                <div 
                  key={index}
                  className={`${accred.color} p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer`}
                >
                  <div className="text-center space-y-4">
                    {/* Logo */}
                    <div className="relative mx-auto w-20 h-20 bg-white rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow">
                      <img 
                        src={accred.logo} 
                        alt={accred.name}
                        className="w-full h-full object-contain rounded-full"
                      />
                      <div className="absolute -top-1 -right-1 bg-yellow-500 p-1 rounded-full">
                        <IconComponent className="h-3 w-3 text-gray-900" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-xl font-bold mb-1">{accred.name}</h4>
                      <p className="text-sm opacity-80 mb-2">{accred.fullName}</p>
                      <div className="bg-white/50 px-3 py-1 rounded-full inline-block">
                        <span className="font-semibold text-sm">{accred.grade}</span>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-xs font-medium">
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
            <p className="text-gray-600 text-sm">
              These accreditations validate our commitment to maintaining the highest standards in engineering education and institutional excellence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;