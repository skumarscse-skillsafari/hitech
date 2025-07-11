import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import Hero from '../components/Hero';
import AccreditationCards from '../components/AccreditationCards';
import DepartmentCards from '../components/DepartmentCards';
import Gallery from '../components/Gallery';
import Placements from '../components/Placements';
import PlacementTestimonials from '../components/PlacementTestimonials';
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

const HomePage: React.FC = () => {
  // Combine all faculty from all departments for homepage display
  const allFaculty = departmentsData.departments.flatMap(dept => dept.faculty);

  return (
    <PageLayout 
      title="Hindusthan Institute of Technology - Engineering Excellence"
      description="Leading engineering education with cutting-edge research, world-class faculty, and industry partnerships"
      className="pt-44"
    >
      <Hero hero={collegeData.college.hero} />
      
      {/* Accreditation Cards */}
      <SectionWrapper lazy lazyHeight="300px" lazyDelay={300}>
        <AccreditationCards accreditations={[]} />
      </SectionWrapper>
      
      {/* News & Events */}
      <SectionWrapper lazy lazyHeight="600px" lazyDelay={500}>
        <NewsEventsSection 
          news={newsEventsData.news} 
          events={newsEventsData.events} 
        />
      </SectionWrapper>
      
      <SectionWrapper lazy lazyHeight="500px" lazyDelay={700}>
        <DepartmentCards departments={departmentsData.departments} />
      </SectionWrapper>
      
      {/* Social Media Feed with Carousel */}
      <SectionWrapper className="py-20 bg-white" lazy lazyHeight="600px" lazyDelay={900}>
        <SocialMediaCarousel />
      </SectionWrapper>
      
      <SectionWrapper lazy lazyHeight="400px" lazyDelay={1100}>
        <Gallery gallery={collegeData.gallery} />
      </SectionWrapper>
      
      {/* Enhanced Placements with Testimonials */}
      <SectionWrapper className="py-20 bg-gray-50" lazy lazyHeight="600px" lazyDelay={1300}>
        <Placements placements={collegeData.placements} />
        <div className="mt-16">
          <PlacementTestimonials testimonials={placementsData.placements.testimonials} />
        </div>
    
      
      
       
          
        
        
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