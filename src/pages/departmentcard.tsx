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
      className="cursor-pointer border border-gray-200 rounded-2xl p-4 m-2 sm:m-4 w-full max-w-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-white flex flex-col"
    >
      {/* Image */}
      <div className="w-full h-44 sm:h-48 md:h-52 overflow-hidden rounded-xl mb-3">
        <img
          src={department.image}
          alt={department.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Department Name */}
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 text-center">
        {department.name}
      </h3>

      {/* Short Name */}
      <p className="text-xs sm:text-sm text-yellow-600 font-medium text-center mb-1">
        {department.shortName}
      </p>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 line-clamp-4 text-justify px-1">
        {department.description}
      </p>
    </div>
  );
};

export default DepartmentCard; 
