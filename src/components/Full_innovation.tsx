import React, { useState } from 'react';
import { Play, X, ExternalLink, Clock, Users } from 'lucide-react';

interface TeachingMethodology {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  image: string;
}

interface Full_innovationProps {
  methodologies: TeachingMethodology[];
  departmentName?: string;
}

const TeachingMethodologyCards: React.FC<Full_innovationProps> = ({ 
  methodologies, 
  departmentName = "Department" 
}) => {
  const [selectedVideo, setSelectedVideo] = useState<TeachingMethodology | null>(null);

  const openVideoModal = (methodology: TeachingMethodology) => {
    setSelectedVideo(methodology);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="text-center mb-12">
        <h4 className="text-2xl font-bold text-gray-900 mb-4">
          Innovative Teaching Methodologies
        </h4>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover our cutting-edge teaching approaches that bridge theory and practice, 
          preparing students for real-world challenges in {departmentName}.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {methodologies.map((methodology) => (
          <div
            key={methodology.id}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
          >
            {/* Image with Play Button Overlay */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={methodology.image} 
                alt={methodology.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Play Button */}
              <button
                onClick={() => openVideoModal(methodology)}
                className="absolute inset-0 flex items-center justify-center group/play"
              >
                <div className="bg-white/90 hover:bg-white p-4 rounded-full transition-all duration-300 group-hover/play:scale-110 shadow-lg">
                  <Play className="h-8 w-8 text-yellow-600 ml-1" />
                </div>
              </button>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>5 min</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h5 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors">
                {methodology.title}
              </h5>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {methodology.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>Interactive</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ExternalLink className="h-3 w-3" />
                  <span>Learn More</span>
                </div>
              </div>

              {/* Know More Button */}
              <button
                onClick={() => openVideoModal(methodology)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-md"
              >
                <Play className="h-4 w-4" />
                <span>Know More</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedVideo.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{selectedVideo.description}</p>
              </div>
              <button
                onClick={closeVideoModal}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Teaching Method:</span> {selectedVideo.title}
                </div>
                <button
                  onClick={closeVideoModal}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200 text-center">
        <h5 className="font-bold text-gray-900 mb-3">Experience Innovation in Learning</h5>
        <p className="text-gray-700 leading-relaxed">
          Our teaching methodologies are continuously updated to incorporate the latest educational 
          technologies and industry best practices, ensuring our students receive world-class education.
        </p>
      </div>
    </div>
  );
};

export default TeachingMethodologyCards;