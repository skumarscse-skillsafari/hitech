import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import DepartmentDetail from '../components/DepartmentDetail';
import DepartmentOutcomes from '../components/DepartmentOutcomes';
import TeachingMethodologyCards from '../components/TeachingMethodologyCards';
import FacultyCarousel from '../components/FacultyCarousel';
import FacilitiesCarousel from '../components/FacilitiesCarousel';
import TabsSection from '../components/TabSection';
import CustomSection from '../components/CustomSection';
import reusePageData from '../data/reusePageData.json';

const ReusePage: React.FC = () => {
  const { reusePage } = reusePageData;

  return (
    <PageLayout 
      title={`${reusePage.name} - Hindusthan Institute of Technology`}
      description={reusePage.description}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <SectionWrapper lazy lazyHeight="300px" lazyDelay={300} className="">
          <DepartmentDetail department={reusePage} />
        </SectionWrapper>

        {/* Custom Sections - Dynamic rendering based on JSONn */}
        {reusePage.sections.map((section, index) => (
          <SectionWrapper 
            key={section.id}
            lazy 
            lazyHeight="200px" 
            lazyDelay={500 + (index * 200)} 
            className="mt-12"
          >
            <CustomSection section={section} />
          </SectionWrapper>
        ))}

        {/* Program Outcomes */}
        <SectionWrapper lazy lazyHeight="400px" lazyDelay={900} className="mt-12">
          <DepartmentOutcomes 
            psos={reusePage.psos}
            peos={reusePage.peos}
            pos={reusePage.pos}
            departmentName={reusePage.name}
          />
        </SectionWrapper>

        {/* Teaching Methodologies */}
        <SectionWrapper lazy lazyHeight="500px" lazyDelay={1100} className="mt-12">
          <TeachingMethodologyCards 
            methodologies={reusePage.teachingMethodologies}
            departmentName={reusePage.name}
          />
          <div className="text-center mt-8">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Explore All Methodologies
            </button>
          </div>
        </SectionWrapper>

        {/* Facilities & Infrastructure */}
        <SectionWrapper lazy lazyHeight="500px" lazyDelay={1300} className="mt-12">
          <FacilitiesCarousel 
            facilities={[]}
            departmentName={reusePage.name}
          />
        </SectionWrapper>

        {/* Faculty */}
        <SectionWrapper lazy lazyHeight="600px" lazyDelay={1500} className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Team Members
            </h3>
            <p className="text-gray-600">
              Meet the experts behind {reusePage.name}
            </p>
          </div>
          <FacultyCarousel 
            faculty={reusePage.faculty}
            departmentName={reusePage.name}
          />
        </SectionWrapper>

        {/* Custom Sections from JSON */}
        {reusePage.customSections.map((customSection, index) => (
          <SectionWrapper 
            key={customSection.id}
            lazy 
            lazyHeight="400px" 
            lazyDelay={1700 + (index * 200)} 
            className="mt-12"
          >
            <CustomSection section={customSection} />
          </SectionWrapper>
        ))}

        {/* Tabs Section */}
        <SectionWrapper lazy lazyHeight="400px" lazyDelay={1900} className="mt-12">
          <TabsSection departmentName={reusePage.name} />
        </SectionWrapper>

        {/* Configuration Display */}
        <SectionWrapper lazy lazyHeight="300px" lazyDelay={2100} className="mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Template Configuration</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Theme Settings</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Primary Color:</span>
                    <div 
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: reusePage.configuration.theme.primaryColor }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Secondary Color:</span>
                    <div 
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: reusePage.configuration.theme.secondaryColor }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <span>Accent Color:</span>
                    <div 
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: reusePage.configuration.theme.accentColor }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Layout Options</h4>
                <div className="space-y-2 text-sm">
                  {Object.entries(reusePage.configuration.layout).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className={value ? 'text-green-600' : 'text-red-600'}>
                        {value ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Features</h4>
                <div className="space-y-2 text-sm">
                  {Object.entries(reusePage.configuration.features).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className={value ? 'text-green-600' : 'text-red-600'}>
                        {value ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

      </div>
    </PageLayout>
  );
};

export default ReusePage;