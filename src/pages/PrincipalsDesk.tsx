import React from 'react';
import pb from "../../public/principal.jpg";
import { GraduationCap, Quote, Sparkles } from 'lucide-react';

const PrincipalsDesk: React.FC = () => {
  return (
    <div className="mt-8 bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center overflow-hidden rounded-xl shadow-inner">
        {/* ❌ Background image removed */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 drop-shadow-lg">
            From the Principal's Desk
          </h1>
          <p className="text-lg md:text-xl mt-3 text-gray-700 font-medium">
            Leading with Purpose & Passion
          </p>
        </div>
      </div>

      {/* Floating Profile Card */}
      <div className="-mt-20 max-w-5xl mx-auto bg-white rounded-2xl p-6 shadow-xl border border-yellow-300 flex flex-col md:flex-row gap-6 items-center mb-12 z-20 relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500 shadow-md">
          <img src={pb} alt="Principal" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-900">Dr. C. Natarajan</h2>
          <p className="text-yellow-700 font-medium">Principal, Hindusthan Institute of Technology</p>
          <p className="italic text-sm text-gray-600 mt-1">"Experience the Excellence"</p>
        </div>
      </div>

      {/* Message Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-8 space-y-8 text-[17px] text-gray-800 text-justify leading-relaxed">

        <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500 shadow-sm relative hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <Quote className="absolute top-5 left-4 text-yellow-500 w-6 h-6" />
          <p className="pl-10">
            HITECH is a community that blends tradition and innovation. We equip our students with technical precision and ethical strength, fostering leaders ready to contribute to a better tomorrow.
          </p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-bold text-yellow-700 mb-3">About HITECH</h3>
          <p>
            With a strong emphasis on discipline, value-based education, and industry collaboration, HITECH nurtures a balanced and transformative learning environment. Our students are trained not just to excel but to lead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-xl p-6 border border-yellow-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Principal Profile</h3>
            <p>
              Dr. Natarajan received his B.E from VIT, M.E from GCT Coimbatore, and Ph.D. from Anna University in Surface Machining. With 22+ years of academic experience, he’s a thought leader and committed educator.
            </p>
          </div>

          <div className="bg-yellow-100 rounded-xl p-6 border border-yellow-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Achievements & Research</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Reviewer for 5 international journals</li>
              <li>Guided 60+ B.E. projects, 10 M.E. theses</li>
              <li>Ph.D. guide at Anna University</li>
              <li>Published papers in leading journals</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 col-span-2 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Placement & Industry Ties</h3>
            <p>
              As Placement Head, Dr. Natarajan developed strategic partnerships with companies like Infosys, CTS, and Accenture. He coordinated Anna University’s State Level Drives and mentored students into thriving professionals.
            </p>
          </div>
        </div>

        {/* Signature */}
        <div className="text-right mt-10">
          <p className="text-gray-800">With kind regards,</p>
          <p className="font-bold text-lg mt-1 text-yellow-700">Dr. C. Natarajan</p>
          <p className="text-sm text-gray-600">Principal</p>
        </div>
      </section>
    </div>
  );
};

export default PrincipalsDesk;
