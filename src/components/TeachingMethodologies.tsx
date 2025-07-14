import React, { useState } from 'react';
import { Lightbulb, BookOpen, Users, Monitor, Cog, Brain, ChevronRight, Eye } from 'lucide-react';

interface TeachingMethodologiesProps {
  methodologies: string[];
  departmentName?: string;
}

const TeachingMethodologies: React.FC<TeachingMethodologiesProps> = ({ 
  methodologies, 
  departmentName = "Department" 
}) => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const methodologyIcons = [
    Lightbulb, BookOpen, Users, Monitor, Cog, Brain
  ];

  const displayedMethodologies = showAll ? methodologies : methodologies.slice(0, 6);

  const getMethodologyDescription = (methodology: string) => {
    const descriptions: { [key: string]: string } = {
      'Project-Based Learning': 'Students work on real-world projects to apply theoretical knowledge practically.',
      'Industry-Integrated Curriculum': 'Curriculum designed with industry input to meet current market demands.',
      'Hands-on Laboratory Sessions': 'Practical sessions in well-equipped labs for experiential learning.',
      'Research-Oriented Teaching': 'Teaching methodology that encourages research and innovation.',
      'Collaborative Learning': 'Group-based learning to enhance teamwork and communication skills.',
      'Case Study Method': 'Real-world case studies to understand practical applications.',
      'Simulation-Based Learning': 'Using simulations to create realistic learning environments.',
      'Hardware-in-Loop Testing': 'Testing with actual hardware components for practical understanding.',
      'Industry Projects': 'Live projects from industry partners for real-world experience.',
      'Research-Based Learning': 'Learning through active research and investigation.',
      'Peer Learning': 'Students learning from and teaching each other.',
      'Problem-Based Learning': 'Learning through solving real-world problems.',
      'Design Thinking Approach': 'Human-centered approach to innovation and problem-solving.',
      'Workshop-Based Training': 'Hands-on training in specialized workshops.',
      'Field-Based Learning': 'Learning through field visits and practical exposure.',
      'Site Visits and Practical Training': 'Regular visits to industry sites for practical exposure.',
      'Software-Based Design': 'Using advanced software tools for design and analysis.',
      'Industry Collaboration': 'Direct collaboration with industry for enhanced learning.'
    };
    
    return descriptions[methodology] || 'Innovative teaching approach for enhanced learning experience.';
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
          <Lightbulb className="h-7 w-7 text-yellow-500" />
          <span>Innovative Teaching Methodologies</span>
        </h4>
        <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {methodologies.length} Methods
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedMethodologies.map((methodology, index) => {
          const IconComponent = methodologyIcons[index % methodologyIcons.length];
          return (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                hoveredCard === index 
                  ? 'border-yellow-500 shadow-lg transform -translate-y-1' 
                  : 'border-gray-200 hover:border-yellow-300'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg transition-all duration-300 ${
                  hoveredCard === index 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-white text-yellow-600 group-hover:bg-yellow-100'
                }`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
                    {methodology}
                  </h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {getMethodologyDescription(methodology)}
                  </p>
                </div>
              </div>
              
              {/* Hover Effect Indicator */}
              <div className={`mt-4 flex items-center text-xs font-medium transition-all duration-300 ${
                hoveredCard === index 
                  ? 'text-yellow-600 opacity-100' 
                  : 'text-gray-400 opacity-0 group-hover:opacity-100'
              }`}>
                <Eye className="h-3 w-3 mr-1" />
                <span>Learn more about this methodology</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More/Less Button */}
      {methodologies.length > 6 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto shadow-md"
          >
            <span>{showAll ? 'Show Less' : `View All ${methodologies.length} Methodologies`}</span>
            <ChevronRight className={`h-5 w-5 transition-transform ${showAll ? 'rotate-90' : ''}`} />
          </button>
        </div>
      )}

      {/* Additional Info */}
      <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
        <h5 className="font-bold text-gray-900 mb-3">Why These Methodologies Matter</h5>
        <p className="text-gray-700 leading-relaxed">
          Our innovative teaching methodologies in {departmentName} are designed to bridge the gap between 
          theoretical knowledge and practical application. These approaches ensure our students are 
          industry-ready and equipped with the skills needed for tomorrow's challenges.
        </p>
      </div>
    </div>
  );
};

export default TeachingMethodologies;