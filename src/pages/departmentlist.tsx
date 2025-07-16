import React from 'react';
import DepartmentCard from './DepartmentCard';

interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
}

const DepartmentsList: React.FC = () => {
  const departments: Department[] = [
    {
      id: "mech",
      name: "Mechanical Engineering",
      shortName: "MECH",
      description: "Engineering mechanical solutions for manufacturing, automation, and sustainable technologies.",
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: "cse",
      name: "Computer Science & Engineering",
      shortName: "CSE",
      description: "Pioneering the digital revolution with cutting-edge curriculum in AI, ML, and Software Engineering.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div style={{ padding: '24px' }}>
      <h1>Our Departments</h1>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px'
      }}>
        {departments.map((dept) => (
          <DepartmentCard key={dept.id} department={dept} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentsList;