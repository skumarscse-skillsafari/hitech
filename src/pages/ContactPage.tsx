import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Contact from '../components/Contact';
import collegeData from '../data/collegeData.json';

const ContactPage: React.FC = () => {
  return (
    <PageLayout 
      title="Contact Us - Hindusthan Institute of Technology"
      description="Get in touch with HIT for admissions, programs, or any other inquiries. Find our contact information and location details."
      className="pt-44 min-h-screen bg-white"
    >
      <Contact contact={collegeData.contact} />
    </PageLayout>
  );
};

export default ContactPage;