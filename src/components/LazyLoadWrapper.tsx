import React, { useState, useEffect, useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  height?: string;
  delay?: number;
}

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({ 
  children, 
  height = '200px',
  delay = 1000
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div ref={ref} style={{ minHeight: height }}>
      {!isLoaded ? (
        <div className="flex items-center justify-center" style={{ height }}>
          <LoadingSpinner size="lg" text="Loading content..." />
        </div>
      ) : (
        <div className="animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

export default LazyLoadWrapper;