import React from 'react';

const Cafeteria: React.FC = () => {
  return (
    <div className="section-wrapper pb-20">
      <h1 className="section-title">Campus Cafeteria</h1>
      <p className="section-subtitle">
        Our cafeteria serves fresh, hygienic, and affordable food for students and staff, ensuring a balanced diet in a lively atmosphere.
      </p>

      <div className="card-box">
        <h2 className="text-xl font-semibold mb-2">Cafeteria Highlights</h2>
        <ul className="feature-list">
          <li>Wide variety of dishes and beverages</li>
          <li>Separate counters for vegetarian and non-vegetarian</li>
          <li>Clean and comfortable dining environment</li>
          <li>Strict food safety and quality checks</li>
        </ul>
      </div>
    </div>
  );
};

export default Cafeteria;
