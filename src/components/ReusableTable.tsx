import React, { useEffect, useMemo, useState } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';

interface ReusableTableProps {
  data: Record<string, any>[];
  title?: string;
}

const ReusableTable: React.FC<ReusableTableProps> = ({ data, title }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const rowsPerPage = 10;
  const isProjectTable = title?.toLowerCase().includes('notable');

  const categories = useMemo(() => {
    if (!isProjectTable) return [];
    const uniqueCategories = Array.from(
      new Set(data.map((item) => item.category || 'Uncategorized'))
    );
    return ['All', ...uniqueCategories];
  }, [data, isProjectTable]);

  const filteredData = useMemo(() => {
    let filtered = data;

    if (isProjectTable && categoryFilter !== 'All') {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    if (sortColumn) {
      filtered = [...filtered].sort((a, b) => {
        const valA = a[sortColumn];
        const valB = b[sortColumn];
        if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [data, searchQuery, sortColumn, sortOrder, categoryFilter, isProjectTable]);

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className="w-32 h-1 bg-amber-500 rounded-full mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Detailed breakdown of {title.toLowerCase()} information.
            </p>
          </div>
        )}

        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          {/* Search Toggle & Input */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 bg-amber-500 text-white rounded-full shadow hover:bg-amber-600"
              aria-label="Toggle Search"
            >
              <Search size={20} />
            </button>

            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="border rounded-xl px-4 py-2 w-64 shadow"
              />
            )}
          </div>

          {/* Category Filter for Notable Projects */}
          {isProjectTable && (
            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="border rounded-xl px-4 py-2 shadow"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          )}
        </div>

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
                      <div
                        className="flex items-center justify-center gap-1 cursor-pointer"
                        onClick={() => handleSort(col)}
                      >
                        {col.replace(/([A-Z])/g, ' $1').trim()}
                        {sortColumn === col ? (
                          sortOrder === 'asc' ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )
                        ) : (
                          <ChevronDown size={16} className="opacity-50" />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((row, rowIndex) => (
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 py-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-amber-500 text-white rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-amber-500 text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReusableTable;
