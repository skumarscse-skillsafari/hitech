import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Gallery from '../components/Gallery';
import collegeData from '../data/collegeData.json';

const GalleryPage: React.FC = () => {
  return (
    <PageLayout 
      title="Gallery - Hindusthan Institute of Technology"
      description="Explore our beautiful campus, modern facilities, and vibrant student life through our photo gallery."
      className="pt-44 min-h-screen bg-white"
    >
      <Gallery gallery={collegeData.gallery} />
    </PageLayout>
  );
};

export default GalleryPage;