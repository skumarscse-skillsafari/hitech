import React, { useEffect, useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryOption {
  label: string;
  key: string;
}

interface ReusableTableProps {
  data: Record<string, any>[];
  title?: string;
  showCategory?: boolean;
  categoryOptions?: (string | CategoryOption)[];
  onCategoryChange?: (category: string) => void;
  selectedCategoryKey?: string;
}

const ReusableTable: React.FC<ReusableTableProps> = ({
  data,
  title,
  showCategory = false,
  categoryOptions = [],
  onCategoryChange,
  selectedCategoryKey = '',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryKey);

  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    setSelectedCategory(selectedCategoryKey);
  }, [selectedCategoryKey]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    onCategoryChange?.(value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 max-w-7xl mx-auto mt-6">
      {/* Title */}
      <div className="px-6 pt-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      </div>

      {/* Tabs + Search */}
      <div className="px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
        {/* Category Tabs */}
        {showCategory && categoryOptions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((option) => {
              const key = typeof option === 'string' ? option : option.key;
              const label =
                typeof option === 'string'
                  ? option.charAt(0).toUpperCase() + option.slice(1).replace(/([A-Z])/g, ' $1')
                  : option.label;

              return (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === key
                      ? 'bg-amber-500 text-white shadow'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

        {/* Search Bar (always right aligned) */}
        <div className="flex justify-end sm:ml-auto w-full sm:w-auto">
          {showSearch ? (
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-1 w-full sm:w-64">
              <Search className="text-gray-500 mr-2" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:outline-none w-full text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={() => {
                  setSearchTerm('');
                  setShowSearch(false);
                }}
                className="ml-2 text-gray-400 hover:text-red-400 text-sm"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Search className="text-gray-500" size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="px-4 sm:px-6 pb-6 overflow-x-auto">
        <div className="overflow-hidden rounded-2xl mt-0 border border-gray-200">
          <table className="w-full table-auto border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className={`px-4 py-3 text-center font-semibold uppercase whitespace-normal break-words ${
                      col.toLowerCase().includes('sno')
                        ? 'w-16'
                        : col.toLowerCase().includes('batch')
                        ? 'min-w-[8rem]'
                        : ''
                    }`}
                  >
                    {col.replace(/([A-Z])/g, ' $1')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="even:bg-gray-50 hover:bg-amber-50 transition duration-150"
                  >
                    {columns.map((col, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-4 py-3 text-center break-words whitespace-normal align-top"
                      >
                        {Array.isArray(row[col])
                          ? row[col].join(', ')
                          : typeof row[col] === 'object' && row[col] !== null
                          ? JSON.stringify(row[col])
                          : row[col]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="py-6 text-center text-gray-500">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-gray-200 rounded-b-3xl">
        <div className="text-sm text-gray-700">
          Showing{' '}
          <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
          <span className="font-medium">
            {Math.min(currentPage * itemsPerPage, filteredData.length)}
          </span>{' '}
          of <span className="font-medium">{filteredData.length}</span> results
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 text-sm font-medium rounded-md ${
                currentPage === index + 1
                  ? 'bg-amber-100 text-amber-700 border border-amber-400'
                  : 'text-gray-600 hover:bg-gray-100 border border-transparent'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReusableTable;
