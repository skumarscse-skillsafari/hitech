import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

// ✅ Updated to include `external` flag
interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
  dropdown?: NavigationItem[];
}

interface HeaderProps {
  collegeName?: string;
  collegeSubtitle?: string;
  navigationItems?: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({
  collegeName = 'Hindusthan Institute of Technology',
  collegeSubtitle = '(An Autonomous Institution); Approved by AICTE New Delhi, Affiliated to Anna University, Chennai.',
  navigationItems = [],
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const renderDropdown = (items: NavigationItem[]) => {
    return (
      <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
        {items.map((item) => (
          <div key={item.name} className="relative group/sub">
            {item.dropdown ? (
              <>
                <button
                  className="flex justify-between items-center w-full px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                >
                  <span>{item.name}</span>
                  <ChevronRightIcon />
                </button>
                <div className="absolute top-0 left-full w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200 hidden group-hover/sub:block">
                  {renderDropdown(item.dropdown)}
                </div>
              </>
            ) : item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                onClick={() => setOpenDropdown(null)}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* College Info */}
        <div className="text-center py-4">
          <Link to="/" className="hover:no-underline">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-yellow-600 transition-colors">
              {collegeName}
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {collegeSubtitle}
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    {openDropdown === item.name && renderDropdown(item.dropdown)}
                  </>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="px-4 py-3 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

// Chevron icon for nested dropdowns
const ChevronRightIcon: React.FC = () => (
  <svg
    className="ml-2 h-4 w-4 text-gray-400 group-hover:text-yellow-600 transition-colors"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default Header;
