import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  BookOpen, Users, Award, Building, Briefcase, Globe, ChevronRight,
  User, GraduationCap, ClipboardList, FileText
} from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IEEE from "../../public/IEEE.png";
import ict from "../../public/ict.png";
import csi from "../../public/csi_logo.png";
import ibm from "../../public/ibm.png";
import google from "../../public/google.png";
import oracle from "../../public/oracle.png";
import zoho from "../../public/zoho.png";
import redhat from "../../public/redhat.png";
import dell from "../../public/dell.png";
import vmware from "../../public/vm.png";
import csscorp from "../../public/css.png";
import salesforce from "../../public/sales.png";
import nasscom from "../../public/nasscom.png";
import uipath from "../../public/uipath.png";
import celonis from "../../public/celonis.png";
import infosys from "../../public/infosys.png";

// Add this import for the HOD photo (replace with your actual image path)
import hodPhoto from "../../public/hod-photo.jpg";
import SectionWrapper from './layout/SectionWrapper';
interface TabsSectionProps {}

const TabsSection: React.FC<TabsSectionProps> = () => {
  const [activeTab, setActiveTab] = useState('hod');

  const tabs = [
    {
      id: 'hod',
      name: 'HOD Desk',
      icon: User,
      content: {
        title: 'Message from Head of Department',
        items: [
          {
            title: 'Dr. A. Jameer Basha',
            description: 'Welcome to the Department of Computer Science and Engineering. Our department is committed to excellence in teaching, research, and innovation. We strive to provide our students with the knowledge and skills needed to excel in the rapidly evolving field of computer science.',
            qualification: 'Ph.D in Computer Science and Engineering',
            experience: '15+ years of teaching and research experience',
            specialization: 'Artificial Intelligence, Machine Learning',
            email: 'hod.cse@university.edu',
            phone: '+91 9876543210',
            achievements: 'Published 50+ research papers, Recipient of Best Teacher Award 2023'
          }
        ],
      },
    },
    {
      id: 'research',
      name: 'Research & Development',
      icon: BookOpen,
      content: {
        title: 'Current Research Projects',
        items: [
          {
            title: 'Dr.A.JameerBasha, Professor & Head Dr.S.Lokesh, ASP/CSE Ms.P.Jeevitha, AP/CSE',
            description: 'Design and development of smart assistive device...',
            funding: 'Rs.9,48,614',
            status: '3-years (Ongoing)',
            duration: '3 Years(Ongoing)',
            years: '2030',
          },
          {
            title: 'Dr.R.Kala AP/CSE',
            description: 'Brain Tumor Detection Using Deep CNN and FPGA Implementation',
            funding: 'Rs.2,00,000',
            status: '1 year (Ongoing)',
            duration: '1 Year(Ongoing)',
            years: '2030',
          },
          {
            title: 'Ms.R.T. Subhalakshmi AP/CSE',
            description: 'Automatic segmentation and classification of COVID-19 CT image Using DCN',
            funding: 'Rs.2,04,000',
            status: '1 Year (ongoing)',
            duration: '1 Year(Ongoing)',
            years: '2030',
          },
          {
            title: 'Dr.S.Lokesh, ASP/CSE',
            description: 'Nano Assistive Communication Device for Elderly and Speech Disability People',
            funding: 'Rs.2,00,000',
            status: '1 Year (Completed)',
            duration: '1 Year(Completed)',
            years: '2030',
          },
        ],
      },
    },
    {
      id: 'student-achievements',
      name: 'Student Achievements',
      icon: Award,
      content: {
        title: 'Student Accomplishments',
        items: [
          {
            title: 'National Innovation Challenge Winner',
            description: 'Students won first prize in national innovation competition.',
            year: '2024',
            competition: 'National Level',
            team: 'Team Innovators (5 members)'
          },
          {
            title: 'Hackathon Champions',
            description: 'Won the regional hackathon with an AI-based solution for traffic management.',
            year: '2023',
            competition: 'Regional Level',
            prize: 'Rs. 1,00,000'
          },
          {
            title: 'Paper Publication in IEEE',
            description: 'Undergraduate students published research paper in IEEE conference.',
            year: '2024',
            conference: 'IEEE International Conference',
            topic: 'Machine Learning Applications'
          },
        ],
      },
    },
    {
      id: 'faculty-achievements',
      name: 'Faculty Achievements',
      icon: Award,
      content: {
        title: 'Faculty Accomplishments',
        items: [
          {
            title: 'Best Researcher Award',
            description: 'Recognized for outstanding contributions in AI research.',
            year: '2024',
            awardedBy: 'National Science Foundation',
            area: 'Artificial Intelligence'
          },
          {
            title: 'Patent Granted',
            description: 'Patent for innovative algorithm in image processing.',
            year: '2023',
            patentNumber: 'IN345678',
            field: 'Computer Vision'
          },
          {
            title: 'Book Publication',
            description: 'Published textbook on Advanced Machine Learning adopted by universities.',
            year: '2024',
            publisher: 'Springer',
            subject: 'Machine Learning'
          },
        ],
      },
    },
    {
      id: 'internship',
      name: 'Internship ',
      icon: Briefcase,
      content: {
        title: 'Leading Internship Opportunities',
        items: [
          {
            title: 'Google Summer Internship',
            description: 'Internship program focusing on software engineering and AI projects.',
            duration: '3 Months',
            stipend: '$3000/month',
            openings: '10 Students',
          },
          {
            title: 'Microsoft Research Internship',
            description: 'Opportunities in AI, Cloud Computing, and Quantum Computing research.',
            duration: '6 Months',
            stipend: '$3500/month',
            openings: '8 Students',
          },
          {
            title: 'TCS Digital Internship',
            description: 'Industry projects with mentorship from senior engineers.',
            duration: '4 Months',
            stipend: 'Rs. 25,000/month',
            openings: '20 Students',
          },
        ],
      },
    },
    {
      id: 'innovations',
      name: 'Innovations',
      icon: BookOpen,
      content: {
        title: 'Recent Innovations by Students & Faculty',
        items: [
          {
            title: 'Smart Farming Drone',
            description: 'AI-powered drone for precision agriculture and crop monitoring.',
            year: '2024',
            awards: 'Agritech Innovation Award',
          },
          {
            title: 'AI-Powered Wheelchair',
            description: 'Autonomous wheelchair system for differently-abled people.',
            year: '2023',
            awards: 'National Assistive Tech Award',
          },
          {
            title: 'IoT-Based Water Management System',
            description: 'Smart system to monitor and optimize water usage.',
            year: '2024',
            awards: 'Green Technology Innovation Prize',
          },
        ],
      },
    },
    {
      id: 'placements',
      name: 'Placements',
      icon: Briefcase,
      content: {
        title: 'Placement Highlights',
        items: [
          {
            title: 'Placement Statistics 2024',
            description: 'Our students have been placed in top companies with excellent packages.',
            placed: '95% of students placed',
            highest: 'Rs. 42 LPA',
            average: 'Rs. 8.5 LPA',
            companies: '50+ recruiters'
          },
          {
            title: 'Top Recruiters',
            description: 'Our students have been recruited by leading global companies.',
            list: 'Google, Microsoft, Amazon, TCS, Infosys, Wipro, IBM, Accenture',
            visits: 'Regular campus recruitment drives'
          },
          {
            title: 'Placement Training',
            description: 'Comprehensive training program to prepare students for placements.',
            modules: 'Aptitude, Technical, Communication, Interview Skills',
            duration: 'Year-round program',
            success: '90% placement rate in last 5 years'
          }
        ],
      },
    },
    {
      id: 'obe',
      name: 'OBE Practices',
      icon: ClipboardList,
      content: {
        title: 'Outcome Based Education',
        items: [
          {
            title: 'Program Educational Objectives (PEOs)',
            description: 'To prepare graduates who will be successful professionals in industry, government, academia, research, entrepreneurial pursuit, and consulting firms.',
            peo1: 'Technical Competence',
            peo2: 'Professional Skills',
            peo3: 'Lifelong Learning'
          },
          {
            title: 'Program Outcomes (POs)',
            description: 'Engineering Graduates will be able to:',
            po1: 'Engineering knowledge',
            po2: 'Problem analysis',
            po3: 'Design/development of solutions',
            po12: 'Life-long learning'
          },
          {
            title: 'Program Specific Outcomes (PSOs)',
            description: 'Computer Science and Engineering graduates will be able to:',
            pso1: 'Develop software solutions for real-world problems',
            pso2: 'Apply computing knowledge to emerging technologies',
            pso3: 'Adapt to new tools and technologies in computing'
          }
        ],
      },
    },
    {
      id: 'curriculum-syllabus',
      name: 'Curriculum & Syllabus',
      icon: FileText,
      content: {
        title: 'Curriculum & Syllabus Details',
        items: [
          {
            title: 'Undergraduate Program',
            description: 'B.Tech in Computer Science and Engineering - 4 Year Program',
            credits: '160 Credits',
            semesters: '8 Semesters',
            focus: 'Core CS subjects with electives',
            syllabusLink: 'Download Syllabus PDF'
          },
          {
            title: 'Postgraduate Program',
            description: 'M.Tech in Computer Science and Engineering - 2 Year Program',
            credits: '80 Credits',
            semesters: '4 Semesters',
            specializations: 'AI, Data Science, Cyber Security',
            syllabusLink: 'Download Syllabus PDF'
          },
          {
            title: 'Elective Courses',
            description: 'Wide range of elective courses offered',
            areas: 'AI/ML, Cloud Computing, IoT, Blockchain, Cybersecurity',
            options: '30+ elective courses available',
            syllabusLink: 'Download Electives PDF'
          }
        ],
      },
    },
    {
      id: 'facilities',
      name: 'Advanced Facilities',
      icon: Building,
      content: {
        title: 'State-of-the-Art Infrastructure',
        items: [
          {
            title: 'High Performance Computing Lab',
            description: 'Facility with GPU clusters for AI/ML research.',
            capacity: '50 Students',
            equipment: 'NVIDIA Tesla GPUs',
          },
          {
            title: 'Innovation & Incubation Center',
            description: 'Space for startups and entrepreneurship.',
            capacity: '20 Startups',
            equipment: '3D Printers, Prototyping Tools',
          },
          {
            title: 'Industry 4.0 Lab',
            description: 'Smart manufacturing lab with IoT and automation.',
            capacity: '30 Students',
            equipment: 'Robotic Arms, IoT Sensors',
          },
        ],
      },
    },
    {
      id: 'international',
      name: 'Global Connections',
      icon: Globe,
      content: {
        title: 'International Collaborations',
        items: [
          {
            title: 'Student Exchange Program - MIT',
            description: 'Semester exchange program with MIT.',
            country: 'USA',
            students: '10 per year',
          },
          {
            title: 'Research Collaboration - TU Munich',
            description: 'Joint research with TU Munich.',
            country: 'Germany',
            projects: '5 Active',
          },
          {
            title: 'Dual Degree Program - Toronto',
            description: 'Dual degree in Computer Science and Engineering.',
            country: 'Canada',
            duration: '4+1 Years',
          },
        ],
      },
    },
    {
      id: 'professional',
      name: 'Professional Society',
      icon: Users,
      content: {
        title: 'Professional Society Memberships',
        items: [
          { title: 'IEEE', description: 'Institute of Electrical and Electronics Engineers', logo: IEEE },
          { title: 'ICT Academy', description: 'ICT Academy membership supporting faculty and students.', logo: ict },
          { title: 'Computer Society of India', description: 'Promotes IT professionals and student involvement.', logo: csi },
        ],
      },
    },
    {
      id: 'collaborations',
      name: 'Powered by Industries',
      icon: Briefcase,
      content: {
        title: 'Collaboration & MoU Partners',
        items: [
          { title: 'IBM', description: 'Curriculum integration and delivery in AI & Data Sciences.', logo: ibm },
          { title: 'Google', description: 'Academic partner with tools and resources for digital skills.', logo: google },
          { title: 'Oracle Academy', description: 'Membership providing resources to develop computing skills.', logo: oracle },
          { title: 'Zoho', description: 'Partner for training and internships in application development.', logo: zoho },
          { title: 'Red Hat', description: 'Alliance for Linux, cloud, and development technologies.', logo: redhat },
          { title: 'Dell EMC', description: 'Center of excellence in Data Science and Big Data Analytics.', logo: dell },
          { title: 'VMware', description: 'Center of excellence in cloud infrastructure services.', logo: vmware },
          { title: 'CSS Corp', description: 'Skills training and soft skills development.', logo: csscorp },
          { title: 'Salesforce', description: 'Partner for CRM using AI and app development.', logo: salesforce },
          { title: 'NASSCOM', description: 'Supports India as a global hub for emerging technologies.', logo: nasscom },
          { title: 'UiPath', description: 'Center of Excellence in Robotic Process Automation.', logo: uipath },
          { title: 'Celonis', description: 'Center of Excellence in Process Mining and Execution.', logo: celonis },
          { title: 'Infosys Springboard', description: 'Training and reskilling in technology.', logo: infosys },
        ],
      },
    },
    {
      id: 'projects',
      name: 'Notable Projects',
      icon: BookOpen,
      content: {
        title: 'Showcasing Notable Projects',
        items: [
          {
            title: 'Virtual Reality Campus Tour',
            description: 'Interactive VR tour system for new students and visitors.',
            year: '2023',
            collaborators: 'VR Lab & Design Team',
          },
          {
            title: 'Smart City Traffic Management',
            description: 'AI-based real-time traffic flow optimization solution.',
            year: '2024',
            collaborators: 'Urban Tech Group',
          },
          {
            title: 'Personalized Learning Platform',
            description: 'Adaptive learning software using AI to customize courses.',
            year: '2024',
            collaborators: 'EdTech Research Team',
          },
        ],
      },
    },
    {
      id: 'alumni',
      name: 'Alumni Network',
      icon: Users,
      content: {
        title: 'Distinguished Alumni',
        items: [
          { title: 'Rajesh Kumar - CEO, Tech Innovations', description: 'Leading a Fortune 500 tech company.', batch: '2010', company: 'Tech Innovations' },
          { title: 'Priya Sharma - Senior Engineer, Google', description: 'Working on AI projects at Google HQ.', batch: '2015', company: 'Google' },
          { title: 'Amit Patel - Founder, StartupXYZ', description: 'Founded successful fintech startup.', batch: '2012', company: 'StartupXYZ' },
        ],
      },
    },
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000 
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000
        } 
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="border-b border-gray-200">
        <div className="flex flex-wrap">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-yellow-600 border-yellow-500 bg-yellow-50'
                    : 'text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span className="hidden sm:block">{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-8">
        {activeTabData && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{activeTabData.content.title}</h3>
              {activeTab !== 'hod' && (
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-sm px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                  View more
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>

            {activeTab === 'hod' ? (
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* HOD Photo Section */}
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500 shadow-md mb-4">
                      <img 
                        src={hodPhoto} 
                        alt="HOD Photo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-xl text-center text-gray-900 mb-1">
                      {activeTabData.content.items[0].title}
                    </h4>
                    <p className="text-yellow-600 text-sm font-medium mb-4">Head of Department</p>
                    
                    <div className="text-center space-y-2">
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Email:</span> {activeTabData.content.items[0].email}
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Phone:</span> {activeTabData.content.items[0].phone}
                      </p>
                    </div>
                  </div>
                 
                  {/* HOD Details Section */}
                  <div className="md:w-2/3">
                    <div className="space-y-6">
                      <p className="text-gray-600 leading-relaxed text-justify">
                        {activeTabData.content.items[0].description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <h5 className="font-bold text-gray-800 mb-2 flex items-center">
                            <GraduationCap className="h-5 w-5 mr-2 text-yellow-600" />
                            Qualifications
                          </h5>
                          <p className="text-gray-700 text-sm">
                            {activeTabData.content.items[0].qualification}
                          </p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <h5 className="font-bold text-gray-800 mb-2 flex items-center">
                            <Briefcase className="h-5 w-5 mr-2 text-yellow-600" />
                            Experience
                          </h5>
                          <p className="text-gray-700 text-sm">
                            {activeTabData.content.items[0].experience}
                          </p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <h5 className="font-bold text-gray-800 mb-2 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-yellow-600" />
                            Specialization
                          </h5>
                          <p className="text-gray-700 text-sm">
                            {activeTabData.content.items[0].specialization}
                          </p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                          <h5 className="font-bold text-gray-800 mb-2 flex items-center">
                            <BookOpen className="h-5 w-5 mr-2 text-yellow-600" />
                            Key Achievements
                          </h5>
                          <p className="text-gray-700 text-sm">
                            {activeTabData.content.items[0].achievements}
                          </p>
                        </div>
                      </div>
                      
                      <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center space-x-1 transition-transform hover:translate-x-1">
                        <span>View Full Profile</span>
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Slider {...sliderSettings}>
                {activeTabData.content.items.map((item, index) => (
                  <div key={index} className="px-3">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300 group h-full flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                        {item.logo ? (
                          <div className="flex justify-center">
                            <img src={item.logo} alt={item.title} className="h-16 object-contain" />
                          </div>
                        ) : null}

                        <div className="space-y-2 text-xs mt-4">
                          {Object.entries(item).map(([key, value]) => {
                            if (key === 'title' || key === 'description' || key === 'logo') return null;
                            return (
                              <div key={key} className="flex justify-between">
                                <span className="text-gray-500 capitalize">{key}:</span>
                                <span className="text-gray-700 font-medium">{value}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                        <span>Learn More</span>
                        <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;