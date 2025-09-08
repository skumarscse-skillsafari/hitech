import React, { useEffect, useState } from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryOption {
  label: string;
  key: string;
}

interface ReusableTableProps {
  data: Record<string, any>[];
  title?: string;
  description?: string;
  showCategory?: boolean;
  categoryOptions?: (string | CategoryOption)[];
  onCategoryChange?: (category: string) => void;
  selectedCategoryKey?: string;
}

const ReusableTable: React.FC<ReusableTableProps> = ({
  data,
  title,
  description,
  showCategory = false,
  categoryOptions = [],
  onCategoryChange,
  selectedCategoryKey = '',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryKey);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);

  // ✅ Year filter state
  const [selectedYear, setSelectedYear] = useState('All');

  const itemsPerPage = 10;

  // ✅ Extract unique years from data
  const years = Array.from(new Set(data.map((item) => item.year))).sort((a, b) => b.localeCompare(a));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => setCurrentPage(1), [searchTerm, selectedCategory, selectedYear]);

  useEffect(() => setSelectedCategory(selectedCategoryKey), [selectedCategoryKey]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    onCategoryChange?.(value);
  };

  const parseDate = (dateStr: string) => {
    if (!dateStr) return new Date(0);
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const handleSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key) {
      direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const isDateColumn = sortConfig.key.toLowerCase().includes('date');
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
        if (isDateColumn) {
          aValue = parseDate(aValue);
          bValue = parseDate(bValue);
        }
        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  // ✅ Apply year + search filter
  const filteredData = sortedData.filter((item) => {
    const matchesYear = selectedYear === 'All' || item.year === selectedYear;
    const matchesSearch = Object.values(item).some((val) =>
      val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesYear && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // ✅ Remove "year" column from table
  const columns = data.length > 0 ? Object.keys(data[0]).filter((c) => c.toLowerCase() !== 'year') : [];

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const getColumnWidth = (columnName: string) => {
    const col = columnName.toLowerCase();
    if (col.includes('sno')) return 'w-16';
    if (col.includes('date')) return 'w-24';
    if (col.includes('conference')) return isMobile ? 'min-w-[180px]' : isTablet ? 'min-w-[220px]' : 'min-w-[300px]';
    if (col.includes('indexed') || col.includes('journal'))
      return isMobile ? 'min-w-[120px]' : isTablet ? 'min-w-[150px]' : 'min-w-[200px]';
    if (col.includes('paper') || col.includes('title'))
      return isMobile ? 'min-w-[200px]' : isTablet ? 'min-w-[250px]' : 'min-w-[350px]';
    return 'min-w-[120px]';
  };

  return (
    <>
      {/* Title & Description */}
      {title && (
        <div className="px-4 sm:px-6 pt-6 text-center mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-800">{title}</h2>
          <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4"></div>
          {description && <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">{description}</p>}
        </div>
      )}

      {/* Table container */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 w-full mx-auto mt-6 max-w-screen-xl">
        <div className="px-4 sm:px-6 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
          {/* Category Tabs */}
          {showCategory && categoryOptions.length > 0 && (
            <div className="flex flex-wrap border-b border-gray-300 w-full sm:w-auto gap-2 sm:gap-4 overflow-x-auto pb-2 sm:overflow-visible">
              {categoryOptions
                .filter((option) => {
                  const key = typeof option === 'string' ? option : option.key;
                  return key.toLowerCase() !== 'notable';
                })
                .map((option) => {
                  const key = typeof option === 'string' ? option : option.key;
                  const label =
                    typeof option === 'string'
                      ? option.charAt(0).toUpperCase() + option.slice(1).replace(/([A-Z])/g, ' $1')
                      : option.label;
                  const isActive = selectedCategory === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleCategoryChange(key)}
                      className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-t-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-amber-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
            </div>
          )}

          {/* ✅ Year Dropdown */}
          {years.length > 0 && (
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300 text-sm sm:text-base focus:ring-2 focus:ring-amber-400 bg-white"
            >
              <option value="All">All Years</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          )}

          {/* Search */}
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
                <button onClick={() => { setSearchTerm(''); setShowSearch(false); }} className="ml-2 text-gray-400 hover:text-red-400 text-sm">
                  ✕
                </button>
              </div>
            ) : (
              <button onClick={() => setShowSearch(true)} className="p-2 rounded-full hover:bg-gray-100">
                <Search className="text-gray-500" size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Responsive Scrollable Table */}
        <div className="px-2 sm:px-4 md:px-6 pb-6 overflow-x-auto">
          <div className="inline-block min-w-full rounded-2xl border border-gray-200">
            <table className="min-w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white">
                  {columns.map((col, idx) => (
                    <th
                      key={idx}
                      className={`px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold uppercase break-words 
                        ${getColumnWidth(col)} ${isMobile ? 'text-xs' : ''} 
                        ${idx === 0 ? 'rounded-tl-2xl' : ''} ${idx === columns.length - 1 ? 'rounded-tr-2xl' : ''} 
                        ${col.toLowerCase().includes('date') ? 'cursor-pointer hover:bg-amber-600' : ''}`}
                      onClick={() => col.toLowerCase().includes('date') && handleSort(col)}
                    >
                      <div className="flex items-center justify-center">
                        {col.replace(/([A-Z])/g, ' $1')}
                        {col.toLowerCase().includes('date') && (
                          <span className="ml-1">
                            {sortConfig && sortConfig.key === col ? (
                              sortConfig.direction === 'ascending' ? <ArrowUp size={14} /> : <ArrowDown size={14} />
                            ) : (
                              <ArrowUp size={14} className="opacity-50" />
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="even:bg-gray-50 hover:bg-amber-50 transition duration-150">
                      {columns.map((col, colIndex) => (
                        <td key={colIndex} className="px-3 sm:px-4 py-2 sm:py-3 text-center align-top break-words text-[11px] sm:text-xs md:text-sm text-gray-600">
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
        <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 rounded-b-3xl">
          <div className="text-xs sm:text-sm text-gray-700">
            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
            <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredData.length)}</span> of{' '}
            <span className="font-medium">{filteredData.length}</span> results
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50">
              <ChevronLeft size={isMobile ? 14 : 16} />
            </button>
            {Array.from({ length: Math.min(totalPages, isMobile ? 3 : 5) }, (_, index) => {
              let pageNum;
              if (totalPages <= (isMobile ? 3 : 5)) {
                pageNum = index + 1;
              } else if (currentPage <= Math.ceil((isMobile ? 3 : 5) / 2)) {
                pageNum = index + 1;
              } else if (currentPage >= totalPages - Math.floor((isMobile ? 3 : 5) / 2)) {
                pageNum = totalPages - ((isMobile ? 3 : 5) - index - 1);
              } else {
                pageNum = currentPage - Math.floor((isMobile ? 3 : 5) / 2) + index;
              }
              return (
                <button
                  key={index}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-md ${
                    currentPage === pageNum
                      ? 'bg-amber-100 text-amber-700 border border-amber-400'
                      : 'text-gray-600 hover:bg-gray-100 border border-transparent'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            {totalPages > (isMobile ? 3 : 5) && currentPage < totalPages - Math.floor((isMobile ? 3 : 5) / 2) && (
              <>
                <span className="px-1 text-gray-500">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-md ${
                    currentPage === totalPages
                      ? 'bg-amber-100 text-amber-700 border border-amber-400'
                      : 'text-gray-600 hover:bg-gray-100 border border-transparent'
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}
            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50">
              <ChevronRight size={isMobile ? 14 : 16} />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center pt-6 sm:pt-8 pb-6 sm:pb-8">
        <Link to="/department/cse">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg text-sm sm:text-base">
            <span>Learn More About CSE</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default ReusableTable; 