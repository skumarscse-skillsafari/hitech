import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Landmark, BookOpenCheck, Users } from 'lucide-react';

const BoardOfGovernance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-40 bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[260px] md:h-[340px] bg-gradient-to-r from-yellow-100 to-yellow-300 flex items-center justify-center overflow-hidden rounded-xl shadow-inner">
        <img
          src={`${import.meta.env.BASE_URL}images/college-photo.jpg`}
          alt="Governance"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 drop-shadow-lg">
            Board of Governance
          </h1>
          <p className="text-lg md:text-xl mt-3 text-gray-700 font-medium">
            Guiding Leadership • Academic Excellence • Ethical Oversight
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-5xl mx-auto px-4 md:px-10 py-16 text-gray-800 space-y-12 leading-relaxed">
        
        {/* Overview Card */}
        <section className="bg-yellow-50 border-l-4 border-yellow-400 shadow-md rounded-xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <Landmark className="text-yellow-600 w-6 h-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-700">
              Institutional Overview
            </h2>
          </div>
          <p className="text-justify text-[17px]">
            The Board of Governance (BoG) serves as the apex body that steers the strategic direction of our institution. It ensures the highest quality standards in academics, infrastructure, student welfare, and global outreach. Education is not just about employability — it involves expanding perspectives, nurturing ethical values, and shaping holistic human capital prepared for a dynamic world.
          </p>
        </section>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Responsibilities */}
          <div className="bg-white rounded-xl border border-yellow-200 shadow p-6 flex flex-col justify-between hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <BookOpenCheck className="text-yellow-600 w-6 h-6" />
              <h3 className="text-xl font-semibold text-yellow-700">
                Major Responsibilities
              </h3>
            </div>
            <p className="text-gray-700 text-[16px] mb-6">
              The BoG defines vision policies, approves curriculum frameworks, ensures financial oversight, and governs institutional standards in alignment with global education benchmarks.
            </p>
            <button className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-lg">
              Learn More
            </button>
          </div>

          {/* Members */}
          <div className="bg-white rounded-xl border border-yellow-200 shadow p-6 flex flex-col justify-between hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-yellow-600 w-6 h-6" />
              <h3 className="text-xl font-semibold text-yellow-700">
                Governing Council Members
              </h3>
            </div>
            <p className="text-gray-700 text-[16px] mb-6">
              Comprising visionary educators, industry experts, and community leaders, our council ensures impactful and ethical decision-making for institutional growth.
            </p>
            <button
              onClick={() => navigate('/governing-council')}
              className="mt-auto border border-yellow-500 text-yellow-700 hover:bg-yellow-100 px-5 py-2 rounded-lg font-semibold"
            >
              View Council
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfGovernance;
