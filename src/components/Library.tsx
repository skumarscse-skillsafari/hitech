import React from 'react';

const Library: React.FC = () => {
  return (
    <div className="section-wrapper pb-20 pt-[150px]">
      <h1 className="section-title">Central Library</h1>
      <p className="section-subtitle">
        Our central library is a well-equipped resource center, housing thousands of academic and reference materials.
      </p>

      <div className="card-box">
        <h2 className="text-xl font-semibold mb-2">Library Resources</h2>
        <ul className="feature-list">
          <li>50,000+ books across various disciplines</li>
          <li>Access to IEEE, Springer, Elsevier, and more</li>
          <li>Digital library and e-learning content</li>
          <li>Quiet reading zones and research support</li>
          <li>Extended hours during exams</li>
        </ul>
      </div>
    </div>
  );
};

export default Library;
