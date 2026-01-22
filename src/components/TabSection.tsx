import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Users,
  Award,
  Building,
  Briefcase,
  Globe,
  ChevronRight,
  User,
  GraduationCap,
  ClipboardList,
  FileText,
  CalendarDays,
  ArrowRight,
  Calendar,
  DollarSign,
  Building2,
  Clock,
  Lightbulb,
  Target,
  CheckCircle,
  Link as LinkIcon,
} from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import infosys from "../../public/infosys.png";

const iconMap = {
  BookOpen,
  Users,
  Award,
  Building,
  Briefcase,
  Globe,
  User,
  GraduationCap,
  ClipboardList,
  FileText,
  Calendar: CalendarDays,
};

const logoMap = {
  IEEE,
  ict,
  csi,
  ibm,
  google,
  oracle,
  zoho,
  redhat,
  dell,
  vmware,
  csscorp,
  salesforce,
  nasscom,
  uipath,
  infosys,
};

const eventImageMap = {
  "file-J9BVu9zM8oDHyhLN6xHPWx": "hackathon.jpg",
  "file-LSj37azmiY5Pc65232ZVmW": "workshop.jpg",
  "file-PvpLe9Jq7twhCq7NFN9nS5": "seminar.jpg",
};

// Enhanced Card Component with dynamic field rendering
function TabCard({ item }: { item: any }) {
  const fieldIconMap: Record<string, any> = {
    funding: DollarSign,
    fundingAgency: Building2,
    funding_agency: Building2,
    status: Clock,
    duration: Calendar,
    years: BookOpen,
    date: Calendar,
    venue: Building,
    organizer: Users,
    participants: Users,
    company: Building2,
    position: Briefcase,
    salary: DollarSign,
    location: Building,
    department: Building,
    experience: Briefcase,
    qualification: GraduationCap,
    specialization: Award,
    achievements: Award,
    WP_Attributes: ClipboardList,
    Proposed_EA: Lightbulb,
    PO_Mapped: Target,
    SDG_Goals: Globe,
    PSO: CheckCircle,
    Justification: FileText,
    Course: GraduationCap,
    Source: LinkIcon,
  };

  const excludeFields = [
    "title",
    "description",
    "logo",
    "image",
    "authors",
    "author",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-yellow-200 group">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-yellow-500 leading-tight mb-3 group-hover:text-yellow-600 transition-colors">
          {item.title}
        </h3>

        <div className="space-y-2 text-gray-600">
          {item.authors
            ? item.authors.map((author: string, idx: number) => (
                <p key={idx} className="text-sm font-medium">
                  {author}
                </p>
              ))
            : item.author && (
                <p className="text-sm font-medium">
                  {item.author} {item.department && item.department}
                </p>
              )}
        </div>
      </div>

      {item.description && (
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {item.description}
        </p>
      )}

      {item.logo && (
        <div className="flex justify-center mb-4">
          <img
            src={item.logo}
            alt={item.title || "Card logo"}
            className="h-16 sm:h-20 object-contain"
          />
        </div>
      )}

      <div className="space-y-3">
        {Object.entries(item).map(([key, value]) => {
          if (excludeFields.includes(key) || !value) return null;

          const Icon = fieldIconMap[key] || FileText;
          const displayKey = key
            .replace(/_/g, " ")
            .replace(/([A-Z])/g, " $1")
            .trim();
          const capitalizedKey =
            displayKey.charAt(0).toUpperCase() + displayKey.slice(1);

          return (
            <div key={key} className="flex items-start gap-2">
              <Icon className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-sm font-semibold text-yellow-600">
                  {capitalizedKey}:
                </span>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed break-words">
                  {Array.isArray(value) ? value.join(", ") : String(value)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-all duration-200 group-hover:shadow-md">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

// Compact Project Card for Notable Projects - REDESIGNED
function NotableProjectCard({
  item,
  onClick,
}: {
  item: any;
  onClick: () => void;
}) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transition-all duration-300 p-7 border border-gray-200 cursor-pointer h-full flex flex-col overflow-hidden relative">
      {/* Accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400"></div>

      {/* Title Section */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 line-clamp-2 pr-2">
          {item.title}
        </h3>
        <div className="w-12 h-1 bg-yellow-400 rounded-full transition-all duration-300"></div>
      </div>

      {/* Students Info */}
      <div className="mb-5 pb-4 border-b border-gray-200">
        <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wider mb-1">
          Team Members
        </p>
        <p className="text-sm text-gray-700 font-medium line-clamp-2">
          {item.students}
        </p>
      </div>

      {/* Summary */}
      <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow line-clamp-2">
        {item.summary}
      </p>

      {/* CTA Button */}
      <button
        onClick={onClick}
        className="mt-auto w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-xl shadow-md transition-all duration-300 text-sm font-medium"
      >
        <span>Explore Project</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// Modal for Project Details - Clean Advertisement Style
function ProjectModal({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative transform transition-all scale-100 animate-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Only - No Background, No Text */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="max-w-md h-auto object-cover rounded-xl shadow-2xl transform translate-y-10 scale-98"
            onError={(e) => {
              console.error("Image failed to load:", project.image);
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

interface TabsSectionProps {
  departmentName?: string;
}

const TabsSection: React.FC<TabsSectionProps> = ({ departmentName: _ }) => {
  const [tabs, setTabs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("hod");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    import("../data/tabsData.json").then((data) => {
      const enrichedTabs = data.tabs.map((tab: any) => ({
        ...tab,
        icon: iconMap[tab.icon as keyof typeof iconMap] || CalendarDays,
        content: {
          ...tab.content,
          items: tab.content.items.map((item: any) => ({
            ...item,
            logo: item.logo
              ? logoMap[item.logo as keyof typeof logoMap]
              : undefined,
            image: item.image
              ? eventImageMap[item.image as keyof typeof eventImageMap] ||
                item.image
              : undefined,
          })),
        },
      }));
      setTabs(enrichedTabs);
    });
  }, []);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const handleViewMore = () => {
    const routeMap: Record<string, string> = {
      internships: "internships",
      micro: "micro_projects",
      prototypes: "prototypes",
      research: "research",
      notable: "notable",
      faculty_ach: "faculty_achievements",
      "latest-events": "latest-event",
      innovations: "innovations",
      placements_tab: "placements_tab",
    };

    const route = routeMap[activeTab] || activeTab;

    if (activeTab === "latest-events") {
      navigate(`/${route}`);
    } else {
      navigate(`/datatable/${route}`);
    }
  };

  const buttonLabels: Record<string, string> = {
    "latest-events": "More Events",
    research: "More Proposals",
    student_achievements: "More Achievements",
    faculty_achievements: "More Achievements",
    internships: "More Internships",
    innovations: "More Innovations",
    placements: "More Placements",
    sdgs: "More SDGs",
    academic_calendar: "More Calendar",
    obe: "More OBE",
    curriculum_syllabus: "More Curriculum",
    facilities: "More Facilities",
    global_connections: "More Connections",
    professional: "More Society",
    collaborations: "More Industries",
    notable: "More Projects",
    alumni: "More Alumni",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="border-b border-gray-200">
        {/* ✅ Mobile scrollable tabs */}
        <div className="flex sm:flex-wrap overflow-x-auto sm:overflow-visible no-scrollbar">
          {tabs.map((tab: any) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center flex-shrink-0 min-w-[150px] sm:min-w-[200px] space-x-2 px-3 sm:px-6 py-2 sm:py-4 font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab.id
                  ? "text-yellow-600 border-yellow-500 bg-yellow-50"
                  : "text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
              }`}
            >
              {tab.icon && <tab.icon className="h-5 w-5" />}
              <span className="hidden sm:block">{tab.name}</span>
              <span className="sm:hidden text-sm">{tab.name}</span>
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
              {activeTab !== "hod" && (
                <button
                  onClick={handleViewMore}
                  className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium text-sm md:text-base px-3 md:px-5 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span className="hidden sm:inline">
                    {buttonLabels[activeTab] || "More"}
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>

            {activeTab === "hod" ? (
              <div className="bg-gray-50 p-4 sm:p-8 rounded-xl border border-gray-200">
                {/* HOD block unchanged */}
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div
                      className="w-40 sm:w-48 relative"
                      style={{ height: "320px" }}
                    >
                      <div className="absolute inset-0 rounded-lg overflow-hidden ">
                        <img
                          src="/images/HOD.jpg"
                          alt="HOD"
                          className="w-full h-full object-contain"
                          style={{ objectPosition: "top center" }}
                        />
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg sm:text-xl text-center text-gray-900 mt-4">
                      {activeTabData.content.items[0].title}
                    </h4>
                    <p className="text-yellow-600 text-sm font-medium mb-4">
                      Head of Department
                    </p>
                    <div className="text-center space-y-1 text-sm text-gray-700">
                      <p>
                        <span className="font-semibold text-yellow-600">
                          Email:
                        </span>{" "}
                        {activeTabData.content.items[0].email}
                      </p>
                      <p>
                        <span className="font-semibold text-yellow-600">
                          Phone:
                        </span>{" "}
                        {activeTabData.content.items[0].phone}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-6">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                      {activeTabData.content.items[0].description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "qualification",
                        "experience",
                        "specialization",
                        "achievements",
                      ].map((key, i) => {
                        const Icon = [
                          GraduationCap,
                          Briefcase,
                          Award,
                          BookOpen,
                        ][i];
                        const titles = [
                          "Qualifications",
                          "Experience",
                          "Specialization",
                          "Key Achievements",
                        ];
                        return (
                          <div
                            key={key}
                            className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-all"
                          >
                            <h5 className="text-base font-bold text-gray-700 mb-2 flex items-center">
                              <Icon className="h-5 w-5 mr-2 text-yellow-600" />
                              {titles[i]}
                            </h5>
                            <p className="text-sm text-gray-700">
                              {activeTabData.content.items[0][key]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <button className="mt-4 text-yellow-500 hover:text-yellow-600 font-semibold text-sm flex items-center space-x-1 transition-colors duration-200">
                      <span>View Full Profile</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {activeTab === "notable" ? (
                  // Notable Projects - Compact Cards with improved spacing
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 py-4">
                    {activeTabData.content.items.map(
                      (item: any, index: number) => (
                        <NotableProjectCard
                          key={index}
                          item={item}
                          onClick={() => setSelectedProject(item)}
                        />
                      ),
                    )}
                  </div>
                ) : activeTabData.content.items.length <= 4 ? (
                  // Normal 2x2 grid
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                    {activeTabData.content.items.map(
                      (item: any, index: number): JSX.Element => (
                        <TabCard key={index} item={item} />
                      ),
                    )}
                  </div>
                ) : (
                  // Carousel for more than 4
                  <Slider
                    dots={true}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={3000}
                    slidesToShow={2}
                    slidesToScroll={2}
                    responsive={[
                      {
                        breakpoint: 1024,
                        settings: { slidesToShow: 2, slidesToScroll: 2 },
                      },
                      {
                        breakpoint: 768,
                        settings: { slidesToShow: 1, slidesToScroll: 1 },
                      },
                    ]}
                  >
                    {activeTabData.content.items.map(
                      (item: any, index: number) => (
                        <div key={index} className="px-4 mb-6">
                          <TabCard item={item} />
                        </div>
                      ),
                    )}
                  </Slider>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default TabsSection;
