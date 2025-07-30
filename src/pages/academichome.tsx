import React from 'react';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  padding: '2rem',
  backgroundColor: '#fefefe',
  minHeight: '100vh',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#fffcdc',
  borderRadius: '15px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const cardHeaderStyle = (type: 'odd' | 'even'): React.CSSProperties => ({
  padding: '1rem',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#fff',
  background: type === 'odd'
    ? 'linear-gradient(to right, #ff9a9e, #fad0c4)'
    : 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
});

const cardBodyStyle: React.CSSProperties = {
  padding: '1rem',
  fontSize: '0.95rem',
  color: '#333',
};

const showMoreStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: 'goldenrod',
  fontWeight: 'bold',
  marginTop: '1rem',
  cursor: 'pointer',
};

const SemesterCards: React.FC = () => {
  return (
    <div style={containerStyle}>
      {/* ODD SEMESTER CARD */}
      <div style={cardStyle}>
        <div style={cardHeaderStyle('odd')}>
          <h2>ODD SEMESTER</h2>
        </div>
        <div style={cardBodyStyle}>
          <p>
            Odd semesters typically begin in July or August and cover the first half of the academic year.
            Students explore core subjects, projects, and foundational modules during this period.
          </p>
          <button style={showMoreStyle}>Show More ⌄</button>
        </div>
      </div>

      {/* EVEN SEMESTER CARD */}
      <div style={cardStyle}>
        <div style={cardHeaderStyle('even')}>
          <h2>EVEN SEMESTER</h2>
        </div>
        <div style={cardBodyStyle}>
          <p>
            Even semesters usually start around January and focus on advancing knowledge through electives,
            lab work, and applied projects. It’s often when final-year students work on capstone projects.
          </p>
          <button style={showMoreStyle}>Show More ⌄</button>
        </div>
      </div>
    </div>
  );
};

export default SemesterCards;
