import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Program {
  name: string;
  duration: string;
  intake: string;
  eligibility: string;
}

interface DepartmentData {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  vision: string;
  mission: string;
  programs: Program[];
  specializations: string[];
  facilities: string[];
}

const MechanicalEngineeringPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // In a real app, you would fetch this data based on the id parameter
  const departmentData: DepartmentData = {
    id: "mech",
    name: "Mechanical Engineering",
    shortName: "MECH",
    description: "Engineering mechanical solutions for manufacturing, automation, and sustainable technologies.",
    image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600",
    vision: "To be a center of excellence in mechanical engineering education and research.",
    mission: "To provide comprehensive mechanical engineering education and develop competent engineers.",
    programs: [
      {
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        intake: "120 Students",
        eligibility: "10+2 with PCM, JEE Main"
      },
      {
        name: "M.Tech Mechanical Engineering",
        duration: "2 Years",
        intake: "30 Students",
        eligibility: "B.Tech ME, GATE"
      }
    ],
    specializations: ["Robotics & Automation", "Thermal Engineering", "Manufacturing"],
    facilities: ["CAD/CAM Lab", "Thermal Lab", "Manufacturing Lab"]
  };

  const handleBackClick = () => {
    navigate('/departments');
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <button 
        onClick={handleBackClick}
        style={{
          padding: '8px 16px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
      >
        ← Back to Departments
      </button>

      <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
        <img 
          src={departmentData.image} 
          alt={departmentData.name}
          style={{
            width: '400px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
        <div>
          <h1>{departmentData.name} ({departmentData.shortName})</h1>
          <p style={{ fontSize: '1.1rem' }}>{departmentData.description}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <section>
          <h2>Vision</h2>
          <p>{departmentData.vision}</p>
          
          <h2>Mission</h2>
          <p>{departmentData.mission}</p>
        </section>

        <section>
          <h2>Programs Offered</h2>
          {departmentData.programs.map((program, index) => (
            <div key={index} style={{ marginBottom: '16px', padding: '16px', border: '1px solid #eee', borderRadius: '8px' }}>
              <h3>{program.name}</h3>
              <p><strong>Duration:</strong> {program.duration}</p>
              <p><strong>Intake:</strong> {program.intake}</p>
              <p><strong>Eligibility:</strong> {program.eligibility}</p>
            </div>
          ))}
        </section>
      </div>

      <section style={{ marginTop: '32px' }}>
        <h2>Specializations</h2>
        <ul style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
          {departmentData.specializations.map((spec, index) => (
            <li key={index} style={{
              padding: '8px 16px',
              backgroundColor: '#f0f0f0',
              borderRadius: '20px'
            }}>
              {spec}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '32px' }}>
        <h2>Facilities</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {departmentData.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MechanicalEngineeringPage;