import React from 'react';
import { useParams } from 'react-router-dom';

const FacultyProfilePage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Faculty Profile</h1>
      <p>Loading profile for faculty ID: <strong>{id}</strong></p>

      {/* You can fetch the full profile details using this ID */}
    </div>
  );
};

export default FacultyProfilePage;
