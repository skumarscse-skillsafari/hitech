import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  CreditCard,
} from 'lucide-react';

interface HeroProps {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    stats: Array<{
      number: string;
      label: string;
    }>;
  };
}

const Hero: React.FC<HeroProps> = ({ hero }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleWatchCampusTour = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = false;
      setIsMuted(false);
      video.play();
      setIsPlaying(true);

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitEnterFullscreen) {
        (video as any).webkitEnterFullscreen();
      } else if ((video as any).mozRequestFullScreen) {
        (video as any).mozRequestFullScreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={hero.backgroundImage}
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60"></div>

      {/* Video Controls */}
      <div className={`absolute top-6 right-6 flex items-center space-x-3 transition-all duration-300 ${
        showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}>
        <button
          onClick={togglePlay}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          title={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button
          onClick={toggleMute}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          title={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
        <button
          onClick={toggleFullscreen}
          className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          title="Fullscreen"
        >
          <Maximize className="h-5 w-5" />
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 -mt-[192px]">
        <div className="space-y-8">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {hero.title}
            </h1>
          </div>
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              {hero.subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={handleWatchCampusTour}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <Play className="h-5 w-5" />
              Watch Campus Tour
            </button>

            <a
              href="https://yourcollege.edu/fees-payment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <CreditCard className="h-5 w-5" />
              Fees Payment
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
            {hero.stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Progress */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-white/20 transition-all duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="h-full bg-yellow-500 w-0 animate-pulse"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Fallback Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
          zIndex: -1,
        }}
        onError={() => {
          const videoElement = videoRef.current;
          if (videoElement) {
            videoElement.style.display = 'none';
          }
        }}
      />

      {/* Vertical TNEA Code Button - Left Side */}
      <div className="fixed left-0 top-1/3 transform -translate-y-1/2 z-50">
        <div className="rotate-90 origin-bottom-left">
          <button
            className="text-sm md:text-base font-bold bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-b-xl shadow-lg transition-all duration-300 whitespace-nowrap rotate-180"
            title="TNEA Code"
          >
            TNEA: 2708
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
