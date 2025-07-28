import React from 'react';

interface ReusableTableProps {
  data: Record<string, any>[];
  title?: string;
}

const ReusableTable: React.FC<ReusableTableProps> = ({ data, title }) => {
  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-600 mt-4">
        No data available for this section.
      </p>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
            <div className="w-32 h-1 bg-amber-500 rounded-full mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detailed breakdown of {title.toLowerCase()} information.
            </p>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
              <thead className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400">
                <tr>
                  {columns.map((col, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-center text-base md:text-xl font-bold text-white uppercase tracking-wide whitespace-nowrap"
                    >
                      {col.replace(/([A-Z])/g, ' $1').trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-amber-50 transition-colors duration-150">
                    {columns.map((col, colIndex) => (
                      <td key={colIndex} className="px-6 py-4 text-center whitespace-pre-line text-gray-700">
                        {typeof row[col] === 'string' ? row[col] : JSON.stringify(row[col])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Optional footer or pagination could go here if needed */}
        </div>
      </div>
    </section>
  );
};

export default ReusableTable;
