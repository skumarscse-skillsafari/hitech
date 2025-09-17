import React, { useState } from 'react';
import { FileText, X } from 'lucide-react';

const years = [
  { year: '2025–26' },
  { year: '2024–25' },
  { year: '2023–24' },
  { year: '2022–23' },
];

const semesters = [
  { title: 'ODD Semester' },
  { title: 'EVEN Semester' },
];

// Organized PDF URLs for all academic calendars
const calendarPDFs = {
  '2025–26': {
    'ODD Semester': {
      'I Year Academic Calendar': '/pdf/academic-calendars/2025-26/odd/i-year.pdf',
      'II Year Academic Calendar': '/pdf/academic-calendars/2025-26/odd/ii-year.pdf',
      'III & IV Year Academic Calendar': '/pdf/academic-calendars/2025-26/odd/iii-iv-year.pdf',
    },
    'EVEN Semester': {
      'I Year Academic Calendar': '/pdf/academic-calendars/2025-26/even/i-year.pdf',
      'II Year Academic Calendar': '/pdf/academic-calendars/2025-26/even/ii-year.pdf',
      'III & IV Year Academic Calendar': '/pdf/academic-calendars/2025-26/even/iii-iv-year.pdf',
    },
  },
  '2024–25': {
    'ODD Semester': {
      'I Year Academic Calendar': '/pdf/academic-calendars/2024-25/odd/i-year.pdf',
      'II Year Academic Calendar': '/pdf/academic-calendars/2024-25/odd/ii-year.pdf',
      'III & IV Year Academic Calendar': '/pdf/academic-calendars/2024-25/odd/iii-iv-year.pdf',
    },
    'EVEN Semester': {
      'I Year Academic Calendar': '/pdf/academic-calendars/2024-25/even/i-year.pdf',
      'II Year Academic Calendar': '/pdf/academic-calendars/2024-25/even/ii-year.pdf',
      'III & IV Year Academic Calendar': '/pdf/academic-calendars/2024-25/even/iii-iv-year.pdf',
    },
  },
  '2023–24': {
    'ODD Semester': {
      'I Year Academic Calendar': '/pdf/academic-calendars/2023-24/odd/i-year.pdf',
      'II Year Academic Calendar': '/pdf/academic-calendars/2023-24/odd/ii-year.pdf',
      'III & IV Year Academic Calendar': '/pdf/academic-calendars/2023-24/odd/iii-iv-year.pdf',
    },
    'EVEN Semester': {
      'I Year Academic Calendar': '/pdf/academic-calendars/2023-24/even/i-year.pdf',
      'II Year Academic Calendar': '/pdf/academic-calendars/2023-24/even/ii-year.pdf',
      'III & IV Year Academic Calendar': '/pdf/academic-calendars/2023-24/even/iii-iv-year.pdf',
    },
  },
  '2022–23': {
    'ODD Semester': {
      'I Year Academic Calendar': '/pdf/academic-calendars/2022-23/odd/i-year.pdf',
      'II Year Academic Calendar': '/pdf/academic-calendars/2022-23/odd/ii-year.pdf',
      'III & IV Year Academic Calendar': '/pdf/academic-calendars/2022-23/odd/iii-iv-year.pdf',
    },
    'EVEN Semester': {
      'I Year Academic Calendar': '/pdf/academic-calendars/2022-23/even/i-year.pdf',
      'II Year Academic Calendar': '/pdf/academic-calendars/2022-23/even/ii-year.pdf',
      'III & IV Year Academic Calendar': '/pdf/academic-calendars/2022-23/even/iii-iv-year.pdf',
    },
  },
};

const yearWiseData = years.map(({ year }) => ({
  year,
  semesters: semesters.map(({ title }) => ({
    title,
    calendars: [
      { label: 'I Year Academic Calendar' },
      { label: 'II Year Academic Calendar' },
      { label: 'III & IV Year Academic Calendar' },
    ],
  })),
}));

const AcademicCalendar = () => {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-center px-4 pb-10">
      <h1 className="text-4xl font-bold text-black pt-10">Academic Calendar</h1>
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
                    onClick={() => setSelectedPDF(calendarPDFs[data.year][sem.title][item.label])}
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
      
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-12 rounded-2xl text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Educational Legacy</h2>
        <p className="text-xl mb-8 opacity-90">
          Be part of an institution that has been shaping futures for over three decades
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Programs
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-6xl h-[90vh] relative">
            <button
              className="absolute top-4 right-4 z-10 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              onClick={() => setSelectedPDF(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="h-full w-full">
              <iframe 
                src={selectedPDF} 
                className="w-full h-full rounded-xl" 
                frameBorder="0"
                title="PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicCalendar;