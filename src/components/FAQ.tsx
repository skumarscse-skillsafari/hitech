import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What are the admission requirements for  BE / B.Tech programs?",
      answer: "Candidates must have completed 10+2 with Physics, Chemistry, and Mathematics with a minimum of 75% aggregate marks. Valid JEE Main or State CET scores are required. Age limit is 17-25 years at the time of admission.",
      category: "Admissions"
    },
    {
      id: 2,
      question: "What is the fee structure for engineering programs?",
      answer: "The fee structure varies by program. B.Tech programs range from ₹1.5-2.5 lakhs per year. M.Tech programs are ₹1-1.5 lakhs per year. Detailed fee structure including hostel and other charges is available in our prospectus.",
      category: "Fees"
    },
    {
      id: 3,
      question: "Are scholarships available for students?",
      answer: "Yes, we offer various scholarships including merit-based scholarships (up to 100% fee waiver), need-based scholarships, sports scholarships, and government scholarships. Students can apply during the admission process.",
      category: "Scholarships"
    },
    {
      id: 4,
      question: "What is the placement record of the institute?",
      answer: "We maintain an excellent placement record with 98% placement rate. Our highest package is ₹45 LPA and average package is ₹8.5 LPA. Top recruiters include Google, Microsoft, Amazon, TCS, Infosys, and 150+ other companies.",
      category: "Placements"
    },
    {
      id: 5,
      question: "What are the hostel facilities available?",
      answer: "We provide separate hostels for boys and girls with modern amenities including Wi-Fi, mess facilities, recreation rooms, study halls, and 24/7 security. Hostel fees are approximately ₹80,000-1,20,000 per year including food.",
      category: "Facilities"
    },
    {
      id: 6,
      question: "How can I apply for admission?",
      answer: "Applications can be submitted online through our official website. The process includes filling the application form, uploading required documents, paying the application fee, and appearing for entrance examination or submitting valid JEE/GATE scores.",
      category: "Admissions"
    },
    {
      id: 7,
      question: "What research opportunities are available?",
      answer: "Students can participate in various research projects under faculty guidance. We have dedicated research centers for AI, IoT, Renewable Energy, and more. Ph.D. programs are available in all departments with research fellowships.",
      category: "Research"
    },
    {
      id: 8,
      question: "Are there any industry collaborations?",
      answer: "Yes, we have partnerships with leading companies like Google, Microsoft, TCS, and many others. These collaborations provide internship opportunities, live projects, guest lectures, and placement opportunities for students.",
      category: "Industry"
    },
    {
      id: 9,
      question: "What is the student-faculty ratio?",
      answer: "We maintain an optimal student-faculty ratio of 15:1, ensuring personalized attention and quality education. Our faculty members are highly qualified with Ph.D. degrees from premier institutions.",
      category: "Academics"
    },
    {
      id: 10,
      question: "Are there any extracurricular activities?",
      answer: "Yes, we have numerous clubs and societies including technical clubs, cultural clubs, sports teams, and student chapters of professional bodies like IEEE, ACM, ASME, etc. Annual events include TechFest, cultural festivals, and sports competitions.",
      category: "Campus Life"
    },
    {
      id: 11,
      question: "What is the examination pattern?",
      answer: "We follow a semester system with continuous assessment including internal assessments, assignments, projects, and semester-end examinations. The evaluation is based on both theory and practical components.",
      category: "Academics"
    },
    {
      id: 12,
      question: "Is there any transportation facility?",
      answer: "Yes, we provide bus transportation from various parts of Coimbatore and nearby areas. The transportation fee is separate and varies based on the distance. Route details are available at the time of admission.",
      category: "Facilities"
    }
  ];

  const toggleItem = (id: number) => {
    setActiveItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Split FAQs into two columns
  const leftColumnFAQs = faqData.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqData.filter((_, index) => index % 2 === 1);

  const renderFAQColumn = (faqs: FAQItem[]) => (
    <div className="space-y-4">
      {faqs.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl border border-gray-200 hover:border-yellow-300 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
          >
            <div className="flex-1">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {item.question}
              </h3>
            </div>
            <div className="flex-shrink-0">
              {activeItems.includes(item.id) ? (
                <ChevronUp className="h-5 w-5 text-yellow-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </button>
          
          {activeItems.includes(item.id) && (
            <div className="px-6 pb-4">
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about admissions, academics, facilities, and campus life
          </p>
        </div>

        {/* FAQ Accordion - 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          {renderFAQColumn(leftColumnFAQs)}
          
          {/* Right Column */}
          {renderFAQColumn(rightColumnFAQs)}
        </div>

        {/* Contact for More Questions */}
        <div className="mt-16 bg-yellow-50 p-8 rounded-2xl border border-yellow-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            Our admissions team is here to help you with any additional questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                 onClick={() => {
                 const section = document.getElementById('contact');
                 if (section) {
                 section.scrollIntoView({ behavior: 'smooth' });
                 }
                  }}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                Contact Admissions
              </button>
          

            <button className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Schedule a Campus Visit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;