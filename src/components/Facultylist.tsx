import React from 'react';
import { Link } from 'react-router-dom';
import departmentData from '../data/departments.json';

const FacultyList: React.FC = () => {
  const facultyList = departmentData.departments[0].faculty;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {facultyList.map((member) => (
        <div key={member.id} className="bg-white shadow-lg rounded-lg p-4">
          <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-md" />
          <span className="text-white text-sm px-2 py-1 bg-yellow-500 rounded-full inline-block mt-2">
            {member.experience}
          </span>
          <h2 className="text-xl font-bold mt-2">{member.name}</h2>
          <p className="text-orange-600 font-semibold">{member.designation}</p>
          <p className="text-sm">{member.specialization}</p>
          <p className="text-xs text-gray-600">{member.education}</p>
          <p className="text-xs text-gray-600">{member.publications} Publications</p>
          <Link to={`/faculty/${member.id}`} className="text-yellow-600 font-semibold mt-2 inline-block">
            View Profile
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FacultyList;
