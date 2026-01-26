// HomePage.tsx
import React, { useEffect, useRef } from 'react';
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
import { Award, Trophy, FileText, Building2, GraduationCap, Lightbulb, User, Users, Briefcase, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const HomePage: React.FC = () => {
  const allFaculty = departmentsData.departments.flatMap(dept => dept.faculty);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

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

      {/* ===== Resources Navigation Bar ===== */}
      <section className="pt-6 pb-0 relative z-[60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg relative" style={{ overflow: 'visible' }}>
            <div className="border-b border-gray-200" style={{ overflow: 'visible' }}>
              {/* TabSection.tsx style navbar */}
              <div className="flex flex-wrap" style={{ overflow: 'visible' }}>
              {/* AQAR Report 2022-23 */}
              <a
                href="/pdf nav/AQAR 2022-23.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              >
                <FileText className="h-5 w-5" />
                <span>AQAR Report 2022-23</span>
              </a>

              {/* ARIIA Report */}
              <a
                href="/pdf nav/ARI-C-37046.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              >
                <FileText className="h-5 w-5" />
                <span>ARIIA Report</span>
              </a>

              {/* NIRF Report 2025 - Dropdown with yellow header */}
              <div className="relative group">
                <button 
                  className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-yellow-600 border-yellow-500 bg-yellow-50"
                >
                  <FileText className="h-5 w-5" />
                  <span>NIRF Report 2025</span>
                </button>
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-gray-300 shadow-xl z-[200] min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <div className="bg-yellow-500 text-white px-4 py-2 text-sm font-semibold">NIRF Report 2025</div>
                  <a href="/pdf nav/NIRF-Engineering-DCS-2025.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    NIRF-Engineering-DCS-2025
                  </a>
                  <a href="/pdf nav/NIRF-Innovation-DCS-2025.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    NIRF-Innovation-DCS-2025
                  </a>
                  <a href="/pdf nav/NIRF-Overall-DCS-2025.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    NIRF-Overall-DCS-2025
                  </a>
                  <a href="/pdf nav/NIRF-SDG REPORT-2025.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    NIRF-SDG Report-2025
                  </a>
                </div>
              </div>

              {/* Mandatory Disclosure */}
              <a
                href="/pdf nav/mandt_disclos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              >
                <FileText className="h-5 w-5" />
                <span>Mandatory Disclosure</span>
              </a>

              {/* NAAC / NBA */}
              <a
                href="/pdf nav/accreditation2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              >
                <Award className="h-5 w-5" />
                <span>NAAC / NBA</span>
              </a>

              {/* AU Affiliation - Dropdown with yellow header */}
              <div className="relative group">
                <button 
                  className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
                >
                  <Building2 className="h-5 w-5" />
                  <span>AU Affiliation</span>
                </button>
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-gray-300 shadow-xl z-[200] min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <div className="bg-yellow-500 text-white px-4 py-2 text-sm font-semibold">AU Affiliation</div>
                  <a href="/pdf nav/AU Affiliation 2024-25.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    AU Affiliation 2024-25
                  </a>
                  <a href="/pdf nav/AU Affiliation 2023-24.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    AU Affiliation 2023-24
                  </a>
                  <a href="/pdf nav/AU Affiliation 2022-23.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    AU Affiliation 2022-23
                  </a>
                  <a href="/pdf nav/AU Affiliation 2021-22.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    AU Affiliation 2021-22
                  </a>
                </div>
              </div>

              {/* AICTE EOA/LOA - Dropdown with yellow header */}
              <div className="relative group">
                <button 
                  className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
                >
                  <FileText className="h-5 w-5" />
                  <span>AICTE EOA/LOA</span>
                </button>
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-gray-300 shadow-xl z-[200] min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <div className="bg-yellow-500 text-white px-4 py-2 text-sm font-semibold">AICTE EOA/LOA</div>
                  <a href="/pdf nav/EOA 25-26.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    EOA 2025-26
                  </a>
                  <a href="/pdf nav/EOA 24-25.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    EOA 2024-25
                  </a>
                  <a href="/pdf nav/EOA 23-24.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    EOA 2023-24
                  </a>
                  <a href="/pdf nav/EOA 22-23.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    EOA 2022-23
                  </a>
                  <a href="/pdf nav/EOA 21-22.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    EOA 2021-22
                  </a>
                  <a href="/pdf nav/EOA 07-08 TO 25-26.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    EOA 2007-2026
                  </a>
                </div>
              </div>

              {/* Academic Bank of Credits */}
              <a
                href="https://www.abc.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Academic Bank of Credits</span>
              </a>

              {/* INNOVATION & START-UP POLICY - Dropdown with yellow header */}
              <div className="relative group">
                <button 
                  className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
                >
                  <Lightbulb className="h-5 w-5" />
                  <span>INNOVATION & START-UP POLICY</span>
                </button>
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-gray-300 shadow-xl z-[200] min-w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <div className="bg-yellow-500 text-white px-4 py-2 text-sm font-semibold">INNOVATION & START-UP POLICY</div>
                  <a href="/pdf nav/Hitech Policy_new.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    HINDUSTHAN INSTITUTE OF TECHNOLOGY INNOVATION & START-UP POLICY AND GUIDELINES 2021 FOR FACULTY AND STUDENTS
                  </a>
                  <a href="/pdf nav/startup_policy_2019.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                    National INNOVATION and STARTUP Policy 2019 for Students and Faculty
                  </a>
                </div>
              </div>

              {/* INTERNATIONAL YOGA DAY 2024 */}
              <a
                href="/pdf nav/YOGA DAY CELEBRATION 2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              >
                <User className="h-5 w-5" />
                <span className="italic">INTERNATIONAL YOGA DAY 2024</span>
              </a>

              {/* STUDENT'S TESTIMONIALS */}
              <a
                href="/pdf nav/student testimonials.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              >
                <Users className="h-5 w-5" />
                <span>STUDENT'S TESTIMONIALS</span>
              </a>

              {/* Placement Details */}
              <a
                href="/pdf nav/HiTECH Placement Details.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              >
                <Briefcase className="h-5 w-5" />
                <span>Placement Details</span>
              </a>

              {/* AUERC Remote Access */}
              <a
                href="https://library.annauniv.edu/auerc_home.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              >
                <Globe className="h-5 w-5" />
                <span>AUERC Remote Access</span>
              </a>

              {/* Audit Reports - Dropdown with yellow header */}
              <div className="relative group">
                <button 
                  className="flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
                >
                  <FileText className="h-5 w-5" />
                  <span>Audit Reports</span>
                </button>
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-gray-300 shadow-xl z-[200] min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <div className="bg-yellow-500 text-white px-4 py-2 text-sm font-semibold">Audit Reports</div>
                  <a href="/pdf nav/Audit 2022-23.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    Audit Report 2022-23
                  </a>
                  <a href="/pdf nav/Audit 2021-22.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    Audit Report 2021-22
                  </a>
                  <a href="/pdf nav/Audit 2020-21.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100">
                    Audit Report 2020-21
                  </a>
                  <a href="/pdf nav/Audit 2019-20.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Audit Report 2019-20
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ===== About The Trust Section ===== */}
      <SectionWrapper className="pt-6 pb-0 relative z-10" lazy lazyDelay={200}>
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
      <SectionWrapper className="relative z-10" lazy lazyHeight="200px" lazyDelay={200}>
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
        <AccreditationCards accreditations={[]} />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="600px" lazyDelay={300}>
        <NewsEventsSection news={newsEventsData.news} events={newsEventsData.events} />
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
        <Gallery gallery={collegeData.gallery} />
      </SectionWrapper>

      <SectionWrapper className="py-20 bg-gray-50" lazy lazyHeight="600px" lazyDelay={500}>
        <Placements placements={collegeData.placements} />
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
