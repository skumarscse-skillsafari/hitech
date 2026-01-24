import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Radio, Settings, Building, ArrowRight, Users, BookOpen, Award, Lightbulb, Mail, Target, BarChart2, CheckCircle } from 'lucide-react';
import LazyLoadWrapper from './LazyLoadWrapper';
import DepartmentOutcomes from '../components/DepartmentOutcomes';
import SectionWrapper from './layout/SectionWrapper';
import ObeInput from '../pages/ObeInputs';
import recruiters from '../data/recruiters.json';
import ResearchInnovationCarousel from './ResearchInnovationCarousel';

interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  image: string;
  vision: string;
  mission: string;
  programs: Array<{
    name: string;
    duration: string;
    intake: string;
    eligibility: string;
  }>;
  specializations: string[];
  facilities: string[];
  faculty: Array<{
    id: number;
    name: string;
    designation: string;
    specialization: string;
    experience: string;
    education: string;
    image: string;
    email: string;
    publications: number;
    researchAreas: string[];
  }>;
  obePhilosophy?: {
    description: string;
    principles: Array<{
      title: string;
      description: string;
      icon: React.ComponentType<{ className?: string }>;
    }>;
    processSteps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  psos: Array<{
    code: string;
    description: string;
  }>;
  peos: Array<{
    code: string;
    description: string;
  }>;
  pos: Array<{
    code: string;
    description: string;
  }>;
}

interface DepartmentDetailProps {
  department: Department;
}

const iconMap = {
  Monitor,
  Radio,
  Settings,
  Building,
};

// Default OBE data matching original theme
const defaultOBEData = {
  description: "Our department follows the Outcome-Based Education (OBE) framework that focuses on measuring student performance outcomes (what a student knows and can do) rather than inputs or process.",
  principles: [
    {
      title: "Outcome Focused",
      description: "Curriculum designed backwards from desired outcomes",
      icon: Target
    },
    {
      title: "Student Centered",
      description: "Learning experiences tailored to student needs",
      icon: Users
    },
    {
      title: "Continuous Improvement",
      description: "Regular assessment and curriculum enhancement",
      icon: BarChart2
    },
    {
      title: "Industry Alignment",
      description: "Outcomes matched with workforce requirements",
      icon: CheckCircle
    }
  ],
  processSteps: [
    {
      step: "1",
      title: "Define Outcomes",
      description: "Establish clear program and course outcomes"
    },
    {
      step: "2",
      title: "Design Curriculum",
      description: "Create learning experiences to achieve outcomes"
    },
    {
      step: "3",
      title: "Deliver Instruction",
      description: "Implement effective teaching strategies"
    },
    {
      step: "4",
      title: "Assess Learning",
      description: "Measure outcome achievement systematically"
    },
    {
      step: "5",
      title: "Evaluate & Improve",
      description: "Use data to enhance teaching and learning"
    }
  ]
};

const defaultOutcomes = {
  psos: [
    { code: "PSO1", description: "Apply knowledge of computing fundamentals to solve complex engineering problems." },
    { code: "PSO2", description: "Design and develop software systems using modern tools and technologies." }
  ],
  peos: [
    { code: "PEO1", description: "Graduates will have successful careers in computing industries or pursue higher education." },
    { code: "PEO2", description: "Graduates will demonstrate professional ethics and lifelong learning." }
  ],
  pos: [
    { code: "PO1", description: "Engineering knowledge: Apply mathematics, science and engineering fundamentals." },
    { code: "PO2", description: "Problem analysis: Identify and analyze complex engineering problems." }
  ]
};

// Sample data for Centre of Excellence cards
const excellenceCards = [
  {
    id: 1,
    title: "AI & Machine Learning Lab",
    description: "State-of-the-art facility for artificial intelligence research and development",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Advanced Robotics Center",
    description: "Innovative robotics research with industrial applications",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Data Science Hub",
    description: "Cutting-edge data analytics and visualization center",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "IoT Innovation Lab",
    description: "Developing smart solutions for connected devices",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "Cybersecurity Center",
    description: "Protecting digital assets with advanced security measures",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "Renewable Energy Research",
    description: "Pioneering sustainable energy solutions for the future",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  }
];

interface Recruiter {
  name: string;
  logo?: string;
}

