import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Linkedin, Youtube, ExternalLink } from 'lucide-react';

import socialMediaData from '../data/socialMediaData.json';

const SocialMediaCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePlatform, setActivePlatform] = useState<string>('instagram');

  const socialPlatforms = [
    {
      name: 'instagram',
      icon: Instagram,
      handle: '@hindusthan.hitech',
      followers: '3K',
      description: 'Campus life, events, and student achievements',
      color: 'text-pink-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200',
      url: 'https://instagram.com/hindusthan.hitech',
      posts: socialMediaData.socialMedia.instagram.posts
    },
    {
      name: 'facebook',
      icon: Facebook,
      handle: 'Hect Hitech',
      followers: '300+',
      description: 'News, announcements, and community updates',
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200',
      url: 'https://facebook.com/hect.hitech',
      posts: socialMediaData.socialMedia.facebook.posts
    },
    {
      name: 'linkedin',
      icon: Linkedin,
      handle: 'Hindusthan Institute of Technology',
      followers: '32.1K',
      description: 'Professional network and career opportunities',
      color: 'text-blue-700',
      bgColor: 'bg-gradient-to-br from-blue-50 to-slate-50 border-blue-300',
      url: 'https://linkedin.com/school/hindusthan-institute-of-tech',
      posts: socialMediaData.socialMedia.linkedin.posts
    },
    {
      name: 'twitter',
      icon: Twitter,
      handle: '@HIT_Official',
      followers: '18.5K',
      description: 'Latest updates and industry insights',
      color: 'text-sky-600',
      bgColor: 'bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200',
      url: 'https://twitter.com/hit_official',
      posts: [
        {
          id: 1,
          content: 'Exciting news! HIT has signed an MOU with Google Cloud for advanced computing curriculum and student certifications. 🎓 #GoogleCloud #Education #TechEducation',
          likes: 234,
          shares: 45,
          comments: 19,
          date: '2024-01-18'
        },
        {
          id: 2,
          content: 'Our robotics team just won the National Championship! 🏆 Proud of our students\' dedication and innovation. #Robotics #Champions #Innovation',
          likes: 189,
          shares: 78,
          comments: 32,
          date: '2024-01-15'
        }
      ]
    },
    {
      name: 'youtube',
      icon: Youtube,
      handle: 'HIT Official',
      followers: '12.3K',
      description: 'Campus tours, lectures, and events',
      color: 'text-red-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200',
      url: 'https://youtube.com/c/HindusthanInstituteOfTechnology',
      posts: [
        {
          id: 1,
          title: 'Virtual Campus Tour 2024',
          content: 'Take a comprehensive virtual tour of our state-of-the-art campus facilities.',
          image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400',
          likes: 567,
          comments: 45,
          date: '2024-01-14'
        }
      ]
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(socialPlatforms.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= socialPlatforms.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, socialPlatforms.length - itemsPerPage) : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const currentPlatforms = socialPlatforms.slice(currentIndex, currentIndex + itemsPerPage);
  const activePlatformData = socialPlatforms.find(p => p.name === activePlatform);

  return (
    <div className="space-y-8">
      {/* Social Media Platform Cards */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Follow Us on Social Media</h3>
            <p className="text-gray-600">Stay connected with our latest updates and campus life</p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? 'bg-yellow-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full transition-colors group"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-100 hover:bg-yellow-100 p-2 rounded-full transition-colors group"
              >
                <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-yellow-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Cards */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">
            {currentPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActivePlatform(platform.name);
                    window.open(platform.url, '_blank'); // redirect to platform
                  }}
                  className={`${platform.bgColor} p-6 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer text-left w-full ${
                    activePlatform === platform.name ? 'ring-2 ring-yellow-500' : ''
                  }`}
                >
                  <div className="text-center space-y-4">
                    {/* Icon */}
                    <div className="relative mx-auto w-16 h-16 bg-white rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow">
                      <IconComponent className={`w-full h-full ${platform.color}`} />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1 capitalize">{platform.name}</h4>
                      <p className={`font-semibold mb-2 ${platform.color}`}>{platform.handle}</p>
                      <div className="bg-white/70 px-3 py-1 rounded-full inline-block mb-3">
                        <span className="font-bold text-gray-900">{platform.followers}</span>
                        <span className="text-sm text-gray-600 ml-1">followers</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{platform.description}</p>
                    </div>

                    {/* Hover Effect */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center justify-center space-x-2 text-sm font-medium text-gray-700">
                        <span>View Posts</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Follow Us Info */}
          
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCarousel;
