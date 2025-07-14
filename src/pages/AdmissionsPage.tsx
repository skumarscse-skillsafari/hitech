import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Admissions from '../components/Admissions';
import collegeData from '../data/collegeData.json';

const AdmissionsPage: React.FC = () => {
  return (
    <PageLayout 
      title="Admissions - Hindusthan Institute of Technology"
      description="Join HIT for world-class engineering education. Learn about our admission process, eligibility criteria, and application procedures."
    >
      <Admissions admissions={collegeData.admissions} />
    </PageLayout>
  );
};

export default AdmissionsPage;