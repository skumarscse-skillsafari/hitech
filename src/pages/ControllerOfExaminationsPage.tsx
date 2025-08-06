import React from 'react';
import {
  ScrollText,
  ClipboardList,
  Users,
  Settings,
  FileText,
  Download,
  ChevronLeft,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../components/layout/SectionWrapper';
import PageLayout from '../components/layout/PageLayout';

type RegulationItem = {
  name: string;
  file: string;
};

type FacultyMember = {
  name: string;
  role: string;
  qualification: string;
};

const RegulationList: React.FC<{ title: string; regulations: RegulationItem[] }> = ({
  title,
  regulations,
}) => (
  <div className="bg-white p-6 rounded-xl shadow border" role="region" aria-label={`${title} regulations`}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title} Regulations</h3>
    <div className="space-y-3">
      {regulations.map(({ name, file }) => (
        <a
          key={file}
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-3 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-md border border-yellow-200 font-medium shadow-sm transition cursor-pointer"
          aria-label={`Download ${name} regulation document`}
        >
          <span>{name}</span>
          <Download className="ml-3 w-5 h-5 text-yellow-700 group-hover:text-yellow-900" />
        </a>
      ))}
    </div>
  </div>
);

const ResponsibilityItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200 shadow hover:shadow-md">
    <p className="text-gray-700 text-base leading-relaxed">• {text}</p>
  </div>
);

const ReformItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="bg-white p-4 rounded-xl shadow border border-gray-100 hover:shadow-md transition-shadow">
    <p className="text-gray-700">• {text}</p>
  </div>
);

const FacultyTable: React.FC<{ faculty: FacultyMember[] }> = ({ faculty }) => (
  <div className="overflow-x-auto" role="region" aria-label="Examination Cell Faculty">
    <table className="w-full table-auto text-left border border-gray-200 rounded-xl shadow-sm bg-white">
      <thead className="bg-yellow-100 text-gray-800">
        <tr>
          <th className="py-3 px-4">S. No</th>
          <th className="py-3 px-4">Name</th>
          <th className="py-3 px-4">Role</th>
          <th className="py-3 px-4">Qualification</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {faculty.map(({ name, role, qualification }, i) => (
          <tr
            key={`${name}-${i}`}
            className="border-t border-gray-100 hover:bg-yellow-50"
          >
            <td className="py-3 px-4 font-medium">{i + 1}</td>
            <td className="py-3 px-4">{name}</td>
            <td className="py-3 px-4">{role}</td>
            <td className="py-3 px-4">{qualification}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ControllerOfExaminationsPage: React.FC = () => {
  const navigate = useNavigate();

  const title = 'Controller of Examinations';
  const subtitle = 'Autonomous Examination Cell - HIT';
  const description =
    'Ensuring transparent, secure, and efficient examination practices guided by innovation and integrity.';

  const news = '📢 4th Sem April 2025 Result Published';

  const regulations = {
    UG: [
      { name: 'R 2020', file: '/pdf/Regulations.pdf' },
      { name: 'Revised 2020 A', file: '/pdf/revised.pdf' },
      { name: 'Amendments in R2020 A', file: '/pdf/Amendents.pdf' },
      { name: 'R 2022', file: '/pdf/R2022.pdf' },
    ],
    PG: [{ name: 'R 2022', file: '/pdf/PG-Regulation 2022.pdf' }],
  };

  const responsibilities = [
    'Organization and management of internal assessments.',
    'Conducting end-semester theory and practical exams.',
    'Evaluation and result processing with accuracy.',
    'Publishing results and issuing grade sheets promptly.',
  ];

  const reforms = [
    'Fully automated exam processing system.',
    'Centralized evaluation at HIT campus.',
    'Answer script moderation by Result Passing Board.',
    'Digital hall tickets with photo, random dummy numbers.',
    'Bloom’s Taxonomy–based reforms in assessments.',
    'Strict malpractice control with CCTV & digital monitoring.',
    'Online revaluation, course registration, and fee payment.',
  ];

  const faculty = [
    {
      name: 'Dr. P.M. Balasubramaniam',
      role: 'Professor & CoE',
      qualification: 'M.E., Ph.D., MIE',
    },
    {
      name: 'Mr. S. Sivasubramanian',
      role: 'Asst. Professor & Deputy CoE',
      qualification: 'M.E',
    },
    {
      name: 'Mr. S. Udhayakumar',
      role: 'Asst. Professor & Deputy CoE',
      qualification: 'M.E',
    },
    {
      name: 'Ms. S. Mahalakshmi',
      role: 'Admin Assistant',
      qualification: '-',
    },
    {
      name: 'Mrs. R. Vanithamani',
      role: 'Admin Assistant',
      qualification: '-',
    },
    {
      name: 'Mrs. D. Kalavathi',
      role: 'Attender',
      qualification: '-',
    },
  ];

  return (
    <PageLayout
      title="Controller of Examinations - Hindusthan Institute of Technology"
      description="Explore exam reforms, faculty, and academic governance under autonomous status at HIT."
    >
      {/* Back Button */}
      <div className="hidden md:flex">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <SectionWrapper lazy className="-mt-6 mb-16 text-center" role="banner" aria-label="Page header">
          <h1 className="text-5xl font-bold text-gray-900 mb-3 leading-tight">{title}</h1>
          <p className="text-xl text-yellow-600 font-semibold">{subtitle}</p>
          <p className="text-md text-gray-600 max-w-3xl mx-auto mt-3">{description}</p>
        </SectionWrapper>

        {/* News */}
        <SectionWrapper lazy className="mb-16" role="region" aria-label="Latest News">
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow flex items-center justify-center">
            <ScrollText className="mr-3 text-yellow-600 w-6 h-6" />
            <span className="text-lg font-medium text-gray-800">{news}</span>
          </div>
        </SectionWrapper>

        {/* Regulations */}
        <section aria-labelledby="regulations-heading" className="mb-20">
          <SectionWrapper lazy>
            <h2
              id="regulations-heading"
              className="text-3xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center"
            >
              <FileText className="mr-2 text-yellow-600" /> Regulations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <RegulationList title="UG" regulations={regulations.UG} />
              <RegulationList title="PG" regulations={regulations.PG} />
            </div>
          </SectionWrapper>
        </section>

        {/* Responsibilities */}
        <section aria-labelledby="responsibilities-heading" className="mb-20">
          <SectionWrapper lazy>
            <h2
              id="responsibilities-heading"
              className="text-3xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center"
            >
              <ClipboardList className="h-7 w-7 text-yellow-600 mr-2" /> Responsibilities
            </h2>
            <div className="grid md:grid-cols-2 gap-6" role="list">
              {responsibilities.map((item) => (
                <ResponsibilityItem key={item} text={item} />
              ))}
            </div>
          </SectionWrapper>
        </section>

        {/* Reforms */}
        <section aria-labelledby="reforms-heading" className="mb-20">
          <SectionWrapper lazy>
            <h2
              id="reforms-heading"
              className="text-3xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center"
            >
              <Settings className="h-7 w-7 text-yellow-600 mr-2" /> Examination Reforms
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {reforms.map((reform) => (
                <ReformItem key={reform} text={reform} />
              ))}
            </div>
          </SectionWrapper>
        </section>

        {/* Faculty */}
        <section aria-labelledby="faculty-heading" className="mb-20">
          <SectionWrapper lazy>
            <h2
              id="faculty-heading"
              className="text-3xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center"
            >
              <Users className="h-7 w-7 text-yellow-600 mr-2" /> Examination Cell Faculty
            </h2>
            <FacultyTable faculty={faculty} />
          </SectionWrapper>
        </section>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action */}
        <SectionWrapper lazy className="mb-16 text-center">
          <div className="bg-yellow-50 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
            <p className="text-gray-700 mb-6">For any queries regarding examinations, please contact us.</p>
            <a
              href="/contactus"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Examination Cell
            </a>
          </div>
        </SectionWrapper>
</div>
        
    </PageLayout>
  );
};

export default ControllerOfExaminationsPage;
