import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import DepartmentDetail from '../components/DepartmentDetail';
import TeachingMethodologyCards from '../components/TeachingMethodologyCards';
import FacultyCarousel from '../components/FacultyCarousel';
import FacilitiesCarousel from '../components/FacilitiesCarousel';
import TabsSection from '../components/TabSection';
import LabSection from '../components/LabSection'; // Now uses its own cseLabsData
import departmentsData from '../data/departmentsData.json';
import StudentClubs from './StuClub';

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
      {/* Back Button */}
      <div className="fixed top-[200px] left-9 z-50">
        <div
          className="group relative w-12 h-12 rounded-full bg-yellow-500 shadow-lg flex items-center justify-center cursor-pointer hover:bg-yellow-600 transition-all duration-300"
          onClick={() => navigate(-1)}
        >
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Back
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-120px] sm:mt-[-150px]">
        {/* Department Header */}
        <SectionWrapper lazy lazyHeight="300px" lazyDelay={300}>
          <DepartmentDetail department={department} />
        </SectionWrapper>

        <SectionWrapper lazy lazyHeight="300px" lazyDelay={300}>
          <StudentClubs />
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
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              View all Innovative Teaching Methodologies →
            </button>
          </div>
        </SectionWrapper>

        {/* Facilities Carousel */}
        <SectionWrapper lazy lazyHeight="500px" lazyDelay={1100} className="mt-12">
          <FacilitiesCarousel
            facilities={department.facilities || []}
            departmentName={department.name}
          />
        </SectionWrapper>

        {/* Laboratory Section */}
        <SectionWrapper lazy lazyHeight="600px" lazyDelay={1200} className="mt-12">
          <LabSection departmentName={department.name} />
        </SectionWrapper>

        {/* Faculty Members */}
        <SectionWrapper lazy lazyHeight="600px" lazyDelay={1300} className="mt-12">
          <div className="text-center mb-8 px-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
              Faculty Members
            </h2>
            <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600">
              Distinguished faculty contributing to excellence in {department.name}
            </p>
          </div>
          <FacultyCarousel
            faculty={department.faculty}
            departmentName={department.name}
          />
        </SectionWrapper>

        {/* Tabs Section */}
        <SectionWrapper lazy lazyHeight="400px" lazyDelay={600} className="mt-12">
          <TabsSection departmentName={department.name} />
        </SectionWrapper>

        {/* Call to Action */}
        <SectionWrapper lazy lazyHeight="200px" lazyDelay={1700} className="mb-12 mt-16">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-10 sm:px-12 sm:py-16 rounded-2xl text-center text-white">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Join Our Educational Legacy
            </h2>
            <p className="text-sm sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of an institution that has been shaping futures for over three decades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 w-full sm:w-auto">
                Explore Programs
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-200 w-full sm:w-auto">
                Contact Us
              </button>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </PageLayout>
  );
};

export default DepartmentPage;
