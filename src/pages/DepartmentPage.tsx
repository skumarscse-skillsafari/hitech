import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import DepartmentDetail from '../components/DepartmentDetail';
import TeachingMethodologyCards from '../components/TeachingMethodologyCards';
import FacultyCarousel from '../components/FacultyCarousel';
import FacilitiesCarousel from '../components/FacilitiesCarousel';
import TabsSection from '../components/TabSection';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-150px]">

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
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Innovative Teaching Methodologies
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

        {/* Faculty Members */}
        <SectionWrapper lazy lazyHeight="600px" lazyDelay={1300} className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Faculty Members</h3>
            <p className="text-gray-600">
              Distinguished faculty contributing to excellence in {department.name}
            </p>
          </div>
          <FacultyCarousel
            faculty={department.faculty}
            departmentName={department.name}
          />
        </SectionWrapper>

        {/* Department Tabs Section */}
        <SectionWrapper lazy lazyHeight="400px" lazyDelay={1500} className="mt-12">
          <TabsSection departmentName={department.name} />
        </SectionWrapper>

        {/* Call to Action */}
        <SectionWrapper lazy lazyHeight="200px" lazyDelay={1700} className="mb-12 mt-16">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-12 sm:px-12 sm:py-16 rounded-2xl text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Our Educational Legacy</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of an institution that has been shaping futures for over three decades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-6 py-3 sm:px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Explore Programs
              </button>
              <button className="border-2 border-white text-white px-6 py-3 sm:px-8 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
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
