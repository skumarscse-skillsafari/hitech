import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import Hero from '../components/Hero';
import AccreditationCards from '../components/AccreditationCards';
import DepartmentCards from '../components/DepartmentCards';
import Gallery from '../components/Gallery';
import Placements from '../components/Placements';
import FacultyCarousel from '../components/FacultyCarousel';
import NewsEventsSection from '../components/NewsEventsSection';
import Admissions from '../components/Admissions';
import FAQ from '../components/FAQ';
import LocationMap from '../components/LocationMap';
import Contact from '../components/Contact';
import collegeData from '../data/collegeData.json';
import departmentsData from '../data/departmentsData.json';
import newsEventsData from '../data/newsEventsData.json';
import placementsData from '../data/placementsData.json';
import hit from "../../public/hit.jpg";
import DataTable from '../DataTable';
import { Award, Trophy } from 'lucide-react';

const HomePage: React.FC = () => {
  const allFaculty = departmentsData.departments.flatMap(dept => dept.faculty);

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

      {/* ===== About The Trust Section ===== */}
      <SectionWrapper className="pt-6 pb-0" lazy lazyDelay={300}>
        <div className="text-center mb-4 pt-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{trustInfo.title}</h1>
          <p className="text-2xl text-yellow-600 font-semibold mb-2">
            {trustInfo.subtitle}
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {trustInfo.description}
          </p>
        </div>
      </SectionWrapper>

      {/* ===== About Us Section (with extra margin) ===== */}
      <SectionWrapper lazy lazyHeight="200px" lazyDelay={500}>
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

          {/* ===== Image Block ===== */}
          <div className="relative -mt-10">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={hit}
                alt="Trust Campus"
                className="w-full h-96 object-cover"
              />
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

      <SectionWrapper lazy lazyHeight="300px" lazyDelay={600}>
        <AccreditationCards accreditations={[]} />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="600px" lazyDelay={700}>
        <NewsEventsSection news={newsEventsData.news} events={newsEventsData.events} />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="500px" lazyDelay={900}>
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
      <SectionWrapper lazy lazyHeight="400px" lazyDelay={1100}>
        <Gallery gallery={collegeData.gallery} />
      </SectionWrapper>

      <SectionWrapper className="py-20 bg-gray-50" lazy lazyHeight="600px" lazyDelay={1300}>
        <Placements placements={collegeData.placements} />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="500px" lazyDelay={1700}>
        <Admissions admissions={collegeData.admissions} />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="600px" lazyDelay={1900}>
        <FAQ />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="500px" lazyDelay={2100}>
        <LocationMap />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="400px" lazyDelay={2300}>
        <Contact contact={collegeData.contact} />
        
      </SectionWrapper>
    </PageLayout>
  );
};

export default HomePage;
