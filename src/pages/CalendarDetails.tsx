import React from 'react';
import { useParams } from 'react-router-dom';

const CalendarDetails = () => {
  const { semester } = useParams();

  const pdfUrls: Record<string, string> = {
    even: 'https://www.hit.edu.in/wp-content/uploads/2024/07/EVEN-SEM-ACADEMIC-CALENDAR-2024-2025.pdf',
    odd: 'https://www.hit.edu.in/wp-content/uploads/2024/07/ODD-SEM-ACADEMIC-CALENDAR-2025-2026.pdf',
  };

  const title = semester === 'even' ? 'Even Semester' : 'Odd Semester';
  const url = pdfUrls[semester || 'even'];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-10 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-yellow-600">{title} Calendar</h1>

      <iframe
        src={url}
        title={`${title} PDF`}
        className="w-full max-w-5xl h-[80vh] border-2 border-yellow-500 rounded-lg shadow-md"
      />
    </div>
  );
};

export default CalendarDetails;
