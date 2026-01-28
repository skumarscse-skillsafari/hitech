import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import galleryData from '../data/galleryData.json';

interface GalleryImage {
  url: string;
  caption: string;
}

interface GalleryCategory {
  name: string;
  images: GalleryImage[];
}

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = galleryData.categories || [];

  // Auto-scroll carousel
  useEffect(() => {
    if (isPaused || categories.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, categories.length]);

  // Scroll to current slide
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const navigateToCategory = (categoryName: string) => {
    const formattedName = categoryName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/gallery/${formattedName}`);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Matching HIT Theme */}
      <div className="bg-white/30 text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Campus Gallery
          </h1>
          <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            Take a visual tour of our beautiful campus, modern facilities, and vibrant student life
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Carousel */}
        <div className="relative mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth rounded-2xl shadow-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {categories.map((category) => {
              const previewUrl = (category as any).images?.[0]?.url || (category as any).subcategories?.[0]?.images?.[0]?.url || '/api/placeholder/1200/600';
              const imageCount = (category as any).images?.length || (category as any).subcategories?.reduce((acc: number, sub: any) => acc + sub.images.length, 0) || 0;
              const imageSrc = previewUrl.startsWith('/') && !previewUrl.startsWith('/api')
                ? `${import.meta.env.BASE_URL}${previewUrl.slice(1)}`
                : previewUrl;
              
              return (
              <div
                key={category.name}
                className="w-full flex-shrink-0"
              >
                <div className="relative group cursor-pointer overflow-hidden">
                  <div className="relative">
                    <img 
                      src={imageSrc}
                      alt={category.name}
                      className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{category.name}</h3>
                        <p className="text-white/90 text-lg mb-6">
                          {imageCount} image{imageCount !== 1 ? 's' : ''}
                        </p>
                        <button
                          onClick={() => navigateToCategory(category.name)}
                          className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          View Collection
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-500 w-12' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const previewUrl = (category as any).images?.[0]?.url || (category as any).subcategories?.[0]?.images?.[0]?.url || '/api/placeholder/400/300';
            const imageCount = (category as any).images?.length || (category as any).subcategories?.reduce((acc: number, sub: any) => acc + sub.images.length, 0) || 0;
            const imageSrc = previewUrl.startsWith('/') && !previewUrl.startsWith('/api')
              ? `${import.meta.env.BASE_URL}${previewUrl.slice(1)}`
              : previewUrl;
            
            return (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              <div className="relative">
                <img 
                  src={imageSrc}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-bold text-lg mb-1">{category.name}</h4>
                <p className="text-white/80 text-sm mb-3">
                  {imageCount} photos
                </p>
                <button
                  onClick={() => navigateToCategory(category.name)}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Explore
                </button>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;