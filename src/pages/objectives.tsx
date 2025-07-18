import React from 'react';
import { Award, Eye, Target, Landmark, Sparkles } from 'lucide-react';

const Objectives: React.FC = () => {
  return (
    <div className="mt-0 bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[280px] md:h-[360px] bg-gradient-to-r from-yellow-50 to-yellow-100 flex items-center justify-center overflow-hidden rounded-xl shadow-inner">
        <img
          src="/images/college-photo.jpg"
          alt="Hindusthan Institute of Technology"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 drop-shadow-lg">
            Our Institutional Objectives
          </h1>
          <p className="text-lg md:text-xl mt-3 text-gray-700 font-medium">
            Vision • Mission • Values • Heritage
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-16 text-gray-800 leading-relaxed text-justify text-[17px]">

        {/* Our History */}
        <section className="bg-white rounded-xl shadow-xl border-l-4 border-yellow-400 p-6 md:p-10 transition-transform duration-300 hover:shadow-2xl hover:scale-[1.02]">
          <div className="flex items-center space-x-4 mb-4">
            <Landmark className="text-yellow-600 w-6 h-6" />
            <h2 className="text-3xl font-bold text-yellow-700">Our History</h2>
          </div>
          <p>
            Hindusthan Institute of Technology (HITECH) was established in 2007 by the visionary industrialist Thiru.T.S.R. Khannaiyann. As an autonomous institution, HITECH strives to empower students with knowledge, character, and leadership in the fields of engineering, technology, and management. 
          </p>
          <p className="mt-4">
            Our institution is equipped with modern infrastructure, well-stocked libraries, digital resources like IIT-NPTEL, and lush green campuses with excellent sports and recreational facilities. Our emphasis goes beyond academics to focus on grooming future leaders who are grounded in Indian values and global outlooks.
          </p>
        </section>

        {/* Vision */}
        <section className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 md:p-10 border border-yellow-100 shadow transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
          <div className="flex items-center space-x-4 mb-4">
            <Eye className="text-yellow-600 w-6 h-6" />
            <h2 className="text-3xl font-bold text-yellow-700">Our Vision</h2>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">“INITIATE, INNOVATE, INCULCATE”</h3>
            <p>
              We pursue a philosophy of continuous learning and value-based education. Our goal is to nurture the innate potential of each student and prepare them to approach life with confidence, innovation, and integrity.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 md:p-10 border border-yellow-100 shadow transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
          <div className="flex items-center space-x-4 mb-4">
            <Target className="text-yellow-600 w-6 h-6" />
            <h2 className="text-3xl font-bold text-yellow-700">Our Mission</h2>
          </div>
          <p>
            Our mission is to impart revolutionary technical education and instill strong discipline through dedicated faculty and cutting-edge laboratories. We aim to develop technically superior and ethically sound professionals who meet global industry demands and societal needs.
          </p>
        </section>

        {/* Value Highlights */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-yellow-100 shadow-sm transition-transform duration-300 hover:shadow-md hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Our Educational Philosophy
            </h3>
            <p>
              We focus on transformational leadership through innovative teaching, real-world problem solving, and interdisciplinary collaboration. Our motto “Experience the Excellence” is reflected in everything we do.
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 shadow-sm transition-transform duration-300 hover:shadow-md hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2 flex items-center gap-2">
              <Award className="w-5 h-5" /> Our Legacy
            </h3>
            <p>
              From a humble beginning in 2007 to becoming a renowned center of education, HITECH has stayed committed to providing globally relevant, morally grounded education and lifelong values to its students.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Objectives;
