import React from 'react';
import { CalendarDays, Clock, School, ArrowRight } from 'lucide-react';
import academicData from '../data/academicCalendarData.json';

interface AcademicCard {
  title: string;
  startDate: string;
  endDate: string;
  workingDays: number;
  nextSemester: string;
  pdfUrl: string;
}

const AcademicCalendar: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-black-50 py-10 px-4 md:px-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-black-800 mb-12">
        Academic Calendar
      </h1>

      <div className="flex flex-col gap-8">
        {(academicData as AcademicCard[]).map((item, index) => (
          <a
            key={index}
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-yellow-100 border border-yellow-300 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 p-6 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-yellow-900">{item.title}</h2>
              <School className="text-yellow-700 w-6 h-6" />
            </div>

            <div className="space-y-3 text-yellow-800">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-yellow-700" />
                <span className="font-medium">Start Date:</span>
                <span>{item.startDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-yellow-700" />
                <span className="font-medium">End Date:</span>
                <span>{item.endDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-700" />
                <span className="font-medium">Working Days:</span>
                <span>{item.workingDays}</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-yellow-700" />
                <span className="font-medium">Next Semester:</span>
                <span>{item.nextSemester}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AcademicCalendar;
