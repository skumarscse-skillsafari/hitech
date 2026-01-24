import { useState, useEffect } from 'react';
import { NavigateFunction } from 'react-router-dom';
import researchData from '../data/researchInnovationData.json';

interface ResearchInnovationCarouselProps {
  navigate: NavigateFunction;
}

const ResearchInnovationCarousel: React.FC<ResearchInnovationCarouselProps> = ({ navigate }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-transition every 5 seconds with smooth animation
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentCategoryIndex((prev) => (prev + 1) % researchData.tabs.length);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleCategoryChange = (index: number) => {
    if (index !== currentCategoryIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCategoryIndex(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const currentCategory = researchData.tabs[currentCategoryIndex];
  
  // Handle different data structures - some tabs have direct items, others have nested categories
  let items: any[] = [];
  if (currentCategory.content.items && Array.isArray(currentCategory.content.items)) {
    items = currentCategory.content.items.slice(0, 2); // Show only first 2 items
  } else if (currentCategory.content.categories && Array.isArray(currentCategory.content.categories)) {
    // For tabs with categories (like publication), get items from first category
    const firstCategory = currentCategory.content.categories[0];
    if (firstCategory?.items && Array.isArray(firstCategory.items)) {
      items = firstCategory.items.slice(0, 2);
    }
  }

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 sm:p-12 border-2 border-yellow-200">
      {/* Header */}
      <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
        Research & Innovation Hub
      </h4>
      <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mb-2"></div>
      
      {/* Category Title with smooth transition */}
      <div className="overflow-hidden h-12 mb-6">
        <h5 
          className={`text-2xl font-bold text-yellow-600 text-center transition-all duration-500 ${
            isTransitioning ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}
        >
          {currentCategory.name}
        </h5>
      </div>
      
      <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
        Discover our cutting-edge research projects, innovative solutions, academic publications, 
        patents, and industry consultancy services that drive technological advancement
      </p>

      {/* Cards Grid - Show 2 larger items */}
      <div className="relative min-h-[500px] mb-8">
        {items.length > 0 ? (
          <div 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}
          >
            {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Title */}
              <h6 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 min-h-[64px]">
                {item.title}
              </h6>
              
              {/* Yellow divider */}
              <div className="w-20 h-1.5 bg-yellow-400 rounded-full mb-5"></div>

              {/* Team Members / Authors */}
              {(item as any).authors && (
                <div className="mb-5">
                  <p className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-3">
                    {Array.isArray((item as any).authors) ? 'Team Members' : 'Authors'}
                  </p>
                  {Array.isArray((item as any).authors) ? (
                    <div className="text-base text-gray-700 space-y-2">
                      {(item as any).authors.map((author: string, idx: number) => (
                        <p key={idx} className="line-clamp-1">{author}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base text-gray-700 line-clamp-2">{(item as any).authors}</p>
                  )}
                </div>
              )}

              {/* Faculty Name (for Seed Money/Patent items) */}
              {(item as any).facultyName && (
                <div className="mb-5">
                  <p className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-3">
                    Faculty
                  </p>
                  <p className="text-base text-gray-700">{(item as any).facultyName}</p>
                </div>
              )}

              {/* Description */}
              {(item as any).description && (
                <p className="text-base text-gray-600 leading-relaxed mb-5 line-clamp-4">
                  {(item as any).description}
                </p>
              )}

              {/* Additional Info */}
              <div className="space-y-3 mb-6">
                {(item as any).funding && (
                  <div className="flex items-start text-base">
                    <span className="font-bold text-yellow-600 mr-3 whitespace-nowrap">Funding:</span>
                    <span className="text-gray-700">{(item as any).funding}</span>
                  </div>
                )}
                {(item as any).status && (
                  <div className="flex items-start text-base">
                    <span className="font-bold text-yellow-600 mr-3 whitespace-nowrap">Status:</span>
                    <span className="text-gray-700">{(item as any).status}</span>
                  </div>
                )}
                {(item as any).duration && (
                  <div className="flex items-start text-base">
                    <span className="font-bold text-yellow-600 mr-3 whitespace-nowrap">Duration:</span>
                    <span className="text-gray-700">{(item as any).duration}</span>
                  </div>
                )}
                {(item as any).year && (
                  <div className="flex items-start text-base">
                    <span className="font-bold text-yellow-600 mr-3 whitespace-nowrap">Year:</span>
                    <span className="text-gray-700">{(item as any).year}</span>
                  </div>
                )}
                {(item as any).journal && (
                  <div className="flex items-start text-base">
                    <span className="font-bold text-yellow-600 mr-3 whitespace-nowrap">Journal:</span>
                    <span className="text-gray-700 line-clamp-1">{(item as any).journal}</span>
                  </div>
                )}
                {(item as any).patentNumber && (
                  <div className="flex items-start text-base">
                    <span className="font-bold text-yellow-600 mr-3 whitespace-nowrap">Patent No:</span>
                    <span className="text-gray-700">{(item as any).patentNumber}</span>
                  </div>
                )}
                {(item as any).client && (
                  <div className="flex items-start text-base">
                    <span className="font-bold text-yellow-600 mr-3 whitespace-nowrap">Client:</span>
                    <span className="text-gray-700">{(item as any).client}</span>
                  </div>
                )}
              </div>

              {/* Explore Project Button */}
              <button className="w-full mt-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-4 rounded-lg font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                <span>Explore Project</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg">No items available for this category</p>
          </div>
        )}
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mb-8">
        {researchData.tabs.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentCategoryIndex
                ? 'w-8 bg-yellow-500'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to ${researchData.tabs[index].name}`}
          />
        ))}
      </div>

      {/* Explore Button */}
      <div className="text-center">
        <button
          onClick={() => navigate('/research-innovation')}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-lg inline-flex items-center gap-2"
        >
          <span>Explore All Research & Innovation</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default ResearchInnovationCarousel;
