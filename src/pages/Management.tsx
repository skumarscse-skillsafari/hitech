import React from 'react';

const regulations = [
  { title: 'Autonomous Regulation 2017', file: '/pdfs/autonomous_regulation_2017.pdf' },
  { title: 'Autonomous Regulation 2022', file: '/pdfs/autonomous_regulation_2022.pdf' },
];

const faculty = [
  { sno: 1, name: 'Dr. M. Palani', designation: 'Controller of Examinations' },
  { sno: 2, name: 'Mr. S. Vignesh', designation: 'Assistant Controller' },
];

const ControllerOfExaminations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-[#003366] mb-2">
        Controller of Examinations
      </h1>
      <p className="text-center text-gray-600 text-lg mb-10">
        Ensuring academic integrity, transparency, and timely conduct of examinations.
      </p>

      {/* COE Message */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-[#003366] mb-4">COE Message</h3>
        <p className="text-justify text-gray-700 leading-relaxed">
          The Controller of Examinations plays a vital role in maintaining the academic standards
          and ensuring the smooth conduct of assessments. We at HITECH strive for accuracy, fairness,
          and timely results in all our academic activities.
        </p>
      </section>

      {/* News & Announcements */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-[#003366] mb-4">News & Announcements</h3>
        <p className="text-gray-700">Results for Even Semester Examinations (2024) have been published.</p>
      </section>

      {/* Regulations */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-[#003366] mb-4">Regulations</h3>
        <div className="flex flex-wrap gap-4">
          {regulations.map((reg, index) => (
            <a
              key={index}
              href={reg.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004080] text-white px-5 py-2 rounded-md font-medium hover:bg-[#0059b3]"
            >
              {reg.title}
            </a>
          ))}
        </div>
      </section>

      {/* Responsibilities */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-[#003366] mb-4">Responsibilities</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Scheduling and conducting examinations.</li>
          <li>Evaluation process coordination.</li>
          <li>Timely result processing and publication.</li>
          <li>Issuing grade sheets and transcripts.</li>
        </ul>
      </section>

      {/* Reforms */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-[#003366] mb-4">Reforms</h3>
        <p className="text-justify text-gray-700 leading-relaxed">
          HITECH has adopted several examination reforms including the use of digital evaluation,
          barcode system for answer sheets, and centralized exam cell for enhanced transparency.
        </p>
      </section>

      {/* Faculty Table */}
      <section>
        <h3 className="text-2xl font-semibold text-[#003366] mb-4">COE Faculty Team</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-[#003366] text-white">
              <tr>
                <th className="py-3 px-4 text-left">S.No</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Designation</th>
              </tr>
            </thead>
            <tbody>
              {faculty.map((member, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-3 px-4">{member.sno}</td>
                  <td className="py-3 px-4">{member.name}</td>
                  <td className="py-3 px-4">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ControllerOfExaminations;
