import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  DollarSign,
  Clock,
  Lightbulb,
  FileText,
  Award,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Building2,
  Calendar,
  Target,
  ChevronLeft,
  ChevronRight as ExpandIcon,
  ChevronLeft as CollapseIcon,
} from "lucide-react";
import PageLayout from "../components/layout/PageLayout";

// Icon mapping
const iconMap = {
  DollarSign,
  Clock,
  Lightbulb,
  FileText,
  Award,
  Briefcase,
};

// Enhanced Card Component
function ResearchCard({ item }: { item: any }) {
  const fieldIconMap: Record<string, any> = {
    funding: DollarSign,
    fundingAgency: Building2,
    funding_agency: Building2,
    status: Clock,
    duration: Calendar,
    year: Calendar,
    years: Calendar,
    client: Building2,
    amount: DollarSign,
    type: FileText,
    journal: FileText,
    conference: FileText,
    impactFactor: Target,
    location: Building2,
    patentNumber: Award,
    filingDate: Calendar,
    impact: Target,
  };

  const excludeFields = [
    "title",
    "description",
    "authors",
    "author",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-yellow-200 group">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-yellow-500 leading-tight mb-3 group-hover:text-yellow-600 transition-colors">
          {item.title}
        </h3>

        <div className="space-y-2 text-gray-600">
          {item.authors
            ? item.authors.map((author: string, idx: number) => (
                <p key={idx} className="text-sm font-medium">
                  {author}
                </p>
              ))
            : item.author && (
                <p className="text-sm font-medium">{item.author}</p>
              )}
        </div>
      </div>

      {item.description && (
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {item.description}
        </p>
      )}

      <div className="space-y-3">
        {Object.entries(item).map(([key, value]) => {
          if (excludeFields.includes(key) || !value) return null;

          const Icon = fieldIconMap[key] || FileText;
          const displayKey = key
            .replace(/_/g, " ")
            .replace(/([A-Z])/g, " $1")
            .trim();
          const capitalizedKey =
            displayKey.charAt(0).toUpperCase() + displayKey.slice(1);

          return (
            <div key={key} className="flex items-start gap-2">
              <Icon className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-sm font-semibold text-yellow-600">
                  {capitalizedKey}:
                </span>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed break-words">
                  {Array.isArray(value) ? value.join(", ") : String(value)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-all duration-200 group-hover:shadow-md">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

// Seed Money Table Component with Year Filter and Pagination
function SeedMoneyTable({ items }: { items: any[] }) {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const itemsPerPage = 10;

  // Extract unique years and sort in descending order
  const years = Array.from(new Set(items.map((item) => item.year)))
    .sort((a, b) => {
      // Extract first year from range (e.g., "2023-24" -> 2023)
      const yearA = parseInt(a.split('-')[0]);
      const yearB = parseInt(b.split('-')[0]);
      return yearB - yearA; // Descending order (latest first)
    });

  // Reset to page 1 when year filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  // Filter items by selected year
  const filteredItems = selectedYear === 'All' 
    ? items 
    : items.filter((item) => item.year === selectedYear);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  // Group paginated items by year for rendering
  const itemsByYear = paginatedItems.reduce((acc: any, item: any) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  // Sort years in descending order for display
  const sortedYears = Object.keys(itemsByYear).sort((a, b) => {
    const yearA = parseInt(a.split('-')[0]);
    const yearB = parseInt(b.split('-')[0]);
    return yearB - yearA;
  });

  // Calculate total amount for each year
  const getTotalAmount = (yearItems: any[]) => {
    return yearItems.reduce((sum, item) => sum + parseFloat(item.amount.replace(/,/g, '')), 0);
  };

  // Columns configuration
  const allColumns = [
    { key: 'serialNo', label: 'S.N.' },
    { key: 'facultyName', label: 'FACULTY NAME' },
    { key: 'title', label: 'PROJECT TITLE / SUPPORTOR ACTIVITY' },
    { key: 'duration', label: 'DURATION' },
    { key: 'amount', label: 'AMOUNT (LACS)' },
    { key: 'amountUtilized', label: 'AMOUNT UTILIZED IN (LACS)' },
    { key: 'outcomes', label: 'OUTCOMES OF THE PROJECT' },
  ];
  const compactColumns = allColumns.slice(0, 4);
  const columns = expanded ? allColumns : compactColumns;

  return (
    <div className="space-y-4">
      {/* Year Filter Dropdown */}
      {years.length > 1 && (
        <div className="flex justify-end mb-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm sm:text-base focus:ring-2 focus:ring-amber-400 bg-white shadow-sm hover:border-amber-400 transition-colors"
          >
            <option value="All">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full rounded-2xl border border-gray-200 shadow-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white">
                {columns.map((col, idx) => (
                  <th
                    key={col.key}
                    className={`relative px-3 sm:px-4 py-3 text-center font-semibold text-xs sm:text-sm ${
                      idx < columns.length - 1 ? 'border-r border-amber-300' : ''
                    } ${
                      idx === 0 ? 'rounded-tl-2xl' : ''
                    } ${
                      idx === columns.length - 1 ? 'rounded-tr-2xl pr-12' : ''
                    }`}
                  >
                    {col.label}
                    {/* Expand/Collapse button */}
                    {idx === columns.length - 1 && (
                      <div className="absolute -right-[-1.5px] top-1/2 -translate-y-1/2">
                        <button
                          onClick={() => setExpanded(!expanded)}
                          className={`p-1.5 rounded-full shadow-lg transition-colors ${
                            expanded
                              ? 'bg-orange-500 text-white'
                              : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white'
                          }`}
                        >
                          {expanded ? (
                            <CollapseIcon className="w-3.5 h-3.5" />
                          ) : (
                            <ExpandIcon className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedYears.length > 0 ? (
                sortedYears.map((year) => (
                  <Fragment key={year}>
                    <tr className="bg-gradient-to-r from-amber-50 to-yellow-50">
                      <td colSpan={columns.length} className="px-4 py-3 text-center font-bold text-gray-800 text-sm sm:text-base border-b-2 border-amber-200">
                        Academic Year {year}
                      </td>
                    </tr>
                    {itemsByYear[year].map((item: any, index: number) => (
                      <tr key={`${year}-${index}`} className="even:bg-gray-50 hover:bg-amber-50 transition duration-150 border-b border-gray-100">
                        {columns.map((col, colIdx) => (
                          <td
                            key={col.key}
                            className={`px-3 sm:px-4 py-3 ${col.key === 'title' || col.key === 'outcomes' ? 'text-left' : 'text-center'} text-gray-700 text-xs sm:text-sm ${
                              colIdx < columns.length - 1 ? 'border-r border-gray-100' : ''
                            } ${
                              col.key === 'outcomes' ? 'leading-relaxed' : ''
                            }`}
                          >
                            {item[col.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
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
      {totalPages > 1 && (
        <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 rounded-2xl border border-gray-200">
          <div className="text-xs sm:text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
            <span className="font-medium">{Math.min(endIndex, filteredItems.length)}</span> of{' '}
            <span className="font-medium">{filteredItems.length}</span> results
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = index + 1;
              } else if (currentPage <= 3) {
                pageNum = index + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - (4 - index);
              } else {
                pageNum = currentPage - 2 + index;
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
            {totalPages > 5 && currentPage < totalPages - 2 && (
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
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Patents Table Component with Year Filter and Pagination
function PatentsTable({ items }: { items: any[] }) {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const itemsPerPage = 10;

  // Extract unique years and sort in descending order
  const years = Array.from(new Set(items.map((item) => String(item.year))))
    .sort((a, b) => parseInt(b) - parseInt(a));

  // Reset to page 1 when year filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  // Filter items by selected year
  const filteredItems = selectedYear === 'All' 
    ? items 
    : items.filter((item) => String(item.year) === selectedYear);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  // Group paginated items by year for rendering
  const itemsByYear = paginatedItems.reduce((acc: any, item: any) => {
    const yearStr = String(item.year);
    if (!acc[yearStr]) {
      acc[yearStr] = [];
    }
    acc[yearStr].push(item);
    return acc;
  }, {});

  // Sort years in descending order for display
  const sortedYears = Object.keys(itemsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Columns configuration
  const allColumns = [
    { key: 'serialNo', label: 'S.N.' },
    { key: 'facultyName', label: 'FACULTY NAME' },
    { key: 'title', label: 'TITLE OF THE PATENT' },
    { key: 'applicationNo', label: 'APPLICATION NO.' },
    { key: 'dateOfFiling', label: 'DATE OF FILING' },
    { key: 'status', label: 'STATUS' },
  ];
  const compactColumns = allColumns.slice(0, 4);
  const columns = expanded ? allColumns : compactColumns;

  return (
    <div className="space-y-4">
      {/* Year Filter Dropdown */}
      {years.length > 1 && (
        <div className="flex justify-end mb-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm sm:text-base focus:ring-2 focus:ring-amber-400 bg-white shadow-sm hover:border-amber-400 transition-colors"
          >
            <option value="All">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full rounded-2xl border border-gray-200 shadow-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white">
                {columns.map((col, idx) => (
                  <th
                    key={col.key}
                    className={`relative px-3 sm:px-4 py-3 text-center font-semibold text-xs sm:text-sm ${
                      idx < columns.length - 1 ? 'border-r border-amber-300' : ''
                    } ${
                      idx === 0 ? 'rounded-tl-2xl' : ''
                    } ${
                      idx === columns.length - 1 ? 'rounded-tr-2xl pr-12' : ''
                    }`}
                  >
                    {col.label}
                    {/* Expand/Collapse button */}
                    {idx === columns.length - 1 && (
                      <div className="absolute -right-[-1.5px] top-1/2 -translate-y-1/2">
                        <button
                          onClick={() => setExpanded(!expanded)}
                          className={`p-1.5 rounded-full shadow-lg transition-colors ${
                            expanded
                              ? 'bg-orange-500 text-white'
                              : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white'
                          }`}
                        >
                          {expanded ? (
                            <CollapseIcon className="w-3.5 h-3.5" />
                          ) : (
                            <ExpandIcon className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedYears.length > 0 ? (
                sortedYears.map((year) => (
                  <Fragment key={year}>
                    <tr className="bg-gradient-to-r from-amber-50 to-yellow-50">
                      <td colSpan={columns.length} className="px-4 py-3 text-center font-bold text-gray-800 text-sm sm:text-base border-b-2 border-amber-200">
                        Academic Year {year}
                      </td>
                    </tr>
                    {itemsByYear[year].map((item: any, index: number) => (
                      <tr key={`${year}-${index}`} className="even:bg-gray-50 hover:bg-amber-50 transition duration-150 border-b border-gray-100">
                        {columns.map((col, colIdx) => (
                          <td
                            key={col.key}
                            className={`px-3 sm:px-4 py-3 ${col.key === 'title' ? 'text-left' : 'text-center'} text-gray-700 text-xs sm:text-sm ${
                              colIdx < columns.length - 1 ? 'border-r border-gray-100' : ''
                            } ${
                              col.key === 'title' ? 'leading-relaxed font-medium' : ''
                            }`}
                          >
                            {col.key === 'status' ? (
                              <span className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
                                item[col.key].toLowerCase().includes('granted') 
                                  ? 'bg-green-100 text-green-700 border border-green-200' 
                                  : 'bg-blue-100 text-blue-700 border border-blue-200'
                              }`}>
                                {item[col.key]}
                              </span>
                            ) : col.key === 'co_pi_names' ? (
                              Array.isArray(item[col.key]) ? item[col.key].join(', ') : item[col.key]
                            ) : (
                              item[col.key]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
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
      {totalPages > 1 && (
        <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 rounded-2xl border border-gray-200">
          <div className="text-xs sm:text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
            <span className="font-medium">{Math.min(endIndex, filteredItems.length)}</span> of{' '}
            <span className="font-medium">{filteredItems.length}</span> results
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = index + 1;
              } else if (currentPage <= 3) {
                pageNum = index + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - (4 - index);
              } else {
                pageNum = currentPage - 2 + index;
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
            {totalPages > 5 && currentPage < totalPages - 2 && (
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
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Consultancy Table Component with Year Filter and Pagination
function ConsultancyTable({ items }: { items: any[] }) {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const itemsPerPage = 10;

  // Extract unique years and sort in descending order
  const years = Array.from(new Set(items.map((item) => String(item.year))))
    .sort((a, b) => parseInt(b) - parseInt(a));

  // Reset to page 1 when year filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  // Filter items by selected year
  const filteredItems = selectedYear === 'All' 
    ? items 
    : items.filter((item) => String(item.year) === selectedYear);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  // Group paginated items by year for rendering
  const itemsByYear = paginatedItems.reduce((acc: any, item: any) => {
    const yearStr = String(item.year);
    if (!acc[yearStr]) {
      acc[yearStr] = [];
    }
    acc[yearStr].push(item);
    return acc;
  }, {});

  // Sort years in descending order for display
  const sortedYears = Object.keys(itemsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Columns configuration
  const allColumns = [
    { key: 'serialNo', label: 'S.N.' },
    { key: 'pi_name', label: 'PI NAME' },
    { key: 'co_pi_names', label: 'CO-PI NAMES' },
    { key: 'project_title', label: 'PROJECT TITLE' },
    { key: 'funding_agency', label: 'FUNDING AGENCY' },
    { key: 'duration', label: 'DURATION' },
    { key: 'amount_rs', label: 'AMOUNT (RS)' },
  ];
  const compactColumns = allColumns.slice(0, 4);
  const columns = expanded ? allColumns : compactColumns;

  return (
    <div className="space-y-4">
      {/* Year Filter Dropdown */}
      {years.length > 1 && (
        <div className="flex justify-end mb-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm sm:text-base focus:ring-2 focus:ring-amber-400 bg-white shadow-sm hover:border-amber-400 transition-colors"
          >
            <option value="All">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full rounded-2xl border border-gray-200 shadow-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white">
                {columns.map((col, idx) => (
                  <th
                    key={col.key}
                    className={`relative px-3 sm:px-4 py-3 text-center font-semibold text-xs sm:text-sm ${
                      idx < columns.length - 1 ? 'border-r border-amber-300' : ''
                    } ${
                      idx === 0 ? 'rounded-tl-2xl' : ''
                    } ${
                      idx === columns.length - 1 ? 'rounded-tr-2xl pr-12' : ''
                    }`}
                  >
                    {col.label}
                    {/* Expand/Collapse button */}
                    {idx === columns.length - 1 && (
                      <div className="absolute -right-[-1.5px] top-1/2 -translate-y-1/2">
                        <button
                          onClick={() => setExpanded(!expanded)}
                          className={`p-1.5 rounded-full shadow-lg transition-colors ${
                            expanded
                              ? 'bg-orange-500 text-white'
                              : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white'
                          }`}
                        >
                          {expanded ? (
                            <CollapseIcon className="w-3.5 h-3.5" />
                          ) : (
                            <ExpandIcon className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedYears.length > 0 ? (
                sortedYears.map((year) => (
                  <Fragment key={year}>
                    <tr className="bg-gradient-to-r from-amber-50 to-yellow-50">
                      <td colSpan={columns.length} className="px-4 py-3 text-center font-bold text-gray-800 text-sm sm:text-base border-b-2 border-amber-200">
                        Academic Year {year}
                      </td>
                    </tr>
                    {itemsByYear[year].map((item: any, index: number) => (
                      <tr key={`${year}-${index}`} className="even:bg-gray-50 hover:bg-amber-50 transition duration-150 border-b border-gray-100">
                        {columns.map((col, colIdx) => (
                          <td
                            key={col.key}
                            className={`px-3 sm:px-4 py-3 ${col.key === 'project_title' ? 'text-left' : 'text-center'} text-gray-700 text-xs sm:text-sm ${
                              colIdx < columns.length - 1 ? 'border-r border-gray-100' : ''
                            } ${
                              col.key === 'project_title' ? 'leading-relaxed font-medium' : ''
                            }`}
                          >
                            {col.key === 'co_pi_names' ? (
                              Array.isArray(item[col.key]) ? item[col.key].join(', ') : item[col.key]
                            ) : (
                              item[col.key]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
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
      {totalPages > 1 && (
        <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 rounded-2xl border border-gray-200">
          <div className="text-xs sm:text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
            <span className="font-medium">{Math.min(endIndex, filteredItems.length)}</span> of{' '}
            <span className="font-medium">{filteredItems.length}</span> results
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = index + 1;
              } else if (currentPage <= 3) {
                pageNum = index + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - (4 - index);
              } else {
                pageNum = currentPage - 2 + index;
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
            {totalPages > 5 && currentPage < totalPages - 2 && (
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
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Conference Table Component with Year Filter and Pagination
function ConferenceTable({ items }: { items: any[] }) {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const itemsPerPage = 10;

  // Extract unique years and sort in descending order
  const years = Array.from(new Set(items.map((item) => String(item.year))))
    .sort((a, b) => parseInt(b) - parseInt(a));

  // Reset to page 1 when year filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  // Filter items by selected year
  const filteredItems = selectedYear === 'All' 
    ? items 
    : items.filter((item) => String(item.year) === selectedYear);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  // Group paginated items by year for rendering
  const itemsByYear = paginatedItems.reduce((acc: any, item: any) => {
    const yearStr = String(item.year);
    if (!acc[yearStr]) {
      acc[yearStr] = [];
    }
    acc[yearStr].push(item);
    return acc;
  }, {});

  // Sort years in descending order for display
  const sortedYears = Object.keys(itemsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Columns configuration
  const allColumns = [
    { key: 'serialNo', label: 'S.N.' },
    { key: 'authors', label: 'AUTHORS' },
    { key: 'title', label: 'TITLE' },
    { key: 'conference', label: 'CONFERENCE' },
    { key: 'year', label: 'YEAR' },
    { key: 'indexedIn', label: 'INDEXED IN' },
  ];
  const compactColumns = allColumns.slice(0, 4);
  const columns = expanded ? allColumns : compactColumns;

  return (
    <div className="space-y-4">
      {/* Year Filter Dropdown */}
      {years.length > 1 && (
        <div className="flex justify-end mb-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm sm:text-base focus:ring-2 focus:ring-amber-400 bg-white shadow-sm hover:border-amber-400 transition-colors"
          >
            <option value="All">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full rounded-2xl border border-gray-200 shadow-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white">
                {columns.map((col, idx) => (
                  <th
                    key={col.key}
                    className={`relative px-3 sm:px-4 py-3 text-center font-semibold text-xs sm:text-sm ${
                      idx < columns.length - 1 ? 'border-r border-amber-300' : ''
                    } ${
                      idx === 0 ? 'rounded-tl-2xl' : ''
                    } ${
                      idx === columns.length - 1 ? 'rounded-tr-2xl pr-12' : ''
                    }`}
                  >
                    {col.label}
                    {/* Expand/Collapse button */}
                    {idx === columns.length - 1 && (
                      <div className="absolute -right-[-1.5px] top-1/2 -translate-y-1/2">
                        <button
                          onClick={() => setExpanded(!expanded)}
                          className={`p-1.5 rounded-full shadow-lg transition-colors ${
                            expanded
                              ? 'bg-orange-500 text-white'
                              : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white'
                          }`}
                        >
                          {expanded ? (
                            <CollapseIcon className="w-3.5 h-3.5" />
                          ) : (
                            <ExpandIcon className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedYears.length > 0 ? (
                sortedYears.map((year) => (
                  <Fragment key={year}>
                    <tr className="bg-gradient-to-r from-amber-50 to-yellow-50">
                      <td colSpan={columns.length} className="px-4 py-3 text-center font-bold text-gray-800 text-sm sm:text-base border-b-2 border-amber-200">
                        Academic Year {year}
                      </td>
                    </tr>
                    {itemsByYear[year].map((item: any, index: number) => (
                      <tr key={`${year}-${index}`} className="even:bg-gray-50 hover:bg-amber-50 transition duration-150 border-b border-gray-100">
                        {columns.map((col, colIdx) => (
                          <td
                            key={col.key}
                            className={`px-3 sm:px-4 py-3 ${col.key === 'title' || col.key === 'authors' ? 'text-left' : 'text-center'} text-gray-700 text-xs sm:text-sm ${
                              colIdx < columns.length - 1 ? 'border-r border-gray-100' : ''
                            } ${
                              col.key === 'title' || col.key === 'authors' ? 'leading-relaxed font-medium' : ''
                            }`}
                          >
                            {item[col.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
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
      {totalPages > 1 && (
        <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 rounded-2xl border border-gray-200">
          <div className="text-xs sm:text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
            <span className="font-medium">{Math.min(endIndex, filteredItems.length)}</span> of{' '}
            <span className="font-medium">{filteredItems.length}</span> results
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = index + 1;
              } else if (currentPage <= 3) {
                pageNum = index + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - (4 - index);
              } else {
                pageNum = currentPage - 2 + index;
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
            {totalPages > 5 && currentPage < totalPages - 2 && (
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
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1 sm:p-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const ResearchInnovationPage: React.FC = () => {
  const [tabs, setTabs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("seed-money");
  const navigate = useNavigate();

  useEffect(() => {
    import("../data/researchInnovationData.json").then((data) => {
      const enrichedTabs = data.tabs.map((tab: any) => ({
        ...tab,
        icon: iconMap[tab.icon as keyof typeof iconMap] || FileText,
      }));
      setTabs(enrichedTabs);
    });
  }, []);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <PageLayout
      title="Research & Innovation - CSE Department"
      description="Research projects, innovations, publications, patents and consultancy services"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 pb-12 max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span className="font-medium">Back to Department</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Research & Innovation
          </h1>
          <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our cutting-edge research projects, innovative solutions, publications, 
            patents, and consultancy services driving technological advancement
          </p>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            {/* Mobile scrollable tabs */}
            <div className="flex sm:flex-wrap overflow-x-auto sm:overflow-visible no-scrollbar">
              {tabs.map((tab: any) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center flex-shrink-0 min-w-[150px] sm:min-w-0 sm:flex-1 space-x-2 px-3 sm:px-6 py-3 sm:py-4 font-medium transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? "text-yellow-600 border-yellow-500 bg-yellow-50"
                      : "text-gray-600 border-transparent hover:text-yellow-600 hover:bg-yellow-50"
                  }`}
                >
                  {tab.icon && <tab.icon className="h-5 w-5" />}
                  <span className="text-sm sm:text-base">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-8">
            {activeTabData && (
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {activeTabData.content.title}
                  </h2>
                </div>

                {/* Render table for seed-money, patent, consultancy, conference, and book-chapter, cards for others */}
                {activeTab === "seed-money" ? (
                  <SeedMoneyTable items={activeTabData.content.items} />
                ) : activeTab === "patent" ? (
                  <PatentsTable items={activeTabData.content.items} />
                ) : activeTab === "consultancy" ? (
                  <ConsultancyTable items={activeTabData.content.items} />
                ) : activeTab === "conference" ? (
                  <ConferenceTable items={activeTabData.content.items} />
                ) : activeTab === "book-chapter" ? (
                  <ConferenceTable items={activeTabData.content.items} />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activeTabData.content.items.map(
                      (item: any, index: number) => (
                        <ResearchCard key={index} item={item} />
                      )
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-12 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Collaborate With Us
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Interested in partnering for research projects or consultancy services? 
            Let's innovate together and create impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/department/cse")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-200"
            >
              Back to CSE Department
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResearchInnovationPage;
