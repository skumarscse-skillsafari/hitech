import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import galleryData from '../data/galleryData.json';
import { useNavigate } from 'react-router-dom';

interface GalleryImage {
  url: string;
  caption: string;
}

interface GallerySubcategory {
  name: string;
  images: GalleryImage[];
}

interface GalleryCategory {
  name: string;
  images?: GalleryImage[];
  subcategories?: GallerySubcategory[];
}

const Gallery: React.FC = () => {
  const [currentView, setCurrentView] = useState<'carousel' | 'category' | 'subcategory'>('carousel');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
const navigate = useNavigate();
  const categories = galleryData.categories || [];
  const currentCategoryData = categories.find(cat => cat.name === selectedCategory);
  const currentSubcategoryData = currentCategoryData?.subcategories?.find(sub => sub.name === selectedSubcategory);
  const currentImages = currentSubcategoryData?.images || currentCategoryData?.images || [];

  // Auto-scroll carousel
  useEffect(() => {
    if (currentView !== 'carousel' || isPaused || categories.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentView, isPaused, categories.length]);

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
    setSelectedCategory(categoryName);
    setCurrentView('category');
  };
  

  const navigateToSubcategory = (subcategoryName: string) => {
    setSelectedSubcategory(subcategoryName);
    setCurrentView('subcategory');
  };

  const goBackToCarousel = () => {
    setCurrentView('carousel');
    setSelectedCategory('');
    setSelectedSubcategory('');
  };

  const goBackToCategory = () => {
    setCurrentView('category');
    setSelectedSubcategory('');
  };

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + currentImages.length) % currentImages.length
      : (currentImageIndex + 1) % currentImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
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

  // Subcategory View (Individual Lab Images)
  if (currentView === 'subcategory') {
    return (
      <section className="py-0 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subcategory Header */}
          <div className="text-center mb-8 pt-8">
            <h2 className="text-6xl font-bold text-gray-900 mb-4">
              {selectedSubcategory}
            </h2>
            <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our {selectedSubcategory.toLowerCase()} facilities and equipment
            </p>
          </div>

          {/* Innovative Hexagonal Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-bold text-lg leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.caption}</p>
                      <div className="w-12 h-1 bg-yellow-400 mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating geometric indicator */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-sm font-bold px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-l-yellow-500 border-b-[30px] border-b-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-gray-50 to-yellow-50 rounded-2xl px-8 py-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold">{currentImages.length} Images</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-semibold">{selectedSubcategory}</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-semibold">{selectedCategory}</span>
              </div>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="flex justify-center gap-4 mt-16 pb-16">
            <button
              onClick={goBackToCategory}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to {selectedCategory}</span>
            </button>
            <button
              onClick={goBackToCarousel}
              className="flex items-center gap-2 px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Gallery</span>
            </button>
          </div>
        </div>

        {/* Enhanced Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
              >
                <X className="h-6 w-6" />
              </button>

              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption}
                className="max-w-full max-h-full object-contain relative z-0 rounded-lg"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-6 rounded-xl">
                <p className="text-center font-semibold text-lg">{selectedImage.caption}</p>
                <div className="flex items-center justify-center gap-4 mt-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">
                      {currentImageIndex + 1} of {currentImages.length}
                    </span>
                  </div>
                  <div className="w-px h-4 bg-gray-500"></div>
                  <span className="text-sm text-gray-300">{selectedSubcategory}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }

  // Category View (Labs Grid)
    
  

  // Main Carousel View
  return (
    <section id="gallery" className="py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 mt-10">
            Campus Gallery
          </h2>
          <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of our beautiful campus, modern facilities, and vibrant student life
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {categories.map((category, index) => {
              const previewImage = category.images?.[0]?.url || category.subcategories?.[0]?.images[0]?.url || '/api/placeholder/800/450';
              const imageCount = category.images?.length || category.subcategories?.reduce((acc, sub) => acc + sub.images.length, 0) || 0;
              
              return (
                <div
                  key={category.name}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <img 
                        src={previewImage} 
                        alt={category.name}
                        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                        <p className="text-white/90 text-lg mb-4">
                          {imageCount} image{imageCount !== 1 ? 's' : ''}
                        </p>
                        <button
                          onClick={() => navigateToCategory(category.name)}
                          className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          View Collection
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {categories.map((category, index) => {
            const previewImage = category.images?.[0]?.url || category.subcategories?.[0]?.images[0]?.url || '/api/placeholder/400/300';
            const imageCount = category.images?.length || category.subcategories?.reduce((acc, sub) => acc + sub.images.length, 0) || 0;
            
            return (
              <button
                key={category.name}
                onClick={() => navigateToCategory(category.name)}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={previewImage} 
                    alt={category.name}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-semibold text-sm text-center">{category.name}</p>
                    <p className="text-white/80 text-xs text-center mt-1">
                      {imageCount} photos
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;