import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Department {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
}

interface DepartmentCardProps {
  department: Department;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/departments/${department.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-gray-200 rounded-xl p-4 m-4 max-w-sm w-full hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-white"
    >
      <img
        src={department.image}
        alt={department.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{department.name}</h2>
      <p className="text-sm text-gray-500 font-medium mb-2">{department.shortName}</p>
      <p className="text-sm text-gray-600 line-clamp-3">{department.description}</p>
    </div>
  );
};

export default DepartmentCard;
