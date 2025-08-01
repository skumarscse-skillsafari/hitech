import React from 'react';
import { FileText } from 'lucide-react';

const InnovationPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-12 px-4 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold italic text-gray-900">
          <span className="text-gray-800">INNOVATION</span>{' '}
          <span className="text-yellow-600">&</span>{' '}
          <span className="text-gray-800">START-UP POLICY</span>
        </h1>
        <div className="mt-2 flex justify-center">
          <div className="h-1 w-20 bg-yellow-500 rounded-full" />
        </div>
      </div>

      {/* PDF Section */}
      <div className="relative bg-gray-50 border-t-[6px] border-yellow-500 rounded-lg shadow-md p-6 max-w-4xl mx-auto">
        {/* Pushpin emoji */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-2xl">
          📌
        </div>

        <ul className="list-disc list-inside space-y-5 mt-6 text-[17px]">
          <li>
            <a
              href="/pdfs/Innovation-Policy-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F4F4F] font-semibold hover:text-yellow-700 transition"
            >
              HINDUSTHAN INSTITUTE OF TECHNOLOGY INNOVATION & START-UP POLICY AND GUIDELINES 2021 FOR FACULTY AND STUDENTS
            </a>
          </li>
          <li>
            <a
              href="/pdfs/National-Innovation-Policy-2019.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-bold hover:text-yellow-600 transition"
            >
              National INNOVATION and STARTUP Policy 2019 for Students and Faculty
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InnovationPolicy;
