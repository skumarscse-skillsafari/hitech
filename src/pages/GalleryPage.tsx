import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Gallery from './Gallery';
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
  showScrollToTop={false}
>
  <Gallery />
</PageLayout>

  );
};

export default GalleryPage;
