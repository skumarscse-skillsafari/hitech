import React from 'react';
import './HonorableStudents.css'; 

interface StudentCardProps {
  name: string;
  designation: string;
  experience: string;
  specialization: string;
  phdFrom: string;
  imageUrl: string;
  logoUrl: string;
}

const StudentCard: React.FC<StudentCardProps> = ({
  name,
  designation,
  experience,
  specialization,
  phdFrom,
  imageUrl,
  logoUrl,
}) => {
  return (
    <div className="card">
      <img className="main-img" src={imageUrl} alt={name} />
      <div className="card-content">
        <span className="experience">{experience}</span>
        <div className="name">{name}</div>
        <div className="designation">
          <img src={logoUrl} className="logo" alt="logo" />
          {designation}
        </div>
        <div className="description-text">{specialization}</div>
        <div className="phd">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="salary"
          />
          {phdFrom}
        </div>
      </div>
    </div>
  );
};

const HonorableStudents: React.FC = () => {
  const students: StudentCardProps[] = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head',
      experience: '18 years',
      specialization: 'Artificial Intelligence, Machine Learning',
      phdFrom: 'Ph.D from IIT Delhi',
      imageUrl: 'https://via.placeholder.com/300x200?text=Student+1',
      logoUrl: 'https://via.placeholder.com/18',
    },
    {
      name: 'Dr. Anita Singh',
      designation: 'Associate Professor',
      experience: '12 years',
      specialization: 'Data Science, Big Data Analytics',
      phdFrom: 'Ph.D from IIT Bombay',
      imageUrl: 'https://via.placeholder.com/300x200?text=Student+2',
      logoUrl: 'https://via.placeholder.com/18',
    },
    {
      name: 'Dr. Vikram Patel',
      designation: 'Assistant Professor',
      experience: '8 years',
      specialization: 'Cybersecurity, Network Security',
      phdFrom: 'Ph.D from IIT Kanpur',
      imageUrl: 'https://via.placeholder.com/300x200?text=Student+3',
      logoUrl: 'https://via.placeholder.com/18',
    },
  ];

  return (
    <div className="students-container">
      <h1>Honorable Students</h1>
      <p className="description">
        Our elite alumnis from the department of computer science and engineering
      </p>
      <div className="card-container">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
};

export default HonorableStudents;
