import React from 'react';
import { FileText } from 'lucide-react';

const years = [
  { year: '2025–26' },
  { year: '2024–25' },
  { year: '2023–24' },
  { year: '2022–23' },
];

const semesters = [
  { title: 'Odd Semester' },
  { title: 'Even Semester' },
];

const yearWiseData = years.map(({ year }) => ({
  year,
  semesters: semesters.map(({ title }) => ({
    title,
    calendars: [
      { label: '1st Year Academic Calendar' },
      { label: '2nd Year Academic Calendar' },
      { label: '3rd & 4th Year Academic Calendar' },
    ],
  })),
}));

const AcademicCalendar = () => {
  return (
    <div className="min-h-screen bg-white text-center px-4 pb-10">
      <h1 className="text-4xl font-bold text-yellow-900 pt-10">Academic Calendar</h1>
      <p className="text-md text-gray-600 mt-2 mb-6 px-4 max-w-2xl mx-auto">
        Explore the structured academic timeline including semester start dates, important events, and examination periods for the academic years listed below.
      </p>

      {yearWiseData.map((data, idx) => (
        <div key={idx} className="mb-14">
          <h2 className="text-2xl font-semibold text-yellow-900 mt-10 mb-6">
            Academic Year {data.year}
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-start">
            {data.semesters.map((sem, sIdx) => (
              <div
                key={sIdx}
                className="bg-yellow-400 text-left rounded-xl shadow-xl p-6 w-full max-w-md"
              >
                <h3 className="text-lg font-bold mb-4 text-yellow-900">{sem.title}</h3>
                {sem.calendars.map((item, cIdx) => (
                  <button
                    key={cIdx}
                    className="w-full bg-white hover:bg-yellow-100 text-yellow-900 font-medium flex items-center gap-2 py-2 px-4 mb-3 rounded-md shadow transition duration-200"
                  >
                    <FileText className="w-5 h-5 text-yellow-700" />
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcademicCalendar;
