import React from 'react';
import { useParams } from 'react-router-dom';
import departmentData from '../data/departments.json';

const FacultyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const faculty = departmentData.departments[0].faculty.find(
    (f) => f.id.toString() === id
  );

  if (!faculty) return <p>Faculty not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={faculty.image} alt={faculty.name} className="w-64 h-64 object-cover rounded-md mb-4" />
      <h1 className="text-3xl font-bold">{faculty.name}</h1>
      <p className="text-orange-600 font-semibold">{faculty.designation}</p>
      <p>{faculty.specialization}</p>
      <p>Experience: {faculty.experience}</p>
      <p>Education: {faculty.education}</p>
      <p>Publications: {faculty.publications}</p>
      <p>Email: <a href={`mailto:${faculty.email}`} className="text-blue-600">{faculty.email}</a></p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Biography:</h3>
        <p>{faculty.bio}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Research Areas:</h3>
        <ul className="list-disc ml-6">
          {faculty.researchAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FacultyDetail;
