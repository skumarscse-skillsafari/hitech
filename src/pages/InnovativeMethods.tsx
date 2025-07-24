import React from 'react';
import col from "../../public/Collaborative Learning with Digital Collaboration Tools.jpg";
import com from "../../public/Competency-Based Learning with Online Assessments.jpg"
import Life from "../../public/Lifelong Learning with Micro-Credentials.jpg"
import online from "../../public/Online and Blended Learning with LMS Integration.jpg.png"
import Multi from "../../public/Multimedia and Visualization with Digital Content.jpg"
import Indust from "../../public/Industry-Aligned Courses and Professional Development.jpg"
interface Method {
  title: string;
  description: string;
  image: string;
}

const methods: Method[] = [
  {
    title: 'Collaborative Learning with Digital Collaboration Tools',
    description: 'Students build teamwork skills via collaborative tools, coding platforms, whiteboards, and expert-guided group activities.',
    image:col,
  },
  {
    title: 'Competency-Based Learning with Online Assessments',
    description: 'The department emphasizes skill mastery through practical projects, online assessments, coding challenges, and industry training.',
    image:com ,
  },
  {
    title: 'Lifelong Learning with Micro-Credentials',
    description: 'Students pursue certifications via MOOCs, industry courses, and visits, promoting continuous, lifelong, and specialized learning.',
    image: Life ,
  },
  {
    title: 'Online and Blended Learning with LMS Integration',
    description: 'Blended learning combines LMS, live sessions, self-paced modules, and industry input for flexible, enriched education.',
    image: online,
  },
  {
    title: 'Multimedia and Visualization with Digital Content',
    description: 'Visual aids and tools enhance concept clarity, with expert-led sessions demonstrating real-world data visualization applications.',
    image: Multi,
  },
  {
    title: 'Industry-Aligned Courses and Professional Development',
    description: 'Industry collaboration offers specialized training, real-world exposure, and expert insights, boosting students career readiness.',
    image: Indust,
  },
];

const InnovativeMethods: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Innovative Teaching Methodologies
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        These modern methods enhance engagement, creativity, and practical understanding among students.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {methods.map((method, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={method.image}
              alt={method.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{method.title}</h2>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnovativeMethods;
