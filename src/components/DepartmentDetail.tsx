import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Radio, Settings, Building, ArrowRight, Users, BookOpen, Award, Lightbulb, Mail, Target, BarChart2, CheckCircle } from 'lucide-react';
import LazyLoadWrapper from './LazyLoadWrapper';
import DepartmentOutcomes from '../components/DepartmentOutcomes';
import SectionWrapper from './layout/SectionWrapper';
import ObeInput from '../pages/ObeInputs';

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
  obePhilosophy: {
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

const DepartmentDetail: React.FC<DepartmentDetailProps> = ({ department }) => {
  const departmentWithDefaults = {
    ...department,
    obePhilosophy: department.obePhilosophy || defaultOBEData,
    psos: department.psos || defaultOutcomes.psos,
    peos: department.peos || defaultOutcomes.peos,
    pos: department.pos || defaultOutcomes.pos
  };

  const IconComponent = iconMap[department.icon as keyof typeof iconMap] || Monitor;
  
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
     <LazyLoadWrapper height="300px" delay={500}>
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="relative h-[400px] sm:h-[300px]">
      {/* Background Image with Overlay */}
      <img 
        src={department.image} 
        alt={department.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Top-left Icon */}
      <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg">
        <IconComponent className="h-6 w-6 text-gray-600 sm:h-8 sm:w-8" />
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-4 bottom-4 text-white space-y-2">
        <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold inline-block ">
          {department.shortName}
        </div>
        <h1 className="text-xl sm:text-2xl font-bold">{department.name}</h1>
        <p className="text-sm sm:text-base text-gray-200">
          {department.description}
        </p>
      </div>
    </div>
  </div>
</LazyLoadWrapper>


      {/* Vision & Mission - Unchanged */}
      <LazyLoadWrapper height="200px" delay={500}>
        <div className="grid md:grid-cols-2 gap-6">
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
            <p className="text-gray-700 leading-relaxed">{department.mission}</p>
          </div>
        </div>
     
  {/* Program Outcomes */}
<SectionWrapper lazyHeight="400px" lazyDelay={600} className="mt-16 mb-4">
  <DepartmentOutcomes 
    psos={department.psos}
    peos={department.peos}
    pos={department.pos}
    departmentName={department.name}
  />
</SectionWrapper>

{/* Programs Offered */}
<SectionWrapper className="mt-0 mb-12">
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
</SectionWrapper>


      {/* Enhanced OBE Philosophy Section */}
      <LazyLoadWrapper height="500px" delay={500}>
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
</LazyLoadWrapper>

 <LazyLoadWrapper height="400px" delay={500}> 
  <ObeInput />
 </LazyLoadWrapper>
      {/* New Centre of Excellence Section */}
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