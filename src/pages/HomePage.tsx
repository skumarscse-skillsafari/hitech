import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import Hero from '../components/Hero';
import AccreditationCards from '../components/AccreditationCards';
import DepartmentCards from '../components/DepartmentCards';
import Gallery from '../components/Gallery';
import Placements from '../components/Placements';
import FacultyCarousel from '../components/FacultyCarousel';
import SocialMediaCarousel from '../components/SocialMediaCarousel';
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

import { Award, Trophy } from 'lucide-react';

const HomePage: React.FC = () => {
  const allFaculty = departmentsData.departments.flatMap(dept => dept.faculty);

  const trustInfo = {
    title: "About The Trust",
    subtitle: "Hindusthan Educational and Charitable Trust",
    description: "One of the finest in education and teaching, strategically placed in the heart of the city since 1992",
    content: "Hindusthan Educational and Charitable Trust, one of the finest in education and teaching is strategically placed in the heart of the city, and since 1992 has established itself firmly in the fields of Arts, Science, Education and Technical Education. The Trust aims at providing education that is world-class and on par with global standards.",
    managementContent: "The Management has always stood by its commitment to the betterment of the student community and had at first established itself as a brand in the 'power sector', and today in the field of Education has reigned supreme with the 'Life Time Education Achievement Award' for giving back to society. The Management believes in leading and has set new trends/ innovative training methodologies in all its Institutions that will assist students towards the road to success.",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  return (
    <PageLayout
      title="Hindusthan Institute of Technology - Engineering Excellence"
      description="Leading engineering education with cutting-edge research, world-class faculty, and industry partnerships"
      className="pt-44"
    >
      <Hero hero={collegeData.college.hero} />

      {/* ===== About The Trust Section ===== */}
      <SectionWrapper className="py-6">
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{trustInfo.title}</h1>
          <p className="text-xl text-yellow-600 font-semibold mb-1">
            {trustInfo.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {trustInfo.description}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">About Us</h2>
            </div>

            {/* Increased font size here */}
            <p className="text-lg text-gray-700 leading-relaxed">{trustInfo.content}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{trustInfo.managementContent}</p>

            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-yellow-600" />
                <span>Key Achievements</span>
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Established in 1992 with a vision to serve youth and humanity</li>
                <li>• Leading brand in power sector before entering education</li>
                <li>• Life Time Education Achievement Award recipient</li>
                <li>• Pioneer in innovative training methodologies</li>
              </ul>
            </div>
          </div>

          {/* ===== Image Block (Moved Up) ===== */}
          <div className="relative -mt-10"> {/* Image lifted up */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={hit}
                alt="Trust Campus"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-xl border">
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-600">15+</div>
                <div className="text-xs text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5-Column Stats Section */}
      <SectionWrapper className="bg-gradient-to-r from-gray-700 to-gray-600 py-10 px-4 md:px-20" lazy lazyHeight="300px" lazyDelay={550}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-6 text-center text-white">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">15+</h3>
            <p className="mt-2 font-semibold">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">2500+</h3>
            <p className="mt-2 font-semibold">Students</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">500+</h3>
            <p className="mt-2 font-semibold">Faculty Members</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">90%</h3>
            <p className="mt-2 font-semibold">Placement Rate</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">2708</h3>
            <p className="mt-2 font-semibold">TNEA Code</p>
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

      <SectionWrapper className="py-20 bg-white" lazy lazyHeight="600px" lazyDelay={800}>
        <SocialMediaCarousel />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="400px" lazyDelay={700}>
        <Gallery gallery={collegeData.gallery} />
      </SectionWrapper>

      <SectionWrapper className="py-20 bg-gray-50" lazy lazyHeight="600px" lazyDelay={500}>
        <Placements placements={collegeData.placements} />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="500px" lazyDelay={700}>
        <Admissions admissions={collegeData.admissions} />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="600px" lazyDelay={700}>
        <FAQ />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="500px" lazyDelay={600}>
        <LocationMap />
      </SectionWrapper>

      <SectionWrapper lazy lazyHeight="400px" lazyDelay={700}>
        <Contact contact={collegeData.contact} />
      </SectionWrapper>
    </PageLayout>
  );
};

export default HomePage;
