import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  BookOpen, Users, Award, Building, Briefcase, Globe, ChevronRight,
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

interface TabsSectionProps {}

const TabsSection: React.FC<TabsSectionProps> = () => {
  const [activeTab, setActiveTab] = useState('research');

  const tabs = [
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
      id: 'achievements',
      name: 'Achievements',
      icon: Award,
      content: {
        title: 'Recent Accomplishments',
        items: [
          {
            title: 'Best Engineering College Award 2024',
            description: 'Recognized by State Government for excellence.',
            year: '2024',
            category: 'Institutional',
          },
          {
            title: 'National Innovation Challenge Winner',
            description: 'Students won first prize in national innovation competition.',
            year: '2024',
            category: 'Student Achievement',
          },
          {
            title: 'Research Excellence Award',
            description: 'Faculty recognized for outstanding research.',
            year: '2023',
            category: 'Faculty Achievement',
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
      name: 'Collaborations & MoU',
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
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
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
            <h3 className="text-2xl font-bold text-gray-900">{activeTabData.content.title}</h3>

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
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;
