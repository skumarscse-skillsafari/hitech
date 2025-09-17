import React from 'react';
import { useParams } from 'react-router-dom';

const PdfViewer: React.FC = () => {
  const { name } = useParams();
  const filePath = `/pdf/${name}.pdf`;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-2xl font-semibold text-center mb-6">
        {name} Preview
      </h1>
      <div className="w-full max-w-5xl mx-auto aspect-video border shadow-md rounded-md overflow-hidden">
        <iframe
          src={filePath}
          title={`${name} PDF`}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PdfViewer;
