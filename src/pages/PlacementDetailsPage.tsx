import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

const PlacementDetailsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout 
      title="About Placement - Hindusthan Institute of Technology"
      description="Comprehensive placement support and industry partnerships"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-32">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">About Placement</h2>
          <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-8"></div>
          
          <div className="flex items-center justify-between mt-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              <span className="text-lg">←</span>
              <span>Back to Department</span>
            </button>
          </div>

          {/* Placement Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
              <p className="text-gray-600 text-sm">Placement Rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">200+</div>
              <p className="text-gray-600 text-sm">Recruiters</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">12 LPA</div>
              <p className="text-gray-600 text-sm">Highest Package</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">6 LPA</div>
              <p className="text-gray-600 text-sm">Average Package</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl mb-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                The <strong>Placement Advisory Team</strong>, popularly known as <strong>Corporate Relations</strong> on HITECH campus, aims at providing the best opportunities enabling every student to realize his/her dream.
              </p>
              
              <p className="mb-4 text-lg leading-relaxed">
                This team is committed to the task of securing Final Placements and Summer Internships for every student on campus. It has not only consistently set high standards for itself but has been successful in surpassing them time and again.
              </p>
              
              <p className="mb-4 text-lg leading-relaxed">
                Over the last decade, Hindusthan has emerged as one of the most favored destinations for hiring fresh talent from campuses. Its endeavors to provide industry-compliant talent and emphasis on Quality, Discipline, Self-Learning, Ethics, and Values have borne rich dividends.
              </p>
              
              <p className="mb-4 text-lg leading-relaxed">
                Hindusthan has recently received an international recognition from MAC Singapore, the <strong>'Le Platina Royce Award'</strong>, for world-class brand status. The HR Club, Mumbai awarded our Institution as the <strong>"Best Institution in Tamil Nadu"</strong> for the Campus to Corporate Employability Programme.
              </p>
              
              <p className="mb-4 text-lg leading-relaxed">
                At Hindusthan, pedagogy is oriented to make students industry-ready. Students are given more exposure to practical learning which helps them meet industry expectations. All efforts are made to inculcate values and make them socially responsible citizens.
              </p>
            </div>
          </div>

          {/* Training and Recruitment Process */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Training & Recruitment Process</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Aptitude Test, Snap Test, GD's and Mock Interviews are conducted on a regular basis by both In-house team and through reputed HR's so that students have a real-life experience of what to expect in a recruitment process. INFOSYS's <strong>"Campus Connect"</strong>, Nasscom SSC's <strong>FSIT programs</strong> help to craft student careers towards necessary employability.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Major Companies like <strong>CTS, Infosys, TCS, WIPRO, Tech Mahindra, L&T Infotech, HP, DELL, Payoda, Infoview, MuSigma, FORD</strong> etc… are tied up with the Institutions for the necessary hiring process.
            </p>
          </div>

          {/* Additional Support Services */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Support Services</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              In addition to providing Placement support to the students in prestigious organizations, we also facilitate:
            </p>
            <ul className="mt-4 space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <span>Training of our students during summer and winter vacations</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <span>Internship opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <span>Project work for the students in the final year</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <span>Continuous institute-industry interactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <span>Alumni activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <span>Counseling of the students on job opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">✓</span>
                <span>Facilitating industry visits and inviting distinguished speakers</span>
              </li>
            </ul>
          </div>

          {/* Success Story */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Success</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Our students today are occupying coveted positions in <strong>Multinationals, Corporates, PSUs</strong> and other organizations with excellent compensation packages.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PlacementDetailsPage;
