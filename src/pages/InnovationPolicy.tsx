import React from 'react';

const InnovationPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-12 px-4 md:px-12 lg:px-24 font-sans">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold italic text-black">
          <span className="text-black">INNOVATION</span>{' '}
          <span className="text-yellow-500">&</span>{' '}
          <span className="text-black">START-UP POLICY</span>
        </h1>

        {/* Underline */}
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-20 bg-yellow-500 rounded-full" />
        </div>

        {/* Description */}
        <p className="mt-4 text-[17px] text-gray-700 max-w-3xl mx-auto">
          Hindusthan Institute of Technology promotes a thriving culture of innovation and entrepreneurship. These policies support both students and faculty in exploring and executing their creative ideas.
        </p>
      </div>

      {/* Policy Box */}
      <div className="relative bg-gray-50 border-t-[6px] border-yellow-500 rounded-lg shadow-md p-6 max-w-4xl mx-auto">
        {/* Pushpin Emoji */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-2xl">
          📌
        </div>

        {/* List */}
        <ul className="list-disc space-y-5 mt-6 text-[17px] text-black pl-6">
          <li>
            <a
              href="/pdfs/startup.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-yellow-600 transition"
            >
              HINDUSTHAN INSTITUTE OF TECHNOLOGY INNOVATION & START-UP POLICY AND GUIDELINES 2021 FOR FACULTY AND STUDENTS
            </a>
          </li>
          <li>
            <a
              href="/pdfs/National-Innovation-Policy-2019.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-yellow-600 transition"
            >
              National INNOVATION and STARTUP Policy 2019 for Students and Faculty
            </a>
          </li>
        </ul>
        
      </div>
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-12 rounded-2xl text-center text-white mt-[0.5in]">
  <h2 className="text-3xl font-bold mb-4">Join Our Educational Legacy</h2>
  <p className="text-xl mb-8 opacity-90">
    Be part of an institution that has been shaping futures for over three decades
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
      Explore Programs
    </button>
    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
      Contact Us
    </button>
  </div>
</section>

    </div>
    
  );
};

export default InnovationPolicy;
