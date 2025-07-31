import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import secData from '../data/SecData.json';
import ReusableTable from '../components/ReusableTable';

const categoryOptions = [
  { label: 'Mini Projects', key: 'miniProjects' },
  { label: 'Micro Projects', key: 'micro_projects' },
  { label: 'Prototypes', key: 'prototypes' },
];

const facultyCategoryOptions = [
  { label: 'International Journals', key: 'International' },
  { label: 'International Conference', key: 'International_Confrense' },
  { label: 'National Journals', key: 'National_journals' },
  { label: 'National Conference', key: 'National_confrence' },
  { label: 'Books', key: 'Books' },
  { label: 'Book Chapters', key: 'Books_chapters' },
];

const stuCategoryOptions = [
  { label: 'Participations', key: 'participations' },
  { label: 'International Conference', key: 'stu_International_Confrense' },
  { label: 'National Journals', key: 'stu_National_journals' },
  { label: 'National Conference', key: 'stu_National_confrence' },
  { label: 'Books', key: 'stu_Books' },
  { label: 'Hackathon', key: 'hackathon' },
];

const sectionDataKeyMap: Record<string, string> = {
  internships: 'internships',
  micro: 'micro_projects',
  prototypes: 'prototypes',
  research: 'research_data',
  notable: 'notable',
  project: 'notable',
  collaborations: 'powered_industry',
  powered_industry: 'powered_industry',
  faculty_achievements: 'International',
  student_achievements: 'participations',
};

const sectionTitleMap: Record<string, string> = {
  internships: 'Internships',
  miniProjects: 'Mini Projects',
  micro_projects: 'Micro Projects',
  prototypes: 'Prototypes',
  research_data: 'Research Projects',
  notable: 'Notable Projects',
  powered_industry: 'Powered by Industry',
  faculty_achievements: 'Faculty Achievements',
  student_achievements: 'Student Achievements',
  International: 'International Journals',
  International_Confrense: 'International Conference',
  National_journals: 'National Journals',
  National_confrence: 'National Conference',
  Books: 'Books',
  Books_chapters: 'Book Chapters',
  participations: 'Event Participations',
};

const sectionDescriptions: Record<string, string> = {
  internships: 'A collection of student internships with various companies across years.',
  miniProjects: 'Innovative mini projects developed by student teams.',
  micro_projects: 'Short academic micro projects focused on practical problems.',
  prototypes: 'Funded and recognized student prototype projects.',
  research_data: 'Ongoing and completed faculty research initiatives.',
  notable: 'Notable student projects across different categories.',
  powered_industry: 'Projects done in collaboration with industry partners.',
  International: 'Faculty publications in reputed international journals.',
  International_Confrense: 'Presentations at international conferences.',
  National_journals: 'Publications in national journals.',
  National_confrence: 'Presentations at national conferences.',
  Books: 'Books published by faculty or students.',
  Books_chapters: 'Book chapters contributed by faculty or students.',
  participations: 'Students participating in various events and conferences.',
};

const DataTable: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const normalizedSection = section?.toLowerCase() || '';

  const isNotable = normalizedSection === 'notable';
  const isFaculty = normalizedSection === 'faculty_achievements';
  const isStudent = normalizedSection === 'student_achievements';

  const [selectedCategoryKey, setSelectedCategoryKey] = useState(() => {
    if (isNotable) return 'miniProjects';
    if (isFaculty) return 'International';
    if (isStudent) return 'participations';
    return sectionDataKeyMap[normalizedSection] || 'internships';
  });

  const data = secData[selectedCategoryKey] || [];
  const title =
    sectionTitleMap[selectedCategoryKey] ||
    sectionTitleMap[normalizedSection] ||
    'Section';
  const description =
    sectionDescriptions[selectedCategoryKey] ||
    sectionDescriptions[normalizedSection] ||
    '';

  const showCategoryDropdown = isNotable || isFaculty || isStudent;
  const dropdownOptions = isFaculty
    ? facultyCategoryOptions
    : isStudent
    ? stuCategoryOptions
    : categoryOptions;

  return (
    <ReusableTable
      data={data}
      title={title}
      description={description}
      showCategory={showCategoryDropdown}
      categoryOptions={dropdownOptions}
      selectedCategoryKey={selectedCategoryKey}
      onCategoryChange={setSelectedCategoryKey}
    />
  );
};

export default DataTable;