const famousRecruitersOrder: string[] = [
  'Amazon',
  'Juspay',
  'Cognizant',
  'Zoho Corporation',
  'Wipro',
  'Rinex Technologies',
  'Google',
  'Microsoft',
  'TCS',
  'Turing',
  'Vivnovation',
  'CTS GENC NEXT',
  'Infosys',
  'Accenture',
  'LTIMindtree',
  'Hexaware Technologies',
  'HCL Tech',
  'L&T',
  'Goldman Sachs',
  'Thoughtworks',
  'Qualcomm',
  'Capgemini',
  'MRF Limited',
  'Flipkart',
  'Axis Bank',
  'Bajaj Finance Limited',
  'SBI Card',
  'UST Global',
];

const sortedRecruiters: Recruiter[] = [...(recruiters as Recruiter[])].sort((a, b) => {
  const indexA = famousRecruitersOrder.indexOf(a.name);
  const indexB = famousRecruitersOrder.indexOf(b.name);

  const isAFamous = indexA !== -1;
  const isBFamous = indexB !== -1;

  if (isAFamous && isBFamous) {
    return indexA - indexB;
  }

  if (isAFamous) return -1;
  if (isBFamous) return 1;

  return a.name.localeCompare(b.name);
});

const companyDomainOverrides: Record<string, string> = {
  'Amazon': 'amazon.com',
  'Wipro': 'wipro.com',
  'Cognizant': 'cognizant.com',
  'Zoho Corporation': 'zoho.com',
  'Hexaware Technologies': 'hexaware.com',
  'HCL Tech': 'hcltech.com',
  'L&T': 'larsentoubro.com',
  'Goldman Sachs': 'goldmansachs.com',
  'Thoughtworks': 'thoughtworks.com',
  'Qualcomm': 'qualcomm.com',
  'Capgemini': 'capgemini.com',
  'Flipkart': 'flipkart.com',
  'Axis Bank': 'axisbank.com',
  'Bajaj Finance Limited': 'bajajfinserv.in',
  'SBI Card': 'sbicard.com',
  'UST Global': 'ust.com',
};

function buildDomainFromName(name: string): string | undefined {
  const override = companyDomainOverrides[name];
  if (override) return override;

  const cleaned = name
    .toLowerCase()
    .replace(/\([^)]*\)/g, '') // remove text in parentheses
    .replace(/[^a-z0-9]/g, '') // keep alphanumeric only
    .trim();

  if (!cleaned) return undefined;
  return `${cleaned}.com`;
}

function getCompanyEnrichLogoUrl(companyName: string): string | undefined {
  if (companyName === 'Amazon') {
    return '/logos/amazon.png';
  }
  if (companyName === 'QSpiders') {
    return '/logos/qspiders.png';
  }
  const token = 'pk_K8u3uM3kQMik6ox3R29MqA';
  const encodedName = encodeURIComponent(companyName);
  return `https://img.logo.dev/name/${encodedName}?token=${token}`;
}

