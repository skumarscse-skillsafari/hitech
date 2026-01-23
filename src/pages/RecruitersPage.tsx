import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import recruitersData from '../data/recruiters.json';

interface Recruiter {
  name: string;
  logo?: string;
}

const famousRecruitersOrder: string[] = [
  'Amazon',
  'Juspay',
  'Cognizant',
  'Zoho Corporation',
  'Wipro',
  'Rinex Technologies',
  'Google',
  'Microsoft',
  'TCS',
  'Turing',
  'Vivnovation',
  'CTS GENC NEXT',
  'Infosys',
  'Accenture',
  'LTIMindtree',
  'Hexaware Technologies',
  'HCL Tech',
  'L&T',
  'Goldman Sachs',
  'Thoughtworks',
  'Qualcomm',
  'Capgemini',
  'MRF Limited',
  'Flipkart',
  'Axis Bank',
  'Bajaj Finance Limited',
  'SBI Card',
  'UST Global',
];

const sortedRecruiters: Recruiter[] = [...(recruitersData as Recruiter[])].sort((a, b) => {
  const indexA = famousRecruitersOrder.indexOf(a.name);
  const indexB = famousRecruitersOrder.indexOf(b.name);

  const isAFamous = indexA !== -1;
  const isBFamous = indexB !== -1;

  if (isAFamous && isBFamous) {
    return indexA - indexB;
  }

  if (isAFamous) return -1;
  if (isBFamous) return 1;

  return a.name.localeCompare(b.name);
});

const companyDomainOverrides: Record<string, string> = {
  'Amazon': 'amazon.com',
  'Wipro': 'wipro.com',
  'Cognizant': 'cognizant.com',
  'Zoho Corporation': 'zoho.com',
  'Hexaware Technologies': 'hexaware.com',
  'HCL Tech': 'hcltech.com',
  'L&T': 'larsentoubro.com',
  'Goldman Sachs': 'goldmansachs.com',
  'Thoughtworks': 'thoughtworks.com',
  'Qualcomm': 'qualcomm.com',
  'Capgemini': 'capgemini.com',
  'Flipkart': 'flipkart.com',
  'Axis Bank': 'axisbank.com',
  'Bajaj Finance Limited': 'bajajfinserv.in',
  'SBI Card': 'sbicard.com',
  'UST Global': 'ust.com',
};

function buildDomainFromName(name: string): string | undefined {
  const override = companyDomainOverrides[name];
  if (override) return override;

  const cleaned = name
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();

  if (!cleaned) return undefined;
  return `${cleaned}.com`;
}

function getCompanyEnrichLogoUrl(companyName: string): string | undefined {
  if (companyName === 'Amazon') {
    return '/logos/amazon.png';
  }
  if (companyName === 'QSpiders') {
    return '/logos/qspiders.png';
  }
  const token = 'pk_K8u3uM3kQMik6ox3R29MqA';
  const encodedName = encodeURIComponent(companyName);
  return `https://img.logo.dev/name/${encodedName}?token=${token}`;
}

const RecruitersPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageLayout
      title="Top Recruiters - Hindusthan Institute of Technology"
      description="Explore all our campus recruiters and industry partners who offer opportunities to our students."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-32">
        <SectionWrapper lazy lazyHeight="200px" lazyDelay={300} className="-mt-12">
          <div className="flex items-center justify-between mt-4 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              <span className="text-lg">←</span>
              <span>Back to Department</span>
            </button>
          </div>
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Recruiters</h1>
            <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-2 mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We are partnered with leading companies across IT, core engineering, finance and emerging tech
              domains who regularly visit our campus for recruitment.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Total Companies: <span className="font-semibold">{sortedRecruiters.length}</span>
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper lazy lazyHeight="600px" lazyDelay={400}>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {sortedRecruiters.map((company) => {
                const logoUrl = getCompanyEnrichLogoUrl(company.name);
                return (
                  <div
                    key={company.name}
                    className="flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-gray-200 p-3 sm:p-4 hover:border-yellow-300 hover:shadow-md transition-all"
                  >
                    {logoUrl ? (
                      <img
                        src={logoUrl}
                        alt={company.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-3"
                      />
                    ) : (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 mb-2 sm:mb-3 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-700 font-bold text-lg">
                        {company.name.charAt(0)}
                      </div>
                    )}
                    <p className="text-center text-[11px] sm:text-xs font-medium text-gray-800 leading-snug">
                      {company.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </PageLayout>
  );
};

export default RecruitersPage;
