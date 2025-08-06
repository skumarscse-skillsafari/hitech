import React from 'react';
import { TrendingUp, Users, Award, Building, Star, ArrowRight } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import collegeData from '../data/collegeData.json';

const PlacementsPage: React.FC = () => {
  const { placements } = collegeData;

  return (
    <PageLayout 
      title="Placements - Hindusthan Institute of Technology"
      description="Discover our excellent placement record with top companies. View placement statistics, top recruiters, and success stories."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <SectionWrapper lazy lazyHeight="200px" lazyDelay={300} className="">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Placement Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive placement program ensures exceptional career opportunities through 
              strong industry partnerships, rigorous training, and personalized career guidance.
            </p>
          </div>
        </SectionWrapper>

        {/* Placement Stats */}
        <SectionWrapper lazy lazyHeight="300px" lazyDelay={500} className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                <TrendingUp className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-3">{placements.stats.placementRate}</div>
              <div className="text-gray-600 font-medium">Placement Rate</div>
              <div className="text-sm text-green-600 mt-2">↗ 5% increase from last year</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                <Award className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-3">{placements.stats.averagePackage}</div>
              <div className="text-gray-600 font-medium">Average Package</div>
              <div className="text-sm text-green-600 mt-2">↗ 12% increase from last year</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-3">{placements.stats.highestPackage}</div>
              <div className="text-gray-600 font-medium">Highest Package</div>
              <div className="text-sm text-blue-600 mt-2">New record this year!</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group">
              <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                <Building className="h-10 w-10 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-3">{placements.stats.companiesVisited}</div>
              <div className="text-gray-600 font-medium">Companies Visited</div>
              <div className="text-sm text-green-600 mt-2">↗ 25 new companies</div>
            </div>
          </div>
        </SectionWrapper>

        {/* Call to Action */}
     <div className="text-center">
      <a
        href="/pdf/Placed0.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-5 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto shadow-lg text-lg"
      >
        <span>View Detailed Placement Report</span>
        <ArrowRight className="h-6 w-6" />
      </a>
    </div>

      </div>
    </PageLayout>
  );
};

export default PlacementsPage;