import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faChevronLeft, 
  faChevronRight, 
  faTrophy, 
  faUsers, 
  faAward,
  faClipboardList,
  faHashtag,
  faUserGraduate,
  faCalendarAlt,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';

interface Achievement {
  id: number;
  title: string;
  image: string;
}

interface TeamMember {
  name: string;
  rollNo: string;
  year: string;
  semester: string;
  batch: string;
}

interface Team {
  teamId: number;
  teamName: string;
  award: string;
  achievements: Achievement[];
  problemStatement: string;
  teamMembers: TeamMember[];
}

interface AchievementsModalProps {
  isOpen: boolean;
  onClose: () => void;
  teams: Team[];
}

const AchievementsModal: React.FC<AchievementsModalProps> = ({ isOpen, onClose, teams }) => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoize current team and achievement for performance
  const currentTeam = useMemo(() => teams[currentTeamIndex], [teams, currentTeamIndex]);
  const currentAchievement = useMemo(() => 
    currentTeam?.achievements[currentImageIndex], 
    [currentTeam, currentImageIndex]
  );

  // Auto-scroll images within current team
  useEffect(() => {
    if (!isOpen || !isAutoScrolling || !currentTeam || currentTeam.achievements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentTeam.achievements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, isAutoScrolling, currentTeam]);

  // Auto-scroll to next team after viewing all images
  useEffect(() => {
    if (!isOpen || !isAutoScrolling || teams.length <= 1 || !currentTeam) return;

    if (currentImageIndex === currentTeam.achievements.length - 1) {
      const teamTransitionTimer = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentTeamIndex((prev) => (prev + 1) % teams.length);
          setCurrentImageIndex(0);
          setIsTransitioning(false);
        }, 500);
      }, 5000);

      return () => clearTimeout(teamTransitionTimer);
    }
  }, [isOpen, isAutoScrolling, currentImageIndex, currentTeamIndex, teams, currentTeam]);

  // Handle body scroll lock and ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Optimized handlers with useCallback
  const handlePreviousImage = useCallback(() => {
    setIsAutoScrolling(false);
    setCurrentImageIndex((prev) => (prev - 1 + currentTeam.achievements.length) % currentTeam.achievements.length);
  }, [currentTeam]);

  const handleNextImage = useCallback(() => {
    setIsAutoScrolling(false);
    setCurrentImageIndex((prev) => (prev + 1) % currentTeam.achievements.length);
  }, [currentTeam]);

  const handlePreviousTeam = useCallback(() => {
    setIsAutoScrolling(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTeamIndex((prev) => (prev - 1 + teams.length) % teams.length);
      setCurrentImageIndex(0);
      setIsTransitioning(false);
    }, 500);
  }, [teams.length]);

  const handleNextTeam = useCallback(() => {
    setIsAutoScrolling(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % teams.length);
      setCurrentImageIndex(0);
      setIsTransitioning(false);
    }, 500);
  }, [teams.length]);

  const handleDotClick = useCallback((index: number) => {
    setIsAutoScrolling(false);
    setCurrentImageIndex(index);
  }, []);

  if (!isOpen || teams.length === 0 || !currentTeam || !currentAchievement) return null;
  if (typeof document === 'undefined' || !document.body) return null;

  const isTeam1 = currentTeam.teamId === 1;
  const gradientClass = isTeam1 
    ? 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500' 
    : 'bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600';

  const modalContent = (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3"
      style={{ animation: 'fadeIn 0.25s ease-out' }}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[95vh] bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden transform transition-all duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
        style={{ 
          animation: isTransitioning ? '' : 'slideUp 0.35s ease-out',
          willChange: 'opacity, transform'
        }}
      >
        {/* Close Button - Premium Style */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg group"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Team Navigation Arrows - Premium Style */}
        {teams.length > 1 && (
          <>
            <button
              onClick={handlePreviousTeam}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 transition-all duration-300 hover:scale-110 shadow-xl group"
              aria-label="Previous Team"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNextTeam}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 transition-all duration-300 hover:scale-110 shadow-xl group"
              aria-label="Next Team"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </>
        )}

        {/* Content Container - With Scroll */}
        <div className="overflow-y-auto max-h-[95vh] custom-scrollbar">
          {/* Premium Header with Animated Gradient - Reduced Size */}
          <div className={`${gradientClass} px-4 py-2 text-white relative overflow-hidden`}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faTrophy} className="w-4 h-4 animate-pulse" />
                <h2 className="text-lg md:text-xl font-extrabold text-center tracking-tight">
                  CSE Achievements
                </h2>
              </div>
              
              {/* Team Badge - Reduced */}
              <div className="flex justify-center mt-1">
                <div className="inline-flex items-center gap-1.5 bg-white/25 backdrop-blur-md px-3 py-0.5 rounded-full border-2 border-white/40 shadow-lg">
                  <FontAwesomeIcon icon={faAward} className="w-3 h-3" />
                  <span className="font-bold text-xs tracking-wide">
                    {currentTeam.teamName} · {currentTeam.award}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Increased Readability */}
          <div className="p-4">
            {/* Premium Image Section - Larger Image */}
            <div className="relative mb-3 group">
              <div className="relative overflow-hidden rounded-lg shadow-2xl ring-1 ring-black/5">
                {/* Image with smooth loading */}
                <img
                  src={currentAchievement.image}
                  alt={currentAchievement.title}
                  className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  key={`${currentTeam.teamId}-${currentImageIndex}`}
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Image Navigation - Sleek Design */}
              {currentTeam.achievements.length > 1 && (
                <>
                  <button
                    onClick={handlePreviousImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100"
                    aria-label="Previous Image"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 transition-all duration-300 hover:scale-110 shadow-lg opacity-0 group-hover:opacity-100"
                    aria-label="Next Image"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Premium Dot Indicators - Visible */}
              {currentTeam.achievements.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full">
                  {currentTeam.achievements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex
                          ? 'bg-white w-5 h-1.5'
                          : 'bg-white/50 hover:bg-white/80 w-1.5 h-1.5'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Image Counter Badge - Readable */}
              <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-bold shadow-lg">
                {currentImageIndex + 1} / {currentTeam.achievements.length}
              </div>
            </div>

            {/* Title Section - Readable */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-start gap-2 mb-1.5">
                <FontAwesomeIcon icon={faAward} className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  {currentAchievement.title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 text-amber-800 px-3 py-1 rounded-full font-semibold text-xs shadow-sm">
                <FontAwesomeIcon icon={faTrophy} className="w-3 h-3" />
                {currentTeam.award}
              </div>
            </div>

            {/* Description - Readable */}
            <div className="mb-3 bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-lg border-l-3 border-amber-500 shadow-sm">
              <h4 className="text-sm font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                <FontAwesomeIcon icon={faClipboardList} className="w-4 h-4 text-amber-600" />
                <span>Description</span>
              </h4>
              <p className="text-gray-700 leading-relaxed text-xs">
                {currentTeam.problemStatement}
              </p>
            </div>

            {/* Team Members - Readable Table - Hidden for StartupTN and Malaysia Conference */}
            {!currentAchievement.title.includes('StartupTN') && !currentAchievement.title.includes('Malaysia') && (
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faUsers} className="w-4 h-4 text-white" />
                  <h4 className="text-sm font-bold text-white">Team Members</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          <FontAwesomeIcon icon={faHashtag} className="w-2.5 h-2.5 mr-1 inline" />
                          No
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          <FontAwesomeIcon icon={faUserGraduate} className="w-2.5 h-2.5 mr-1 inline" />
                          Name
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          <FontAwesomeIcon icon={faIdCard} className="w-2.5 h-2.5 mr-1 inline" />
                          Roll No
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          Year/Sem
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wide">
                          <FontAwesomeIcon icon={faCalendarAlt} className="w-2.5 h-2.5 mr-1 inline" />
                          Batch
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {currentTeam.teamMembers.map((member, index) => (
                        <tr 
                          key={index}
                          className="hover:bg-blue-50 transition-colors duration-200"
                        >
                          <td className="px-3 py-2 text-xs font-semibold text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-3 py-2 text-xs font-medium text-gray-800">
                            {member.name}
                          </td>
                          <td className="px-3 py-2 text-xs text-gray-600 font-mono">
                            {member.rollNo}
                          </td>
                          <td className="px-3 py-2 text-xs text-gray-600">
                            {member.year} / {member.semester}
                          </td>
                          <td className="px-3 py-2 text-xs text-gray-600 font-medium">
                            {member.batch}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  try {
    return createPortal(modalContent, document.body);
  } catch (error) {
    return null;
  }
};

export default AchievementsModal;
