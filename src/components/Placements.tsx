import React from 'react';
import { TrendingUp, Users, Award, Building, Star, ArrowRight } from 'lucide-react';

interface PlacementStats {
  placementRate: string;
  averagePackage: string;
  highestPackage: string;
  companiesVisited: string;
}

interface TopRecruiter {
  name: string;
  logo: string;
  package: string;
}

interface PlacementProcess {
  step: number;
  title: string;
  description: string;
}

interface PlacementsProps {
  placements: {
    stats: PlacementStats;
    topRecruiters: TopRecruiter[];
    placementProcess: PlacementProcess[];
  };
}

const Placements: React.FC<PlacementsProps> = ({ placements }) => {
  return (
    <section id="placements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Placement Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strong industry partnerships and comprehensive training programs ensure exceptional career opportunities for our graduates
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{placements.stats.placementRate}</div>
            <div className="text-gray-600 font-medium">Placement Rate</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{placements.stats.averagePackage}</div>
            <div className="text-gray-600 font-medium">Average Package</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{placements.stats.highestPackage}</div>
            <div className="text-gray-600 font-medium">Highest Package</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Building className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{placements.stats.companiesVisited}</div>
            <div className="text-gray-600 font-medium">Companies Visited</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Top Recruiters */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Top Recruiters</h3>
            <div className="grid grid-cols-2 gap-6">
              {placements.topRecruiters.map((recruiter, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={recruiter.logo} 
                      alt={recruiter.name}
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{recruiter.name}</h4>
                      <p className="text-yellow-600 font-medium text-sm">{recruiter.package}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placement Process */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Placement Process</h3>
            <div className="space-y-6">
              {placements.placementProcess.map((step, index) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < placements.placementProcess.length - 1 && (
                    <div className="absolute left-5 mt-10 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>View Detailed Placement Report</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Placements;