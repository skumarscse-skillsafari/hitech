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
      className="department-card"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        maxWidth: '300px',
        transition: 'transform 0.2s',
        ':hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
      }}
    >
      <img 
        src={department.image} 
        alt={department.name}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <h2>{department.name}</h2>
      <p>{department.shortName}</p>
      <p>{department.description}</p>
    </div>
  );
};

export default DepartmentCard;