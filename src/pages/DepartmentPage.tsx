import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import DepartmentDetail from '../components/DepartmentDetail';
import DepartmentOutcomes from '../components/DepartmentOutcomes';
import TeachingMethodologyCards from '../components/TeachingMethodologyCards';
import FacultyCarousel from '../components/FacultyCarousel';
import FacilitiesCarousel from '../components/FacilitiesCarousel';
import TabsSection from '../components/TabsSection';

import departmentsData from '../data/departmentsData.json';

const DepartmentPage: React.FC = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const navigate = useNavigate();

  const department = departmentsData.departments.find(dept => dept.id === departmentId);

  if (!department) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageLayout 
      title={`${department.name} - Hindusthan Institute of Technology`}
      description={department.description}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Department Header */}
        <SectionWrapper lazy lazyHeight="300px" lazyDelay={300}>
          <DepartmentDetail department={department} />
        </SectionWrapper>

        {/* Program Outcomes */}
        <SectionWrapper lazy lazyHeight="400px" lazyDelay={600} className="mt-12">
          <DepartmentOutcomes 
            psos={department.psos}
            peos={department.peos}
            pos={department.pos}
            departmentName={department.name}
          />
        </SectionWrapper>

        {/* Teaching Methodologies */}
        <SectionWrapper lazy lazyHeight="500px" lazyDelay={900} className="mt-12">
          <TeachingMethodologyCards 
            methodologies={department.teachingMethodologies}
            departmentName={department.name}
          />
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/innovative-methods')}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Innovative Teaching Methodologies
            </button>
          </div>
        </SectionWrapper>

       
        <SectionWrapper lazy lazyHeight="500px" lazyDelay={1100} className="mt-12">
          <FacilitiesCarousel 
            facilities={department.facilities || []}
            departmentName={department.name}
          />
        </SectionWrapper>

        {/* Faculty */}
        <SectionWrapper lazy lazyHeight="600px" lazyDelay={1300} className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Faculty Members
            </h3>
            <p className="text-gray-600">
              Distinguished faculty contributing to excellence in {department.name}
            </p>
          </div>
          <FacultyCarousel 
            faculty={department.faculty}
            departmentName={department.name}
          />
        </SectionWrapper>

        {/* Tabs Section */}
        <SectionWrapper lazy lazyHeight="400px" lazyDelay={1500} className="mt-12">
          <TabsSection departmentName={department.name} />
        </SectionWrapper>

      </div>
    </PageLayout>
  );
};

export default DepartmentPage;