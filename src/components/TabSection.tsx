import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import {
  BookOpen, Users, Award, Building, Briefcase, Globe, ChevronRight,
  User, GraduationCap, ClipboardList, FileText
} from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hodPhoto from "../../public/hod-photo.jpg";
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

// ICON MAPPING
const iconMap: any = {
  BookOpen, Users, Award, Building, Briefcase, Globe,
  User, GraduationCap, ClipboardList, FileText
};

// IMAGE MAPPING
const logoMap: any = {
  IEEE, ict, csi, ibm, google, oracle, zoho, redhat, dell,
  vmware, csscorp, salesforce, nasscom, uipath, celonis, infosys
};

const TabsSection: React.FC = () => {
  const [tabs, setTabs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>('hod');

  useEffect(() => {
    import('../data/tabsData.json').then((data) => {
      const enrichedTabs = data.tabs.map((tab: any) => ({
        ...tab,
        icon: iconMap[tab.icon],
        content: {
          ...tab.content,
          items: tab.content.items.map((item: any) => ({
            ...item,
            logo: item.logo ? logoMap[item.logo] : undefined
          }))
        }
      }));
      setTabs(enrichedTabs);
    });
  }, []);

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
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
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{activeTabData.content.title}</h3>
              {activeTab !== 'hod' && (
  <button className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium text-sm md:text-base px-3 md:px-5 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2 min-w-fit">
    <span className="hidden sm:inline">View more</span>
    <ChevronRight className="h-4 w-4" />
  </button>
)}

            </div>

            {activeTab === 'hod' ? (
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500 shadow-md mb-4">
                      <img src={hodPhoto} alt="HOD" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-semibold text-xl text-center text-gray-900 mb-1">
                      {activeTabData.content.items[0].title}
                    </h4>
                    <p className="text-yellow-600 text-sm font-medium mb-4">Head of Department</p>
                    <div className="text-center space-y-2 text-sm text-gray-700">
                      <p><span className="font-semibold">Email:</span> {activeTabData.content.items[0].email}</p>
                      <p><span className="font-semibold">Phone:</span> {activeTabData.content.items[0].phone}</p>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-6">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                      {activeTabData.content.items[0].description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h5 className="text-base md:text-lg font-bold text-gray-700 mb-2 flex items-center">
                          <GraduationCap className="h-5 w-5 mr-2 text-yellow-600" />
                          Qualifications
                        </h5>
                        <p className="text-sm md:text-base text-gray-700">{activeTabData.content.items[0].qualification}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h5 className="text-base md:text-lg font-bold text-gray-700 mb-2 flex items-center">
                          <Briefcase className="h-5 w-5 mr-2 text-yellow-600" />
                          Experience
                        </h5>
                        <p className="text-sm md:text-base text-gray-700">{activeTabData.content.items[0].experience}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h5 className="text-base md:text-lg font-bold text-gray-700 mb-2 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-yellow-600" />
                          Specialization
                        </h5>
                        <p className="text-sm md:text-base text-gray-700">{activeTabData.content.items[0].specialization}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border">
                        <h5 className="text-base md:text-lg font-bold text-gray-700 mb-2 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-yellow-600" />
                          Key Achievements
                        </h5>
                        <p className="text-sm md:text-base text-gray-700">{activeTabData.content.items[0].achievements}</p>
                      </div>
                    </div>
                    <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-semibold text-sm flex items-center space-x-1">
                      <span>View Full Profile</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Slider {...sliderSettings}>
  {activeTabData.content.items.map((item: any, index: number) => (
    <div key={index} className="px-2 md:px-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:border-yellow-400 h-full flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-lg md:text-2xl text-gray-800 mb-4">
            {item.title}
          </h4>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            {item.description}
          </p>

          {item.logo && (
            <div className="flex justify-center mb-6">
              <img
                src={item.logo}
                alt={item.title || 'Card logo'}
                className="h-20 md:h-24 object-contain"
              />
            </div>
          )}

          <div className="space-y-3 text-sm md:text-base text-gray-700">
            {Object.entries(item).map(([key, value]) => {
              if (["title", "description", "logo"].includes(key)) return null;
              return (
                <div key={key} className="flex justify-between">
                  <span className="capitalize font-medium">{key}:</span>
                  <span className="text-gray-800">{value}</span>
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


            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;
