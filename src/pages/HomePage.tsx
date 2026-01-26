// HomePage.tsx
import React, { useEffect, useRef, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import Hero from '../components/Hero';
import AccreditationCards from '../components/AccreditationCards';
import DepartmentCards from '../components/DepartmentCards';
import Gallery from '../pages/GalleryPage';
import Placements from '../components/Placements';
import FacultyCarousel from '../components/FacultyCarousel';
import NewsEventsSection from '../components/NewsEventsSection';
import FAQ from '../components/FAQ';
import LocationMap from '../components/LocationMap';
import Contact from '../components/Contact';
import collegeData from '../data/collegeData.json';
import departmentsData from '../data/departmentsData.json';
import newsEventsData from '../data/newsEventsData.json';
import placementsData from '../data/placementsData.json';
import hit from "../../public/hit.jpg";
import { Award, Trophy, FileText } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const HomePage: React.FC = () => {
  const allFaculty = departmentsData.departments.flatMap(dept => dept.faculty) as any;
  const contactRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const [showDCPModal, setShowDCPModal] = useState(false);

  const dcpDepartments = [
    { name: "Aeronautical Engineering", link: "/nba_dcp/aero.pdf" },
    { name: "Computer Science and Engineering", link: "/nba_dcp/cse.pdf" },
    { name: "Electronics and Communication Engineering", link: "/nba_dcp/ece.pdf" },
    { name: "Mechanical Engineering", link: "/nba_dcp/mech.pdf" },
  ];
  useEffect(() => {
    if (location.hash === '#contact' && contactRef.current) {
      // Give time for content to render before scrolling
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [location]);

  const trustInfo = {
    title: "Welcome to HiTECH",
    subtitle: "Hindusthan Educational and Charitable Trust",
    description: "One of the finest in education and teaching, strategically placed in the heart of the city since 1992",
    content: "",
    managementContent: " Hindusthan Educational and Charitable Trust, established in 1992, is a top institution in South India known for its excellence in Arts, Science, Education, and Technical Education. Located in the city's heart, the Trust has a strong legacy of nurturing talent and empowering students through quality education. Recognized for its contributions to society, the Trust has earned the Lifetime Education Achievement Award for its visionary approach and innovative training methodologies. As an autonomous college affiliated to Anna University, it offers a range of academic programs, including 6 undergraduate programs, 2 postgraduate programs, and an MBA, designed to instill technical proficiency and leadership qualities.The curriculum is structured under the Choice Based Credit System (CBCS) and follows Outcome-Based Education (OBE) practices, ensuring a student-centric learning experience with measurable outcomes. ",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  return (
    <PageLayout
      title="Hindusthan Institute of Technology - Engineering Excellence"
      description="Leading engineering education with cutting-edge research, world-class faculty, and industry partnerships"
      className="pt-0"
    >
      <Hero hero={collegeData.college.hero} />

      {/* NBA DCP Floating Button */}
      <motion.button
        onClick={() => setShowDCPModal(true)}
        className="fixed right-6 top-[45%] z-50 group cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {/* Animated pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-yellow-400 opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Main button */}
          <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 px-4 py-3 rounded-xl shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FileText className="w-4 h-4 text-gray-900" strokeWidth={3} />
              </motion.div>
              
              <div className="text-left">
                <p className="text-gray-900 font-bold text-xs leading-tight">NBA DCP</p>
                <p className="text-gray-800 text-[10px] font-medium">View Data</p>
              </div>
            </div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-xl">
              NBA Data Capturing Points
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          </div>
        </div>
      </motion.button>

      {/* NBA DCP Modal */}
      {showDCPModal && (
        <div 
          className="fixed inset-0 bg-gradient-to-br from-black/70 via-gray-900/80 to-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          onClick={() => setShowDCPModal(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border-2 border-yellow-400"
          >
            {/* Decorative top bar */}
            <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"></div>
            
            {/* Header */}
            <div className="relative bg-gradient-to-r from-yellow-50 to-orange-50 p-8 border-b-2 border-yellow-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative flex items-start justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">NBA Data Capturing Points</h2>
                  <p className="text-gray-600 font-medium">(DCP)</p>
                </div>
                <button
                  onClick={() => setShowDCPModal(false)}
                  className="text-gray-400 hover:text-gray-700 hover:rotate-90 transition-all duration-300 p-2 hover:bg-white/50 rounded-full"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-10">
              <p className="text-gray-600 mb-6 text-center font-medium">Select a department to view their Data Capturing Points</p>
              
              <div className="grid gap-4">
                {dcpDepartments.map((dept, index) => (
                  <motion.a
                    key={index}
                    href={dept.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, type: "spring", stiffness: 150 }}
                    className="group relative bg-gradient-to-r from-white to-gray-50 hover:from-yellow-50 hover:to-orange-50 p-5 rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                          {index + 1}
                        </div>
                        <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                          {dept.name}
                        </span>
                      </div>
                      <svg 
                        className="w-6 h-6 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-2 transition-all duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    
                    {/* Hover highlight line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ===== About The Trust Section ===== */}
      <SectionWrapper className="pt-6 pb-0" lazy lazyDelay={200}>
  <div className="text-center mb-4 pt-10">
    <div className="overflow-hidden mb-4 text-center">
  {trustInfo.title.split(" ").map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="inline-block text-5xl sm:text-6xl font-extrabold text-gray-900 hover:text-yellow-500 transition-colors duration-300"
    >
      {word}&nbsp;
    </motion.span>
  ))}
</div>


    <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-4"></div>
    <p className="text-2xl text-yellow-600 font-semibold mb-2">{trustInfo.subtitle}</p>
    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
      {trustInfo.description}
    </p>
  </div>
</SectionWrapper>



      {/* ===== About Us Section (with extra margin) ===== */}
      <SectionWrapper lazy lazyHeight="200px" lazyDelay={200}>
        <div className="grid lg:grid-cols-2 gap-10 items-center mt-[-100]">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold  text-gray-900">About Us</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{trustInfo.content}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{trustInfo.managementContent}</p>
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <span>Key Achievements</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Established in 1992 with a vision to serve youth and humanity</li>
                <li>• Leading brand in power sector before entering education</li>
                <li>• Life Time Education Achievement Award recipient</li>
                <li>• Pioneer in innovative training methodologies</li>
              </ul>
            </div>
          </div>
          <div className="relative -mt-10">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img src={hit} alt="Trust Campus" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">15+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="300px" lazyDelay={300}>
        <AccreditationCards />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="600px" lazyDelay={300}>
        <NewsEventsSection news={newsEventsData.news as any} events={newsEventsData.events} />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="500px" lazyDelay={700}>
        <DepartmentCards
          departments={departmentsData.departments.map((dept: any) => ({
            ...dept,
            programs: (dept.programs || []).filter(
              (prog: any) =>
                typeof prog.name === 'string' &&
                typeof prog.duration === 'string' &&
                typeof prog.intake === 'string' &&
                typeof prog.eligibility === 'string'
            ),
          }))}
        />
      </SectionWrapper>
      <SectionWrapper lazy lazyHeight="400px" lazyDelay={500}>
        <Gallery />
      </SectionWrapper>

      <SectionWrapper className="py-20 bg-gray-50" lazy lazyHeight="600px" lazyDelay={500}>
        <Placements />
      </SectionWrapper>


      <SectionWrapper lazy lazyHeight="600px" lazyDelay={700}>
        <FAQ />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="500px" lazyDelay={900}>
        <LocationMap />
      </SectionWrapper>

      <div id="contact">
  <SectionWrapper>
    <Contact contact={collegeData.contact} />
  </SectionWrapper>
      </div>


    </PageLayout>
  );
};

export default HomePage;
