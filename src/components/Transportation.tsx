import React from 'react';

const Transportation: React.FC = () => {
  return (
    <div className="section-wrapper pb-20">
      <h1 className="section-title">Transportation</h1>
      <p className="section-subtitle">
        The college provides extensive transportation facilities, connecting all key areas in and around Coimbatore.
      </p>

      <div className="card-box">
        <h2 className="text-xl font-semibold mb-2">Services Offered</h2>
        <ul className="feature-list">
          <li>Fleet of well-maintained buses</li>
          <li>Coverage across multiple routes</li>
          <li>Real-time GPS tracking for safety</li>
          <li>Experienced and trained drivers</li>
          <li>Affordable transport fee</li>
        </ul>
      </div>
    </div>
  );
};

export default Transportation;
