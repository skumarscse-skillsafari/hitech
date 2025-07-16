import React from 'react';

const Hostel: React.FC = () => {
  return (
    <div className="section-wrapper pb-20">
      <h1 className="section-title">Hostel Facilities</h1>
      <p className="section-subtitle">
        Hindusthan Institute of Technology provides separate, secure, and well-furnished hostel facilities for boys and girls.
      </p>

      <div className="card-box">
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="feature-list">
          <li>Separate hostels for boys and girls</li>
          <li>24/7 security and CCTV surveillance</li>
          <li>Wi-Fi enabled premises</li>
          <li>Nutritious vegetarian and non-vegetarian meals</li>
          <li>Medical assistance and on-call doctor</li>
        </ul>
      </div>
    </div>
  );
};

export default Hostel;
