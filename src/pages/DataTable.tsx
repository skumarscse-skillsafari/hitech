import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import secData from '../data/SecData.json';
import ReusableTable from '../components/ReusableTable';

const categoryOptions = [
  { label: 'Mini Projects', key: 'miniProjects' },
  { label: 'Micro Projects', key: 'micro_projects' },
  { label: 'Prototypes', key: 'prototypes' },
];

const sectionDataKeyMap: Record<string, string> = {
  internships: 'internships',
  micro: 'micro_projects',
  prototypes: 'prototypes',
  research: 'research_data',
  notable: 'notable',
  project: 'notable',
};

const sectionTitleMap: Record<string, string> = {
  internships: 'Internships',
  miniProjects: 'Mini Projects',
  micro_projects: 'Micro Projects',
  prototypes: 'Prototypes',
  research_data: 'Research Projects',
  notable: 'Notable Projects',
};

const sectionDescriptions: Record<string, string> = {
  internships: 'A collection of student internships with various companies across years.',
  miniProjects: 'Innovative mini projects developed by student teams.',
  micro_projects: 'Short academic micro projects focused on practical problems.',
  prototypes: 'Funded and recognized student prototype projects.',
  research_data: 'Ongoing and completed faculty research initiatives.',
  notable: 'Notable student projects across different categories.',
};

const DataTable: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const normalizedSection = section?.toLowerCase() || '';
  const isNotableSection = normalizedSection === 'notable';

  const defaultCategory = isNotableSection
    ? 'miniProjects'
    : sectionDataKeyMap[normalizedSection] || 'miniProjects';

  const [activeCategory, setActiveCategory] = useState<keyof typeof secData>(defaultCategory as keyof typeof secData);

  const handleCategoryChange = (categoryKey: string) => {
    setActiveCategory(categoryKey as keyof typeof secData);
  };

  const data = secData[activeCategory] || [];
  const title = isNotableSection
    ? sectionTitleMap['notable']
    : sectionTitleMap[activeCategory] || 'Data Table';
  const description = isNotableSection
    ? sectionDescriptions['notable']
    : sectionDescriptions[activeCategory] || 'Here is the detailed data.';

  return (
    <div className="p-6 w-full max-w-screen-2xl mx-auto bg-white rounded-lg shadow mt-6 mb-10 font-sans">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>

      {data && Array.isArray(data) && data.length > 0 ? (
        <ReusableTable
          data={data}
          title={title}
          showCategory={isNotableSection}
          categoryOptions={isNotableSection ? categoryOptions : []}
          onCategoryChange={isNotableSection ? handleCategoryChange : undefined}
          selectedCategoryKey={activeCategory}
        />
      ) : (
        <div className="bg-gray-50 rounded-lg p-8 text-center border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">No data available for this section.</p>
        </div>
      )}
    </div>
  );
};

export default DataTable;
