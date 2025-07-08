import React, { useState, useEffect, useRef } from 'react';
import { Megaphone, Star, Calendar, Trophy, AlertCircle, Zap, BookOpen } from 'lucide-react';

interface NewsItem {
  id: number;
  text: string;
  type: 'announcement' | 'news' | 'event' | 'urgent' | 'achievement' | 'facility';
  url?: string;
  isActive: boolean;
}

interface NewsTickerProps {
  newsItems: NewsItem[];
  speed?: number;
  pauseOnHover?: boolean;
}

const NewsTicker: React.FC<NewsTickerProps> = ({ 
  newsItems, 
  speed = 60, 
  pauseOnHover = true
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(100);
  const scrollingRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Filter active news items
  const activeNews = newsItems.filter(item => item.isActive);

  // Icon mapping for different news types
  const getNewsIcon = (type: string) => {
    switch (type) {
      case 'announcement':
        return <Star className="h-3 w-3 text-yellow-700" />;
      case 'event':
        return <Calendar className="h-3 w-3 text-blue-700" />;
      case 'achievement':
        return <Trophy className="h-3 w-3 text-orange-700" />;
      case 'urgent':
        return <AlertCircle className="h-3 w-3 text-red-700" />;
      case 'facility':
        return <BookOpen className="h-3 w-3 text-green-700" />;
      case 'news':
      default:
        return <Zap className="h-3 w-3 text-purple-700" />;
    }
  };

  // Handle scroll to hide announcement bar
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on any scroll (up or down)
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setIsVisible(false);
      }
      
      // Show when at top
      if (currentScrollY < 50) {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation function with proper pause/resume
  const animate = (timestamp: number) => {
    if (!scrollingRef.current) return;

    if (lastTimeRef.current === 0) {
      lastTimeRef.current = timestamp;
    }

    if (!isPaused) {
      const deltaTime = timestamp - lastTimeRef.current;
      const moveDistance = (deltaTime / 1000) * (200 / speed); // 200% total distance over speed seconds
      
      setCurrentPosition(prev => {
        const newPosition = prev - moveDistance;
        return newPosition <= -100 ? 100 : newPosition;
      });
    }

    lastTimeRef.current = timestamp;
    animationRef.current = requestAnimationFrame(animate);
  };

  // Start animation
  useEffect(() => {
    if (activeNews.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeNews.length, speed, isPaused]);

  // Update transform based on current position
  useEffect(() => {
    if (scrollingRef.current) {
      scrollingRef.current.style.transform = `translateX(${currentPosition}%)`;
    }
  }, [currentPosition]);

  // Handle pause/resume
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  // Don't render if no active news
  if (activeNews.length === 0) {
    return null;
  }

  return (
    <div 
      className={`fixed top-32 left-0 right-0 z-30 bg-yellow-500 border-b border-yellow-600 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="relative overflow-hidden h-12">
        {/* News Content */}
        <div className="flex items-center h-full relative">
          {/* News Icon & Label */}
          <div className="flex-shrink-0 px-6 flex items-center space-x-3 bg-yellow-600/30">
            <div className="bg-white/30 p-2 rounded-full">
              <Megaphone className="h-4 w-4 text-gray-900" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-sm text-gray-900 tracking-wide">
                LATEST UPDATES
              </span>
            </div>
          </div>

          {/* Scrolling Text Container */}
          <div 
            className="flex-1 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              ref={scrollingRef}
              className="scrolling-content flex items-center h-full whitespace-nowrap"
              style={{
                willChange: 'transform',
              }}
            >
              {/* First Loop */}
              {activeNews.map((item, index) => (
                <span key={item.id} className="inline-flex items-center">
                  <span className="flex items-center space-x-2 px-6">
                    {getNewsIcon(item.type)}
                    {item.url ? (
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-700 font-medium transition-colors duration-200 hover:underline"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="font-medium text-gray-900">{item.text}</span>
                    )}
                  </span>
                  {index < activeNews.length - 1 && (
                    <span className="text-gray-700/60 px-4 text-lg">•</span>
                  )}
                </span>
              ))}
              
              {/* Separator for seamless loop */}
              <span className="text-gray-700/60 px-8 text-lg">•</span>
              
              {/* Second Loop for seamless scrolling */}
              {activeNews.map((item, index) => (
                <span key={`repeat-${item.id}`} className="inline-flex items-center">
                  <span className="flex items-center space-x-2 px-6">
                    {getNewsIcon(item.type)}
                    {item.url ? (
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-700 font-medium transition-colors duration-200 hover:underline"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="font-medium text-gray-900">{item.text}</span>
                    )}
                  </span>
                  {index < activeNews.length - 1 && (
                    <span className="text-gray-700/60 px-4 text-lg">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Pause Indicator */}
          {isPaused && (
            <div className="absolute top-1 right-4 bg-gray-900/20 text-gray-900 px-2 py-0.5 rounded-full text-xs font-medium">
              Paused
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;