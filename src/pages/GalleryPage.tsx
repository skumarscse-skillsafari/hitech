import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Gallery from '../components/Gallery';
import collegeData from '../data/collegeData.json';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const navigate = useNavigate(); // ✅ Add this line

  return (
    <PageLayout 
      title="Gallery - Hindusthan Institute of Technology"
      
      description="Explore our beautiful campus, modern facilities, and vibrant student life through our photo gallery."
      className="pt-[92px] min-h-screen bg-white"

    >
      <Gallery gallery={collegeData.gallery} />

      {/* Back Button */}
      <div className="relative mt-0 bg-white">
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
    </PageLayout>
  );
};

export default GalleryPage;
