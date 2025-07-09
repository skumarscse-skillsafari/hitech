import React, { useState } from 'react';
import { BookOpen, Users, Award, Building, Briefcase, Globe, ChevronRight, Plus } from 'lucide-react';

interface TabsSectionProps {
  departmentName: string;
}

const TabsSection: React.FC<TabsSectionProps> = ({ departmentName }) => {
  const [activeTab, setActiveTab] = useState('research');

  const tabs = [
    {
      id: 'research',
      name: 'Research Areas',
      icon: BookOpen,
      content: {
        title: 'Current Research Projects',
        items: [
          {
            title: 'Dr.A.JameerBasha, Professor & Head Dr.S.Lokesh, ASP/CSE Ms.P.Jeevitha, AP/CSE',
            description: 'Design and development of smart assistive device with integration of hybrid blockchain and augmented reality to shape the future mobile healthcare system for post covid challenges and diagnosis system',
            status: '3-years (Ongoing)',
            funding: 'Rs.9,48,614	'
          },
          {
            title: 'Dr.R.Kala AP/CSE',
            description: 'Brain Tumor Detection Using Deep Convolutional Neural Network And Its Application Using FPGA Implementation',
            status: '1 year (Ongoing)',
            funding: 'Rs.2,00,000'
          },
          {
            title: 'Ms.R.T. Subhalakshmi AP/CSE',
            description: 'Automatic segmentation and classification of COVID-19 CT image Using DCN',
            status: '1 Year (ongoing)',
            funding: 'Rs.2,04,000'
          },
          {
            title: 'Dr.S.Lokesh, ASP/CSE',
            description: 'Nano Assistive Communication Device for Elderly and Speech Disability People after Stroke',
            status: '1 Year (Completed)',
            funding: 'Rs.2,10,000	'
          }
        ]
      }
    },
    {
      id: 'industry',
      name: 'Professional Society',
      icon: Briefcase,
      content: {
        title: 'Corporate Collaborations',
        items: [
          {
            title: 'IEEE',
            description: 'IAdvancing Technology for Humanity.',
            type: 'Technology Partner',
            duration: '3 Years'
          },
          {
            title: 'ICT Academy',
            description: 'INOVATE...COLLABRATE...EDUCATE...',
            type: 'Academic Partner',
            duration: '2 Years'
          },
          {
            title: 'Computer Society Of India',
            description: '',
            type: 'Industry Lab',
            duration: '5 Years'
          }
        ]
      }
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
            description: 'Recognized by State Government for excellence in engineering education.',
            year: '2024',
            category: 'Institutional'
          },
          {
            title: 'National Innovation Challenge Winner',
            description: 'Students won first prize in national level innovation competition.',
            year: '2024',
            category: 'Student Achievement'
          },
          {
            title: 'Research Excellence Award',
            description: 'Faculty received recognition for outstanding research contributions.',
            year: '2023',
            category: 'Faculty Achievement'
          }
        ]
      }
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
            description: 'Advanced computing facility with GPU clusters for AI/ML research.',
            capacity: '50 Students',
            equipment: 'NVIDIA Tesla GPUs'
          },
          {
            title: 'Innovation & Incubation Center',
            description: 'Dedicated space for student startups and entrepreneurship development.',
            capacity: '20 Startups',
            equipment: '3D Printers, Prototyping Tools'
          },
          {
            title: 'Industry 4.0 Lab',
            description: 'Smart manufacturing lab with IoT sensors and automation systems.',
            capacity: '30 Students',
            equipment: 'Robotic Arms, IoT Sensors'
          }
        ]
      }
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
            description: 'Semester exchange program with Massachusetts Institute of Technology.',
            country: 'USA',
            students: '10 per year'
          },
          {
            title: 'Research Collaboration - TU Munich',
            description: 'Joint research projects with Technical University of Munich.',
            country: 'Germany',
            projects: '5 Active'
          },
          {
            title: 'Dual Degree Program - University of Toronto',
            description: 'Dual degree program in Computer Science and Engineering.',
            country: 'Canada',
            duration: '4+1 Years'
          }
        ]
      }
    },
    {
      id: 'alumni',
      name: 'Alumni Network',
      icon: Users,
      content: {
        title: 'Distinguished Alumni',
        items: [
          {
            title: 'Rajesh Kumar - CEO, Tech Innovations Inc.',
            description: 'Leading a Fortune 500 technology company with global operations.',
            batch: '2010',
            company: 'Tech Innovations Inc.'
          },
          {
            title: 'Priya Sharma - Senior Engineer, Google',
            description: 'Working on cutting-edge AI projects at Google headquarters.',
            batch: '2015',
            company: 'Google'
          },
          {
            title: 'Amit Patel - Founder, StartupXYZ',
            description: 'Founded a successful startup valued at $100M in the fintech sector.',
            batch: '2012',
            company: 'StartupXYZ'
          }
        ]
      }
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Tab Headers */}
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

      {/* Tab Content */}
      <div className="p-8">
        {activeTabData && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                {activeTabData.content.title}
              </h3>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Add New</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTabData.content.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300 group"
                >
                  <h4 className="font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Dynamic metadata based on tab type */}
                  <div className="space-y-2 text-xs">
                    {Object.entries(item).map(([key, value]) => {
                      if (key === 'title' || key === 'description') return null;
                      return (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-500 capitalize">{key}:</span>
                          <span className="text-gray-700 font-medium">{value}</span>
                        </div>
                      );
                    })}
                  </div>

                  <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add More Button */}
            <div className="text-center pt-6">
              <button className="border-2 border-dashed border-gray-300 hover:border-yellow-500 text-gray-600 hover:text-yellow-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-yellow-50">
                + Add More {activeTabData.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;