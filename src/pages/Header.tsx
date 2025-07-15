import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

interface HeaderProps {
  collegeName?: string;
  collegeSubtitle?: string;
  navigationItems?: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ 
  collegeName = "Hindusthan Institute of Technology", 
  collegeSubtitle = "(An Autonomous Institution); Approved by AICTE New Delhi, Affiliated to Anna University, Chennai.",
  navigationItems = []
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
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

                    {/* Dropdown Menu */}
                    {(openDropdown === item.name) && (
                      <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
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

export default Header;