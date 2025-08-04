import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import secData from '../data/SecData.json';
import ReusableTable from '../components/ReusableTable';
import InnovationPolicy from './InnovationPolicy';

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
  research: 'Research and Development', 
  notable: 'Notable Projects',
  powered_industry: 'Powered by Industry',
  collaborations: 'Industry Collaborations',
  faculty_achievements: 'Faculty Achievements',
  student_achievements: 'Student Achievements',
  obe_practices: 'OBE Practices',
  obe: 'OBE Practices',
 innovations: 'Innovations',
 placements: 'Placements',
"curriculum-syllabus": 'Curriculum and Syllabus',
  International: 'International Journals',
  International_Confrense: 'International Conference',
  National_journals: 'National Journals',
  National_confrence: 'National Conference',
  Books: 'Books',
  Books_chapters: 'Book Chapters',
  participations: 'Event Participations',
  stu_International_Confrense: 'Student International Conference',
  stu_National_journals: 'Student National Journals',
  stu_National_confrence: 'Student National Conference',
  stu_Books: 'Student Books',
  hackathon: 'Student Hackathon Events',
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
  stu_International_Confrense: 'Students presenting at international conferences.',
  stu_National_journals: 'Student publications in national journals.',
  stu_National_confrence: 'Student presentations at national conferences.',
  stu_Books: 'Books published by students.',
  hackathon: 'Hackathon events participated by students.',
};

const DataTable: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();
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
 const title = sectionTitleMap[normalizedSection] || 'Section';

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
    <div className="relative mt-0 bg-white">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="group fixed top-[200px] left-9 z-50 w-12 h-12 rounded-full bg-yellow-500 shadow-lg flex items-center justify-center cursor-pointer hover:bg-yellow-600 transition-all duration-300"
        aria-label="Back"
      >
        <ChevronLeft className="w-6 h-6 text-black" strokeWidth={3} />
        <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Back
        </span>
      </button>

      {/* Table */}
      <ReusableTable
        data={data}
        title={title}
        description={description}
        showCategory={showCategoryDropdown}
        categoryOptions={dropdownOptions}
        selectedCategoryKey={selectedCategoryKey}
        onCategoryChange={setSelectedCategoryKey}
      />
    </div>
  );
};

export default DataTable;
