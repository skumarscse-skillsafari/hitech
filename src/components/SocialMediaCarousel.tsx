import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import socialMediaData from '../data/socialMediaData.json';

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process();
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/C6zBYzQs3Cn/"
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, margin: 0, padding: 0 }}
      ></blockquote>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/C7kBhABuFm4/"
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, margin: 0, padding: 0 }}
      ></blockquote>
    </div>
  );
};

const SocialMediaCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const socialPlatforms = [
    {
      name: 'instagram',
      icon: Instagram,
      handle: 'Hindusthan.hitech',
      followers: '1.7K',
      description: 'Campus life, events, and student achievements',
      color: 'text-pink-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200',
      url: 'https://instagram.com/hindusthan.hitech',
      embed: <InstagramEmbed />
    },
    {
      name: 'facebook',
      icon: Facebook,
      handle: 'Hindusthan Institute of technology',
      followers: '427',
      description: 'News, announcements, and community updates',
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200',
      url: 'https://facebook.com/hindusthaninstituteoftechnology',
      posts: socialMediaData.socialMedia.facebook.posts.map(post => ({
        thumbnail: post.image,
        title: post.title,
        link: 'https://facebook.com/hindusthaninstituteoftechnology'
      }))
    },
    {
      name: 'linkedin',
      icon: Linkedin,
      handle: 'HINDUSTHAN INSTITUTE OF TECH',
      followers: '3K',
      description: 'Professional network and career opportunities',
      color: 'text-blue-700',
      bgColor: 'bg-gradient-to-br from-blue-50 to-slate-50 border-blue-300',
      url: 'https://linkedin.com/school/hindusthan-institute-technology',
      posts: socialMediaData.socialMedia.linkedin.posts.map(post => ({
        thumbnail: post.image,
        title: post.title,
        link: 'https://linkedin.com/school/hindusthan-institute-technology'
      }))
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

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Follow Us on Social Media</h3>
            <p className="text-gray-600">Stay connected with our latest updates and campus life</p>
          </div>
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

        <div className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">
            {currentPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={index}
                  className={`${platform.bgColor} p-6 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer text-left w-full h-full flex flex-col justify-between`}
                >
                  <div className="text-center space-y-4">
                    <div className="relative mx-auto w-16 h-16 bg-white rounded-full p-3 shadow-md group-hover:shadow-lg transition-shadow">
                      <IconComponent className={`w-full h-full ${platform.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1 capitalize">{platform.name}</h4>
                      <p className={`font-semibold mb-2 ${platform.color}`}>{platform.handle}</p>
                      <div className="bg-white/70 px-3 py-1 rounded-full inline-block mb-3">
                        <span className="font-bold text-gray-900">{platform.followers}</span>
                        <span className="text-sm text-gray-600 ml-1">followers</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{platform.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-white p-3 rounded-lg shadow-inner h-52 overflow-y-auto">
                    {platform.name === 'instagram' && platform.embed ? (
                      <div className="space-y-4">{platform.embed}</div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {platform.posts.map((post, i) => (
                          <a
                            key={i}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:opacity-90 transition"
                          >
                            <img
                              src={post.thumbnail || 'https://via.placeholder.com/150'}
                              alt={post.title || 'Post'}
                              className="rounded-md w-full h-28 object-cover"
                            />
                            <p className="mt-1 text-xs text-gray-600 truncate">{post.title || 'View Post'}</p>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 inline-block">
              <p className="text-gray-700">
                <span className="font-bold text-yellow-700">100K+</span> total followers across all platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCarousel;
