import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, Users, Award, Building, Briefcase, Globe, ChevronRight,
  User, GraduationCap, ClipboardList, FileText, CalendarDays
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

const iconMap = {
  BookOpen, Users, Award, Building, Briefcase, Globe,
  User, GraduationCap, ClipboardList, FileText, Calendar: CalendarDays
};

const logoMap = {
  IEEE, ict, csi, ibm, google, oracle, zoho, redhat, dell,
  vmware, csscorp, salesforce, nasscom, uipath, celonis, infosys
};

const eventImageMap = {
  'file-J9BVu9zM8oDHyhLN6xHPWx': 'hackathon.jpg',
  'file-LSj37azmiY5Pc65232ZVmW': 'workshop.jpg',
  'file-PvpLe9Jq7twhCq7NFN9nS5': 'seminar.jpg'
};

const TabsSection: React.FC = () => {
  const [tabs, setTabs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>('hod');
  const navigate = useNavigate();

  useEffect(() => {
    import('../data/tabsData.json').then((data) => {
      const enrichedTabs = data.tabs.map((tab: any) => ({
        ...tab,
        icon: iconMap[tab.icon as keyof typeof iconMap] || CalendarDays,
        content: {
          ...tab.content,
          items: tab.content.items.map((item: any) => ({
            ...item,
            logo: item.logo ? logoMap[item.logo as keyof typeof logoMap] : undefined,
            image: item.image ? eventImageMap[item.image as keyof typeof eventImageMap] : undefined
          }))
        }
      }));
      setTabs(enrichedTabs);
    });
  }, []);

  const activeTabData = tabs.find(tab => tab.id === activeTab);
  // ✅ Dynamically set slidesToShow based on item count
  const getSlidesToShow = () => {
    if (!activeTabData) return 1;
    const count = activeTabData.content.items.length;
    if (count >= 4) return 4;
    return count;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  const handleViewMore = () => {
    const routeMap: Record<string, string> = {
      internships: 'internships',
      micro: 'micro_projects',
      prototypes: 'prototypes',
      research: 'research',
      notable: 'notable',
      faculty_ach: 'faculty_achievements',
      'latest-events': 'latest-event',
      innovations: 'innovations',
      placements_tab: 'placements_tab',
    };

    const route = routeMap[activeTab] || activeTab;

    if (activeTab === 'latest-events') {
      navigate(`/${route}`);
    } else {
      navigate(`/datatable/${route}`);
    }
  };

  // 🔹 Short & descriptive button labels
  const buttonLabels: Record<string, string> = {
    'latest-events': 'More Events',
    research: 'More Proposals',
    student_achievements: 'More Achievements',
    faculty_achievements: 'More Achievements',
    internships: 'More Internships',
    innovations: 'More Innovations',
    placements: 'More Placements',
    sdgs: 'More SDGs',
    academic_calendar: 'More Calendar',
    obe: 'More OBE',
    curriculum_syllabus: 'More Curriculum',
    facilities: 'More Facilities',
    global_connections: 'More Connections',
    professional: 'More Society',
    collaborations: 'More Industries',
    notable: 'More Projects',
    alumni: 'More Alumni'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="border-b border-gray-200">
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'text-yellow-600 border-yellow-500 bg-yellow-50'
                  : 'text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50'
              }`}
            >
              {tab.icon && <tab.icon className="h-5 w-5" />}
              <span className="hidden sm:block">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-8">
        {activeTabData && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                {activeTabData.content.title}
              </h3>
              {activeTab !== 'hod' && (
                <button
                  onClick={handleViewMore}
                  className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium text-sm md:text-base px-3 md:px-5 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span className="hidden sm:inline">
                    {buttonLabels[activeTab] || 'More'}
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>

            {activeTab === 'hod' ? (
              <div className="bg-gray-50 p-4 sm:p-8 rounded-xl border border-gray-200">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-40 sm:w-48 relative" style={{ height: '320px' }}>
                      <div className="absolute inset-0 rounded-lg overflow-hidden ">
                        <img
                          src="/images/HOD.jpg"
                          alt="HOD"
                          className="w-full h-full object-contain"
                          style={{ objectPosition: 'top center' }}
                        />
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg sm:text-xl text-center text-gray-900 mt-4">
                      {activeTabData.content.items[0].title}
                    </h4>
                    <p className="text-yellow-600 text-sm font-medium mb-4">Head of Department</p>
                    <div className="text-center space-y-1 text-sm text-gray-700">
                      <p><span className="font-semibold text-yellow-600">Email:</span> {activeTabData.content.items[0].email}</p>
                      <p><span className="font-semibold text-yellow-600">Phone:</span> {activeTabData.content.items[0].phone}</p>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-6">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                      {activeTabData.content.items[0].description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['qualification', 'experience', 'specialization', 'achievements'].map((key, i) => {
                        const Icon = [GraduationCap, Briefcase, Award, BookOpen][i];
                        const titles = ['Qualifications', 'Experience', 'Specialization', 'Key Achievements'];
                        return (
                          <div key={key} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-all">
                            <h5 className="text-base font-bold text-gray-700 mb-2 flex items-center">
                              <Icon className="h-5 w-5 mr-2 text-yellow-600" />
                              {titles[i]}
                            </h5>
                            <p className="text-sm text-gray-700">{activeTabData.content.items[0][key]}</p>
                          </div>
                        );
                      })}
                    </div>
                    <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-semibold text-sm flex items-center space-x-1 transition-colors duration-200">
                      <span>View Full Profile</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="overflow-visible pb-8">
                <Slider {...sliderSettings}>
                  {activeTabData.content.items.map((item: any, index: number) => (
                    <div key={index} className="px-2 sm:px-3 lg:px-4 h-full flex mb-6">
                     <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[0.93] hover:z-10 hover:shadow-xl hover:border-yellow-400 h-full flex flex-col justify-between relative min-h-[420px]">
                        <div>
                          <h4 className="font-semibold text-lg sm:text-2xl text-yellow-600 mb-4 break-words">
                            {item.title}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 break-words">
                            {item.description}
                          </p>
                          {item.logo && (
                            <div className="flex justify-center mb-6">
                              <img
                                src={item.logo}
                                alt={item.title || 'Card logo'}
                                className="h-16 sm:h-24 object-contain"
                              />
                            </div>
                          )}
                          <div className="space-y-3 text-sm sm:text-base text-gray-700">
                            {Object.entries(item).map(([key, value]) => {
                              if (["title", "description", "logo", "image"].includes(key)) return null;
                              return (
                                <div key={key} className="flex justify-between gap-4">
                                  <span className="capitalize font-medium text-yellow-600">{key}:</span>
                                  <span className="text-right text-gray-800 flex-1 break-words whitespace-normal">
                                  {Array.isArray(value) ? value.join(', ') : String(value)}
                                  </span>

                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <button className="mt-6 text-yellow-600 hover:text-yellow-700 font-semibold text-sm flex items-center space-x-2 transition-colors duration-200">
                          <span>Learn More</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;
