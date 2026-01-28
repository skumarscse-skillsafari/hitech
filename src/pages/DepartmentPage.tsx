import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { BookOpen, Newspaper } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import SectionWrapper from "../components/layout/SectionWrapper";
import LazyLoadWrapper from "../components/LazyLoadWrapper";
import DepartmentDetail from "../components/DepartmentDetail";
import TeachingMethodologyCards from "../components/TeachingMethodologyCards";
import FacultyCarousel from "../components/FacultyCarousel";
import FacilitiesCarousel from "../components/FacilitiesCarousel";
import TabsSection from "../components/TabSection";
import LabSection from "../components/LabSection"; // Now uses its own cseLabsData
import AchievementsModal from "../components/AchievementsModal";
import departmentsData from "../data/departmentsData.json";
import cseAchievementsData from "../data/cseAchievementsData.json";

import DepartmentSectionNav from "../components/navigation/DepartmentSectionNav";

const DepartmentPage: React.FC = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const navigate = useNavigate();
  const [showAchievementsModal, setShowAchievementsModal] = useState(false);

  const department = departmentsData.departments.find(
    (dept) => dept.id === departmentId,
  );

  if (!department) {
    return <Navigate to="/" replace />;
  }

  // Show achievements modal only for CSE department on page load with a delay
  useEffect(() => {
    if (departmentId === "cse") {
      // Delay to ensure page is fully loaded and scroll position is set
      const timer = setTimeout(() => {
        setShowAchievementsModal(true);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      setShowAchievementsModal(false);
    }
  }, [departmentId]);

  const sections = [
    { id: 'about-department', label: 'About the Department' },
    { id: 'department-vision-mission', label: 'Vision and Mission' },
    { id: 'psos-peos-pos', label: 'Outcomes (PEO/PSO)' },
    { id: 'obe', label: 'OBE Philosophy & Inputs' },
    { id: 'centres-of-excellence', label: 'Centres of Excellence' },
    { id: 'research-innovation', label: 'Research & Innovation' },
    { id: 'placements', label: 'Placements' },
    { id: 'industry', label: 'Industry Oriented Training' },
    { id: 'events-organised', label: 'Events Organised' },
    { id: 'teaching', label: 'Teaching Methodology' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'labs', label: 'Laboratories' },
    { id: 'faculty', label: 'Faculty Members' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <>
      {/* Achievements Modal for CSE Department */}
      {departmentId === "cse" &&
        showAchievementsModal &&
        cseAchievementsData?.teams && (
          <AchievementsModal
            isOpen={showAchievementsModal}
            onClose={() => setShowAchievementsModal(false)}
            teams={cseAchievementsData.teams}
          />
        )}

      <PageLayout
        title={`${department.name} - Hindusthan Institute of Technology`}
        description={department.description}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-[-120px] sm:mt-[-150px]">
          <div className="lg:flex lg:gap-12 xl:gap-16">
            {/* Left Navigation Sidebar */}
            <aside className="hidden lg:block lg:w-72 lg:flex-shrink-0">
              <div className="sticky top-32 pt-4">
                <DepartmentSectionNav sections={sections} />
              </div>
            </aside>

            {/* Mobile Nav Instance - Hidden on LG, but accessible on mobile via fixed toggle */}
            <div className="lg:hidden">
              <DepartmentSectionNav sections={sections} />
            </div>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 space-y-16 lg:pr-20 xl:pr-24">
              {/* Department Header */}
              <div className="scroll-mt-32">
                <SectionWrapper containerClassName="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <DepartmentDetail 
                    department={{
                      ...department,
                      // Normalize faculty data to match expected structure
                      faculty: (department.faculty || []).map(faculty => {
                        // Check if researchAreas exists, otherwise create empty array and add missing fields
                        if ('researchAreas' in faculty) {
                          // Faculty has researchAreas structure (AI/ML type)
                          return {
                            ...faculty,
                            description: ('description' in faculty && faculty.description) || '',
                            patents: ('patents' in faculty && faculty.patents) || 0,
                            date_of_joining: ('date_of_joining' in faculty && faculty.date_of_joining) || ''
                          };
                        } else {
                          // Faculty has CSE structure (with date_of_joining, patents, etc.)
                          return {
                            ...faculty,
                            researchAreas: [],
                            // Ensure description is present for FacultyCarousel compatibility
                            description: ('description' in faculty && faculty.description) || ''
                          };
                        }
                      }),
                      // Normalize PSOs to match expected structure - handle different possible structures
                      psos: (department.psos || []).map(pso => {
                        // Type guard to check if pso has code and title properties
                        if ('code' in pso && 'title' in pso) {
                          return {
                            ...pso,
                            id: pso.id ? String(pso.id) : undefined,
                            code: pso.code ? String(pso.code) : undefined,
                            title: pso.title ? String(pso.title) : undefined
                          };
                        } else {
                          // Handle case where pso might only have id, title, description
                          return {
                            id: 'id' in pso ? String(pso.id) : undefined,
                            code: undefined,
                            title: 'title' in pso ? String((pso as any).title) : undefined,
                            description: 'description' in pso ? (pso as any).description : (pso as any).title || '' // Fallback to title or empty string
                          };
                        }
                      }),
                      // Normalize PEOs to match expected structure
                      peos: (department.peos || []).map(peo => {
                        if ('code' in peo && 'title' in peo) {
                          return {
                            ...peo,
                            id: peo.id ? String(peo.id) : undefined,
                            code: peo.code ? String(peo.code) : undefined,
                            title: peo.title ? String(peo.title) : undefined
                          };
                        } else {
                          return {
                            id: 'id' in peo ? String(peo.id) : undefined,
                            code: undefined,
                            title: 'title' in peo ? String((peo as any).title) : undefined,
                            description: 'description' in peo ? (peo as any).description : (peo as any).title || '' // Fallback to title or empty string
                          };
                        }
                      }),
                      // Normalize POs to match expected structure
                      pos: (department.pos || []).map(po => {
                        if ('code' in po && 'title' in po) {
                          return {
                            ...po,
                            id: po.id ? String(po.id) : undefined,
                            code: po.code ? String(po.code) : undefined,
                            title: po.title ? String(po.title) : undefined
                          };
                        } else {
                          // Ensure we always return a proper PO object with required fields
                          return {
                            id: 'id' in po ? String(po.id) : undefined,
                            code: undefined,
                            title: 'title' in po ? String((po as any).title) : undefined,
                            description: 'description' in po ? (po as any).description : (po as any).title || '' // Fallback to title or empty string
                          };
                        }
                      })
                    }} 
                  />
                </SectionWrapper>
              </div>

              {/* Teaching Methodologies */}
              <div id="teaching" className="scroll-mt-24">
                <SectionWrapper containerClassName="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <LazyLoadWrapper height="500px" delay={900}>
                    <TeachingMethodologyCards
                      methodologies={department.teachingMethodologies}
                      departmentName={department.name}
                    />
                    <div className="text-center mt-8">
                      <button
                        onClick={() => navigate("/innovative-methods")}
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                      >
                        View all Innovative Teaching Methodologies →
                      </button>
                    </div>
                  </LazyLoadWrapper>
                </SectionWrapper>
              </div>

              {/* Facilities Carousel */}
              <div id="facilities" className="scroll-mt-24">
                <SectionWrapper containerClassName="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <LazyLoadWrapper height="500px" delay={1100}>
                    <FacilitiesCarousel
                      facilities={[]}
                      departmentName={department.name}
                    />
                  </LazyLoadWrapper>
                </SectionWrapper>
              </div>

              {/* Laboratory Section */}
              <div id="labs" className="scroll-mt-24">
                <SectionWrapper containerClassName="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <LazyLoadWrapper height="600px" delay={1200}>
                    <LabSection departmentName={department.name} />
                  </LazyLoadWrapper>
                </SectionWrapper>
              </div>

              {/* Faculty Members */}
              <div id="faculty" className="scroll-mt-24">
                <SectionWrapper containerClassName="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <LazyLoadWrapper height="600px" delay={1300}>
                    <div className="text-center mb-8 px-2">
                      <h2 className="text-xl sm:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
                        Faculty Members
                      </h2>
                      <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-4"></div>
                      <p className="text-sm sm:text-base text-gray-600">
                        Distinguished faculty contributing to excellence in{" "}
                        {department.name}
                      </p>
                    </div>
                    <FacultyCarousel
                      faculty={(department.faculty || []).map(faculty => {
                        // Type guard to check if faculty has researchAreas
                        const hasResearchAreas = 'researchAreas' in faculty;
                        
                        if (hasResearchAreas) {
                          // Faculty has researchAreas structure (AI/ML type)
                          const facultyWithResearchAreas = faculty as any;
                          return {
                            ...facultyWithResearchAreas,
                            description: (facultyWithResearchAreas.description !== undefined) ? facultyWithResearchAreas.description : '',
                            patents: (facultyWithResearchAreas.patents !== undefined) ? facultyWithResearchAreas.patents : 0,
                            date_of_joining: (facultyWithResearchAreas.date_of_joining !== undefined) ? facultyWithResearchAreas.date_of_joining : ''
                          };
                        } else {
                          // Faculty has CSE structure (with date_of_joining, patents, etc.)
                          const facultyWithoutResearchAreas = faculty as any;
                          return {
                            ...facultyWithoutResearchAreas,
                            researchAreas: [],
                            // Ensure description is present for FacultyCarousel compatibility
                            description: (facultyWithoutResearchAreas.description !== undefined) ? facultyWithoutResearchAreas.description : ''
                          };
                        }
                      })}
                      departmentName={department.name}
                    />
                  </LazyLoadWrapper>
                </SectionWrapper>
              </div>

              {/* Tabs Section */}
              <div id="resources" className="scroll-mt-24">
                <SectionWrapper containerClassName="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <LazyLoadWrapper height="400px" delay={600}>
                    <TabsSection departmentName={department.name} />
                  </LazyLoadWrapper>
                </SectionWrapper>
              </div>

              {/* Call to Action */}
              <div id="contact" className="scroll-mt-24 mb-12">
                <SectionWrapper containerClassName="w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <LazyLoadWrapper height="200px" delay={1700}>
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-10 sm:px-12 sm:py-16 rounded-2xl text-center text-white">
                      <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
                        Join Our Educational Legacy
                      </h2>
                      <p className="text-sm sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
                        Be part of an institution that has been shaping futures
                        for over three decades
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
                  </LazyLoadWrapper>
                </SectionWrapper>
              </div>
            </main>
          </div>
        </div>

        {/* Magazine button */}
        <div className="fixed right-0 top-[38%] transform -translate-y-1/2 z-50">
          <button
            onClick={() => navigate("/magazine")}
            className="group flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 w-12 hover:w-40 h-12 rounded-l-xl shadow-lg transition-all duration-300 overflow-hidden"
            title="Magazine"
          >
            {/* Icon always visible, stays at right */}
            <div className="flex-shrink-0 w-12 flex items-center justify-center">
              <BookOpen className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce" />
            </div>

            {/* Text slides in when expanded */}
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap font-bold">
              Magazine
            </span>
          </button>
        </div>

        {/* Newsletter button */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <button
            onClick={() => navigate("/newsletter")}
            className="group flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 w-12 hover:w-40 h-12 rounded-l-xl shadow-lg transition-all duration-300 overflow-hidden"
            title="NewsLetter"
          >
            <div className="flex-shrink-0 w-12 flex items-center justify-center">
              <Newspaper className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce" />
            </div>

            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap font-bold">
              NewsLetter
            </span>
          </button>
        </div>
      </PageLayout>
    </>
  );
};

export default DepartmentPage;