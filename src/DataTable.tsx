import React from 'react';
import { ChevronLeft,ChevronRight } from 'lucide-react';

const DataTable: React.FC = () => {
  // Sample data - replace with your actual data
  const tableData = [
    { id: 1, name: 'Ranking Survey', year: '2025', rank: '48', category: 'Private Engineering Colleges', source: 'Data Quest' },
    { id: 2, name: 'T-Schools Survey', year: '2025', rank: '68', category: 'Private Engineering Colleges', source: 'Data Quest' },
    { id: 3, name: 'HE Ranking', year: '2024', rank: '71', category: 'International Universities', source: 'Higher Education' },
    { id: 4, name: 'Engineering Survey', year: '2025', rank: '139', category: 'All India Engineering', source: 'The Week' },
    { id: 5, name: 'Emerging Colleges', year: '2025', rank: '17', category: 'Emerging Engineering', source: 'The Week' },
    { id: 6, name: 'Top Colleges', year: '2025', rank: '161', category: 'Engineering Colleges', source: 'India Today' },
    { id: 7, name: 'Emerging Pvt Colleges', year: '2025', rank: '40', category: 'Private Engineering', source: 'India Today' },
    { id: 8, name: 'Super Excellence', year: '2025', rank: '2', category: 'Emerging Engineering', source: 'CSR Review' },
    { id: 9, name: 'Tamil Nadu Ranking', year: '2025', rank: '6', category: 'State Engineering', source: 'CSR Review' },
    { id: 10, name: 'Top 175 Institutes', year: '2025', rank: '135', category: 'Engineering Institutes', source: 'Times Ranking' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Rankings Overview</h2>
          <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Detailed breakdown of our institution's rankings across various surveys and categories.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400">
                <tr>
                    <th scope="col" className="px-6 py-4 text-center text-2xl font-bold text-white uppercase tracking-wider ">
                    S.No.
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-2xl font-bold text-white uppercase tracking-wider">
                    Survey Name
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-2xl font-bold text-white uppercase tracking-wider">
                    Year
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-2xl font-bold text-white uppercase tracking-wider">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-2xl font-bold text-white uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-2xl font-bold text-white uppercase tracking-wider">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-amber-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-1000 text-center">{row.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-1000 text-center">{row.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700 text-center">{row.year}</div>
                    </td>
                    <td className="px-6 py-4 text-center align-middle">
                      <span className="px-3 py-1 inline-flex text-xs  leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                        {row.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700 text-center">{row.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 text-center">{row.source}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Optional pagination */}
          <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                  <span className="font-medium">10</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    aria-current="page"
                    className="z-10 bg-amber-50 border-amber-500 text-amber-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1
                  </button>
                  <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </button>
                  <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    3
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    8
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataTable;