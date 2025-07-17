import React from 'react';

const CustomPage: React.FC = () => {
  const headers = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'];
  const data = Array.from({ length: 10 }, (_, rowIndex) => (
    <tr
      key={rowIndex}
      className={rowIndex % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}
    >
      {headers.map((header, colIndex) => (
        <td key={colIndex} className="px-4 py-3 border border-gray-600 text-white text-center">
          Row {rowIndex + 1} - Col {colIndex + 1}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 py-6 shadow-md">
        <h1 className="text-3xl font-semibold text-center">Page Title</h1>
      </header>

      {/* Table Section */}
      <main className="flex-1 p-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-700">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border border-gray-600 text-center text-lg"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center shadow-inner">
        <p className="text-sm text-gray-300">© 2025 Your Organization</p>
      </footer>
    </div>
  );
};

export default CustomPage;
