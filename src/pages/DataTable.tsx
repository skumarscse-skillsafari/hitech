// src/pages/DataTable.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import secData from '../data/SecData.json';
import ReusableTable from '../components/ReusableTable';

const sectionDataKeyMap: Record<string, keyof typeof secData> = {
  internship: 'internships',
  internships: 'internships',
  project: 'miniProjects',
  projects: 'miniProjects',
};

const sectionTitleMap: Record<string, string> = {
  internship: 'Internships',
  internships: 'Internships',
  project: 'Mini Projects',
  projects: 'Mini Projects',
};


const DataTable: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const normalizedSection = section?.toLowerCase() || '';
  const actualKey = sectionDataKeyMap[normalizedSection];

  const data = actualKey ? secData[actualKey] : null;
  const title = sectionTitleMap[normalizedSection] || 'Unknown Section';

  return (
    <div className="p-4 max-w-6xl mx-auto mb-8 bg-white p-12 rounded-2xl shadow-lg text-center mb-16 mt-6">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">{title}</h2>
      <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4"></div>
      {data ? <ReusableTable data={data} /> : (
        <p className="text-center text-gray-600 mt-4">
          No data available for this section.
        </p>
      )}
    </div>
  );
};

export default DataTable;
