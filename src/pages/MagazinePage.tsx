import React, { useState } from 'react';
import { FileText, X } from 'lucide-react';

const magazineLinks = [
  { title: "Magazine 1", url: "/pdf/magazine(2324).pdf" },
  { title: "Magazine 2", url: "/pdf/magazine(2223).pdf" },
  { title: "Magazine 3", url: "/pdf/maganize(2122).pdf" },
];

const MagazinePage = () => {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-center px-4 pb-10">
      <h1 className="text-4xl font-bold text-yellow-900 pt-10">Magazines</h1>
      <p className="text-md text-gray-600 mt-2 mb-10 px-4 max-w-2xl mx-auto">
        Discover our magazines showcasing creativity, insights, and the vibrant
        culture of our institution.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {magazineLinks.map((item, idx) => (
          <button
            key={idx}
            className="bg-yellow-500 rounded-2xl shadow-xl p-8 w-72 text-center hover:scale-105 transition-transform text-white"
            onClick={() => setSelectedPDF(item.url)}
          >
            <FileText className="w-10 h-10 mx-auto mb-4" />
            <span className="text-lg font-semibold">{item.title}</span>
          </button>
        ))}
      </div>

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

export default MagazinePage;