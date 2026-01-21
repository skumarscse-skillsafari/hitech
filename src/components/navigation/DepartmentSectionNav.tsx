import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Home, Target, BarChart2, BookOpen, Lightbulb, 
  Settings, Award, Users, GraduationCap, Building, FlaskConical, 
  UserCheck, FolderOpen 
} from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

const sectionIcons: Record<string, React.ElementType> = {
  'about-department': Home,
  'department-vision-mission': Target,
  'psos-peos-pos': BarChart2,
  'programs-offered': BookOpen,
  'obe-philosophy': Lightbulb,
  'obe-inputs': Settings,
  'centres-of-excellence': Award,
  'clubs': Users,
  'teaching': GraduationCap,
  'facilities': Building,
  'labs': FlaskConical,
  'faculty': UserCheck,
  'resources': FolderOpen
};

interface DepartmentSectionNavProps {
  sections: Section[];
}

const DepartmentSectionNav: React.FC<DepartmentSectionNavProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Spy Logic
  const visibleSections = React.useRef<Map<string, IntersectionObserverEntry>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Update the map of visible sections
        entries.forEach((entry) => {
          visibleSections.current.set(entry.target.id, entry);
        });

        // Find the "best" visible section
        // Strategy: First, filter for intersecting elements. 
        // Then sort by intersection ratio (ascending) or vertical position.
        // The one with the highest ratio or fulfilling the criterion becomes active.
        const visible = Array.from(visibleSections.current.values())
          .filter(entry => entry.isIntersecting);

        if (visible.length > 0) {
          // Sort by intersection ratio (descending) -> most visible section wins
          // OR, if widely visible, maybe the one closest to the triggers?
          // Simple "most visible" logic often works best for sections.
          const bestCandidate = visible.reduce((prev, current) => {
            return (prev.intersectionRatio > current.intersectionRatio) ? prev : current;
          });
          
          setActiveSection(bestCandidate.target.id);
        }
      },
      {
        rootMargin: '-10% 0px -70% 0px', // focused sensing zone near the top
        threshold: [0, 0.25, 0.5, 0.75, 1] // Granular thresholds for better ratio data
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Optimistic update
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button - Moved to bottom-left for better ergonomics & less obstruction */}
      <div className="lg:hidden fixed left-4 bottom-8 z-40">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-yellow-500 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-110"
          aria-label="Toggle Section Navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Container */}
      <nav
        className={`
          fixed lg:sticky top-0 lg:top-32 left-0 h-screen lg:h-auto lg:max-h-none
          w-72 lg:w-full max-w-xs
          bg-white lg:bg-yellow-500
          lg:border lg:border-yellow-200/60 lg:rounded-xl
          shadow-2xl lg:shadow-none
          transform transition-transform duration-300 ease-in-out z-50 lg:z-0
          overflow-y-auto lg:overflow-visible p-6 lg:p-3
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="space-y-1">
          <ul className="space-y-0">
            {sections.map((section) => {
              const Icon = sectionIcons[section.id] || ChevronRight;
              
              return (
                <li key={section.id} className="border-b border-black last:border-b-0">
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      group relative w-full text-left flex items-center px-4 py-2 text-sm font-medium transition hover:bg-yellow-600 border-r border-yellow-600 last:border-r-0
                      ${activeSection === section.id 
                        ? 'text-gray-900 font-bold bg-yellow-100/50' 
                        : 'text-gray-900 font-bold whitespace-nowrap'
                      }
                    `}
                  >
                     {/* Active Indicator Bar */}
                     <span className={`
                       absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 rounded-r-full transition-all duration-300
                       ${activeSection === section.id ? 'bg-yellow-900 opacity-100' : 'bg-transparent opacity-0'}
                     `} />

                     {/* Icon */}
                     <Icon className={`w-6 h-6 mr-3 transition-colors ${activeSection === section.id ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`} />

                     <span className={`flex-1 transition-transform duration-200 ${activeSection === section.id ? 'translate-x-1.5' : 'group-hover:translate-x-1'}`}>
                       {section.label}
                     </span>
                     
                     {activeSection === section.id && (
                       <ChevronRight className="w-3 h-3 text-yellow-900 opacity-100 transition-opacity" />
                     )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default DepartmentSectionNav;