const DepartmentDetail: React.FC<DepartmentDetailProps> = ({ department }) => {
  const navigate = useNavigate();
  const departmentWithDefaults = {
    ...department,
    obePhilosophy: department.obePhilosophy || defaultOBEData,
    psos: department.psos || defaultOutcomes.psos,
    peos: department.peos || defaultOutcomes.peos,
    pos: department.pos || defaultOutcomes.pos
  };

  const IconComponent = iconMap[department.icon as keyof typeof iconMap] || Monitor;
  
  // Placement section tabs: Home, CSE Specialized, Placement Team, Recruiters, Training, Industrial Partners
  const [activePlacementTab, setActivePlacementTab] = useState<'home' | 'cse-specialized' | 'team' | 'recruiters' | 'training' | 'partners'>('home');
  const [isPlacementExpanded, setIsPlacementExpanded] = useState(false);
  const [activePartnerTab, setActivePartnerTab] = useState<'igenuine' | 'sixprases' | 'terv'>('igenuine');
  
  // Carousel state and ref
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  
  // Handle automatic scrolling
  useEffect(() => {
    if (!autoScroll) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (excellenceCards.length - 2));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoScroll]);
  
  // Handle manual navigation
  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000); // Resume auto-scroll after 10 seconds
  };
  
  // Calculate visible cards
  const visibleCards = excellenceCards.slice(currentIndex, currentIndex + 3);
  // Handle wrap-around for the last cards
  const remainingCards = 3 - visibleCards.length;
  if (remainingCards > 0) {
    visibleCards.push(...excellenceCards.slice(0, remainingCards));
  }

  return (
    <div className="space-y-8">
      {/* Department Header - Unchanged */}
     <div id="about-department" className="scroll-mt-32">
  <LazyLoadWrapper height="300px" delay={500}>
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="relative h-[450px] lg:h-[500px]">
      {/* Background Image with Overlay */}
      <img 
        src={department.image} 
        alt={department.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

      {/* Top-left Icon & Badge */}
      <div className="absolute top-3 left-6 flex items-center gap-4">
        {/* Icon */}
        <div className="bg-white/95 p-4 rounded-xl shadow-lg backdrop-blur-sm">
          <IconComponent className="h-8 w-8 text-yellow-600 sm:h-10 sm:w-10" />
        </div>
        
        {/* Badge */}
        <div className="bg-yellow-500 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-md backdrop-blur-sm">
          {department.shortName}
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14 text-white">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight shadow-sm">{department.name}</h1>
          <p className="text-base sm:text-lg lg:text-sl text-gray-200 leading-relaxed max-w-3xl drop-shadow-md">
            {department.description}
          </p>
        </div>
      </div>
    </div>
  </div>
</LazyLoadWrapper>
</div>

{/* Programs Offered - Immediately after About Department */}
<div className="mt-16 mb-4">
  <LazyLoadWrapper height="300px" delay={500}>
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h4 className="text-2xl font-bold text-gray-900 mb-6">Programs Offered</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {department.programs.map((program, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300 group">
            <h5 className="font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">{program.name}</h5>
            <div className="space-y-2 text-sm text-gray-600">
              <div><span className="font-medium">Duration:</span> {program.duration}</div>
              <div><span className="font-medium">Intake:</span> {program.intake}</div>
              <div><span className="font-medium">Eligibility:</span> {program.eligibility}</div>
            </div>
            <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>Learn More</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </LazyLoadWrapper>
</div>

      {/* Vision & Mission */}
      <div id="department-vision-mission" className="scroll-mt-32">
        <LazyLoadWrapper height="200px" delay={500}>
          <div className="grid md:grid-cols-2 gap-6 mt-16 lg:mt-20">
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
      <Award className="h-5 w-5 text-yellow-500" />
      <span>Vision</span>
    </h4>
    <p className="text-gray-700 leading-relaxed">{department.vision}</p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
      <BookOpen className="h-5 w-5 text-yellow-500" />
      <span>Mission</span>
    </h4>

    <div className="text-gray-700 leading-relaxed space-y-3">
      {department.mission.map((point: string, index: number) => {
        const [label, ...rest] = point.split(":");
        return (
          <p key={index} className="text-sm">
            <span className="font-semibold">{label}:</span> {rest.join(":").trim()}
          </p>
        );
      })}
    </div>
  </div>
</div>
        </LazyLoadWrapper>
      </div>
     
  {/* Program Outcomes */}
<SectionWrapper id="psos-peos-pos" lazyHeight="600px" lazyDelay={600} className="mt-16 mb-8 scroll-mt-32">
  <DepartmentOutcomes 
    psos={department.psos}
    peos={department.peos}
    pos={department.pos}
    departmentName={department.name}
  />
</SectionWrapper>

      {/* Combined OBE Section - OBE Philosophy + OBE Inputs */}
      <div id="obe" className="scroll-mt-32 mt-16">
        <LazyLoadWrapper height="800px" delay={500}>
          <div className="bg-white p-12 rounded-2xl shadow-lg text-center mb-12">
            <h4 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">OBE Philosophy</h4>
             <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {departmentWithDefaults.obePhilosophy.description}
            </p>
            
            {/* OBE Principles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {departmentWithDefaults.obePhilosophy.principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center mb-4 text-yellow-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2">{principle.title}</h5>
                    <p className="text-gray-600 text-sm">{principle.description}</p>
                  </div>
                );
              })}
            </div>

            {/* OBE Process */}
            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2"></div>
              <div className="grid lg:grid-cols-5 gap-6">
                {departmentWithDefaults.obePhilosophy.processSteps.map((step, index) => (
                  <div key={index} className="relative z-10">
                    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
                      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <h5 className="font-bold text-gray-900 mt-2 mb-2">{step.title}</h5>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </LazyLoadWrapper>
        
        {/* OBE Inputs - Combined within the same section */}
        <LazyLoadWrapper height="600px" delay={500}> 
          <ObeInput />
        </LazyLoadWrapper>
      </div>
      {/* New Centre of Excellence Section */}
      <div id="centres-of-excellence" className="scroll-mt-32">
        <LazyLoadWrapper height="400px" delay={500}>
          <div className="bg-white p-12 rounded-2xl shadow-lg text-center mb-12">
          <h4 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Centres of Excellence</h4>
          <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-6"></div>
          <div className="relative">
            {/* Carousel */}
            <div 
              ref={carouselRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out"
            >
              {visibleCards.map((card) => (
                <div key={card.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h5>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <a 
                      href={card.link}
                      className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center space-x-1 group"
                    >
                      <span>Explore Center</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {excellenceCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-yellow-500' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* View More Button */}
            <div className="text-center mt-8">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto shadow-md">
                <span>View All Centres</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </LazyLoadWrapper>
      </div>

      {/* Research & Innovation Section with Auto-Transitioning Carousel */}
      <div id="research-innovation" className="scroll-mt-32">
        <LazyLoadWrapper height="600px" delay={500}>
          <ResearchInnovationCarousel navigate={navigate} />
        </LazyLoadWrapper>
      </div>

      {/* Placements Section */}
      <div id="placements" className="scroll-mt-32">
        <LazyLoadWrapper height="300px" delay={500}>
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <h4 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Placements</h4>
            <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 text-center mb-8">
              Our students achieve excellent placement records with leading companies across industries.
            </p>

            {/* Placement section tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'cse-specialized', label: 'CSE Specialized Training' },
                { id: 'partners', label: 'Industrial Partners' },
                { id: 'team', label: 'Placement Team' },
                { id: 'recruiters', label: 'Recruiters' },
                { id: 'training', label: 'Training' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePlacementTab(tab.id as 'home' | 'cse-specialized' | 'partners' | 'team' | 'recruiters' | 'training')}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold border transition-all ${
                    tab.id === 'cse-specialized'
                      ? activePlacementTab === tab.id
                        ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                        : 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200'
                      : activePlacementTab === tab.id
                        ? 'bg-yellow-500 text-gray-900 border-yellow-500 shadow-md'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activePlacementTab === 'home' && (
              <div className="mt-4">
                <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">About Placement</h5>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      The <strong>Placement Advisory Team</strong>, popularly known as <strong>Corporate Relations</strong> on HITECH campus, aims at providing the best opportunities enabling every student to realize his/her dream.
                    </p>
                    
                    <p className="mb-4">
                      This team is committed to the task of securing Final Placements and Summer Internships for every student on campus. It has not only consistently set high standards for itself but has been successful in surpassing them time and again.
                    </p>
                    
                    <p className="mb-4">
                      Over the last decade, Hindusthan has emerged as one of the most favored destinations for hiring fresh talent from campuses. Its endeavors to provide industry-compliant talent and emphasis on Quality, Discipline, Self-Learning, Ethics, and Values have borne rich dividends.
                    </p>
                    
                    {isPlacementExpanded && (
                      <>
                        <p className="mb-4">
                          Hindusthan has recently received an international recognition from MAC Singapore, the <strong>'Le Platina Royce Award'</strong>, for world-class brand status. The HR Club, Mumbai awarded our Institution as the <strong>"Best Institution in Tamil Nadu"</strong> for the Campus to Corporate Employability Programme.
                        </p>
                        
                        <p className="mb-4">
                          At Hindusthan, pedagogy is oriented to make students industry-ready. Students are given more exposure to practical learning which helps them meet industry expectations. All efforts are made to inculcate values and make them socially responsible citizens.
                        </p>
                      </>
                    )}
                  </div>
                  
                  <div className="text-center mt-6">
                    <button 
                      onClick={() => setIsPlacementExpanded(!isPlacementExpanded)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-all duration-200 hover:scale-105 shadow-md"
                    >
                      <span>{isPlacementExpanded ? 'Show Less' : 'Show More'}</span>
                      <ArrowRight className={`h-4 w-4 transition-transform duration-200 ${isPlacementExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activePlacementTab === 'cse-specialized' && (
              <div className="mt-4">
                <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">CSE Specialized Industrial Training</h5>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border-2 border-purple-200 mb-8">
                  <div className="text-center max-w-3xl mx-auto">
                    <h6 className="text-xl font-bold text-gray-900 mb-3">Exclusive Training for CSE Students</h6>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Specialized training programs designed exclusively for Computer Science Engineering students, 
                      delivered by external technical experts from leading industry organizations.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <i className="fas fa-graduation-cap text-purple-600"></i>
                        <span className="font-semibold">Expert Instructors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-certificate text-purple-600"></i>
                        <span className="font-semibold">Industry Certifications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fas fa-users text-purple-600"></i>
                        <span className="font-semibold">Semester-wise Learning</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3rd Semester Programs */}
                <h6 className="text-2xl font-bold text-gray-900 mb-6 text-center">3rd Semester Programs</h6>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {/* Quantumnique - 3rd Sem */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-purple-500">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <img 
                          src="https://img.logo.dev/quantumniquesolutions.com?token=pk_K8u3uM3kQMik6ox3R29MqA" 
                          alt="Quantumnique" 
                          className="h-12 w-12 object-contain" 
                        />
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">3rd Sem</span>
                      </div>
                      
                      <h6 className="text-xl font-bold text-gray-900 mb-2">Quantumnique</h6>
                      <div className="border-b-2 border-purple-500 w-16 mb-4"></div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Training Program</p>
                        <p className="text-gray-700 text-sm">Java Programming & Advanced Data Structures</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Course Modules</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Core Java Programming Fundamentals</li>
                          <li>• Object-Oriented Programming Concepts</li>
                          <li>• Advanced Data Structures (Trees, Graphs, Heaps)</li>
                          <li>• Algorithm Design & Analysis</li>
                          <li>• Problem Solving & Coding Practice</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Duration & Mode</p>
                        <p className="text-gray-700 text-sm">3 Months | Offline Classroom</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Target Students</p>
                        <p className="text-gray-700 text-sm">3rd Semester CSE Students Only</p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                          <strong>Certification:</strong> Quantumnique Certified Java & Data Structures Specialist
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* IgenuineLearning - 3rd Sem */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-500">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <img 
                          src="https://img.logo.dev/igenuinelearning.com?token=pk_K8u3uM3kQMik6ox3R29MqA" 
                          alt="IgenuineLearning" 
                          className="h-12 w-12 object-contain" 
                        />
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">3rd Sem</span>
                      </div>
                      
                      <h6 className="text-xl font-bold text-gray-900 mb-2">IgenuineLearning</h6>
                      <div className="border-b-2 border-blue-500 w-16 mb-4"></div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Training Program</p>
                        <p className="text-gray-700 text-sm">Java Programming & Advanced Data Structures</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Course Modules</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Java Syntax, Data Types & Control Flow</li>
                          <li>• Classes, Objects & Inheritance</li>
                          <li>• Stacks, Queues, Linked Lists</li>
                          <li>• Binary Trees, AVL Trees, B-Trees</li>
                          <li>• Graph Algorithms & Dynamic Programming</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Duration & Mode</p>
                        <p className="text-gray-700 text-sm">3 Months | Offline Classroom</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Target Students</p>
                        <p className="text-gray-700 text-sm">3rd Semester CSE Students Only</p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                          <strong>Certification:</strong> IgenuineLearning Java & Advanced DS Certificate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4th Semester Program */}
                <h6 className="text-2xl font-bold text-gray-900 mb-6 text-center">4th Semester Program</h6>
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-indigo-500">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <img 
                          src="https://img.logo.dev/quantumniquesolutions.com?token=pk_K8u3uM3kQMik6ox3R29MqA" 
                          alt="Quantumnique" 
                          className="h-12 w-12 object-contain" 
                        />
                        <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">4th Sem</span>
                      </div>
                      
                      <h6 className="text-xl font-bold text-gray-900 mb-2">Quantumnique</h6>
                      <div className="border-b-2 border-indigo-500 w-16 mb-4"></div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">Training Program</p>
                        <p className="text-gray-700 text-sm">Database Management & Analysis of Algorithms</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">Course Modules</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Relational Database Design & Normalization</li>
                          <li>• SQL Queries & Database Operations</li>
                          <li>• Indexing, Transactions & Concurrency Control</li>
                          <li>• Algorithm Complexity Analysis (Big O, Theta, Omega)</li>
                          <li>• Divide & Conquer, Greedy, Dynamic Programming</li>
                          <li>• Graph Algorithms & NP-Completeness</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">Duration & Mode</p>
                        <p className="text-gray-700 text-sm">3 Months | Offline Classroom</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">Target Students</p>
                        <p className="text-gray-700 text-sm">4th Semester CSE Students Only</p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                          <strong>Certification:</strong> Quantumnique DBMS & Algorithm Analysis Expert
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePlacementTab === 'partners' && (
              <div className="mt-4">
                <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Industrial Training Partners</h5>
                
                {/* Partner Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* IgenuineLearning 2025 */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-yellow-500">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <img src="https://img.logo.dev/igenuinelearning.com?token=pk_K8u3uM3kQMik6ox3R29MqA" alt="IgenuineLearning" className="h-12 w-12 object-contain" />
                        <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">2025</span>
                      </div>
                      
                      <h6 className="text-xl font-bold text-gray-900 mb-2">IgenuineLearning</h6>
                      <div className="border-b-2 border-yellow-500 w-16 mb-4"></div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Training Program</p>
                        <p className="text-gray-700 text-sm">Full Stack Java Development</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Course Modules</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Java Fundamentals & OOP</li>
                          <li>• Frontend: HTML5, CSS3, React.js</li>
                          <li>• Backend: Spring Boot, Hibernate</li>
                          <li>• Database: MySQL, MongoDB</li>
                          <li>• DevOps: Docker, AWS, CI/CD</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Duration & Mode</p>
                        <p className="text-gray-700 text-sm">6 Months | Offline Classroom</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Target Students</p>
                        <p className="text-gray-700 text-sm">5th to 7th Semester Students</p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                          <strong>Certification:</strong> Industry-recognized Full Stack Java Developer
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Six Phrase 2024 */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-yellow-500">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <img src="https://img.logo.dev/sixphrase.com?token=pk_K8u3uM3kQMik6ox3R29MqA" alt="Six Phrase" className="h-12 w-12 object-contain" />
                        <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">2024</span>
                      </div>
                      
                      <h6 className="text-xl font-bold text-gray-900 mb-2">Six Phrase</h6>
                      <div className="border-b-2 border-yellow-500 w-16 mb-4"></div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Training Program</p>
                        <p className="text-gray-700 text-sm">Full Stack Java Development</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Course Phases</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Core & Advanced Java, DSA</li>
                          <li>• Web: TypeScript, Angular/React</li>
                          <li>• Spring Ecosystem & Microservices</li>
                          <li>• Database: SQL, NoSQL (MongoDB)</li>
                          <li>• Testing: JUnit, Docker, Kubernetes</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Duration & Mode</p>
                        <p className="text-gray-700 text-sm">5 Months | Offline Classroom</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Target Students</p>
                        <p className="text-gray-700 text-sm">5th to 7th Semester Students</p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                          <strong>Certification:</strong> Six Phrase Certified Full Stack Java Developer
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Terv 2023 */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-yellow-500">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <img src="https://img.logo.dev/terv.pro?token=pk_K8u3uM3kQMik6ox3R29MqA" alt="Terv" className="h-12 w-12 object-contain" />
                        <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">2023</span>
                      </div>
                      
                      <h6 className="text-xl font-bold text-gray-900 mb-2">Terv</h6>
                      <div className="border-b-2 border-yellow-500 w-16 mb-4"></div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Training Program</p>
                        <p className="text-gray-700 text-sm">Full Stack Java Development</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Course Units</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Java Foundation & OOP Principles</li>
                          <li>• Frontend: HTML, CSS, React.js</li>
                          <li>• Backend: Spring Framework, REST</li>
                          <li>• Database: MySQL, Hibernate, JPA</li>
                          <li>• Deployment: Docker, AWS Cloud</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Duration & Mode</p>
                        <p className="text-gray-700 text-sm">4 Months | Offline Classroom</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-yellow-600 uppercase mb-2">Target Students</p>
                        <p className="text-gray-700 text-sm">5th to 7th Semester Students</p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-600">
                          <strong>Certification:</strong> Terv Full Stack Java Development Certificate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Syllabus Section Removed - All info now in cards */}
              </div>
            )}

            {activePlacementTab === 'recruiters' && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-xl font-bold text-gray-900">Our Recruiters</h5>
                  <p className="text-sm text-gray-500">
                    Total Companies: <span className="font-semibold">{sortedRecruiters.length}</span>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {sortedRecruiters.slice(0, 5).map((company) => {
                    const logoUrl = getCompanyEnrichLogoUrl(company.name);
                    return (
                      <div
                        key={company.name}
                        className="flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-gray-200 p-4 hover:border-yellow-300 hover:shadow-md transition-all"
                      >
                        {logoUrl ? (
                          <img
                            src={logoUrl}
                            alt={company.name}
                            className="w-16 h-16 object-contain mb-3"
                          />
                        ) : (
                          <div className="w-16 h-16 mb-3 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-700 font-bold text-lg">
                            {company.name.charAt(0)}
                          </div>
                        )}
                        <p className="text-center text-sm font-medium text-gray-800">
                          {company.name}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={() => navigate('/recruiters')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-all duration-200 hover:scale-105 shadow-md"
                  >
                    <span>See all recruiters</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {activePlacementTab === 'team' && (
              <div className="mt-4">
                <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  TRAINING AND PLACEMENT CELL
                </h5>

                {/* Placement Coordinators Table */}
                <div className="mb-8">
                  <h6 className="text-xl font-bold text-gray-900 mb-4">Placement Coordinators from Placement Cell</h6>
                  <div className="overflow-x-auto">
                    <div className="inline-block min-w-full rounded-2xl border border-gray-200">
                      <table className="min-w-full border-collapse text-sm md:text-base">
                        <thead>
                          <tr className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white">
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold w-16 rounded-tl-2xl">#</th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold">NAME</th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold rounded-tr-2xl">DESIGNATION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="even:bg-gray-50 hover:bg-amber-50 transition duration-150">
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">1</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">Mr.M.Bhuvanesh</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">Placement Coordinator</td>
                          </tr>
                          <tr className="even:bg-gray-50 hover:bg-amber-50 transition duration-150">
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">2</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">Mr.K.Vignesh</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">Placement Coordinator</td>
                          </tr>
                          <tr className="even:bg-gray-50 hover:bg-amber-50 transition duration-150">
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">3</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">Mr.R.Vigensh</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">Placement Coordinator</td>
                          </tr>
                          <tr className="even:bg-gray-50 hover:bg-amber-50 transition duration-150">
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">4</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">Ms.Gopika</td>
                            <td className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs md:text-sm text-gray-600">Placement Coordinator</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePlacementTab === 'training' && (
              <div className="mt-4">
                <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Training & Skill Development</h5>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
                    Intensive training programs on aptitude, programming, communication, and interview skills
                    are conducted regularly to make students industry-ready. Our comprehensive training approach
                    ensures students are well-prepared for campus recruitment and corporate environments.
                  </p>
                  
                  <div className="text-center">
                    <button 
                      onClick={() => navigate('/training-details')}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-all duration-200 hover:scale-105 shadow-md"
                    >
                      <span>See More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </LazyLoadWrapper>
      </div>

      {/* Events Organised Section */}
      <div id="events-organised" className="scroll-mt-32">
        <LazyLoadWrapper height="300px" delay={500}>
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <h4 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Events Organised</h4>
            <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 text-center mb-8">
              Regular technical events, workshops, and seminars to enhance student learning.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 transition-colors">
                <h5 className="font-bold text-gray-900 mb-3">Technical Symposiums</h5>
                <p className="text-gray-600 text-sm">Annual technical events featuring competitions and exhibitions.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 transition-colors">
                <h5 className="font-bold text-gray-900 mb-3">Workshops & Seminars</h5>
                <p className="text-gray-600 text-sm">Industry expert sessions and hands-on training programs.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 transition-colors">
                <h5 className="font-bold text-gray-900 mb-3">Hackathons</h5>
                <p className="text-gray-600 text-sm">Coding challenges and innovation competitions.</p>
              </div>
            </div>
          </div>
        </LazyLoadWrapper>
      </div>
     
      {/* Specializations - Unchanged */}
      <LazyLoadWrapper height="150px" delay={500}>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Specialized in</h4>
          <div className="flex flex-wrap gap-3">
            {department.specializations.map((spec, index) => (
              <span key={index} className="bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium border border-yellow-200 hover:bg-yellow-100 transition-colors">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </LazyLoadWrapper>

      {/* Action Button - Unchanged */}
      <div className="text-center pt-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg">
          <span>Learn More About {department.shortName}</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default DepartmentDetail;