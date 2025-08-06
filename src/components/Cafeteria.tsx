import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Cafeteria: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mt-0 bg-white section-wrapper pb-20">
      {/* Back Button - visible only on md+ screens */}
      <div className="hidden md:flex">
        <button
          onClick={() => navigate(-1)}
          className="group fixed top-[200px] left-9 z-50 w-12 h-12 rounded-full bg-yellow-500 shadow-lg flex items-center justify-center cursor-pointer hover:bg-yellow-600 transition-all duration-300"
          aria-label="Back"
        >
          <ChevronLeft className="w-6 h-6 text-black" strokeWidth={3} />
          <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Back
          </span>
        </button>
      </div>

      {/* Content */}
      <h1 className="section-title">Campus Cafeteria</h1>
      <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-4"></div>
      <p className="section-subtitle text-center max-w-3xl mx-auto">
        Our cafeteria serves fresh, hygienic, and affordable food for students and staff, ensuring a balanced diet in a lively atmosphere.
      </p>

      <div className="card-box mt-10">
        <h2 className="text-xl font-semibold mb-4">Cafeteria Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Wide variety of dishes and beverages</li>
          <li>Separate counters for vegetarian and non-vegetarian</li>
          <li>Clean and comfortable dining environment</li>
          <li>Strict food safety and quality checks</li>
        </ul>
      </div>
    </div>
  );
};

export default Cafeteria;
