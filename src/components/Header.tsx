import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: NavigationItem[];
}

interface HeaderProps {
  collegeName: string;
  collegeSubtitle: string;
  navigationItems: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ collegeName, collegeSubtitle, navigationItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const renderDropdownItems = (items: NavigationItem[]) => (
    <div className="py-2">
    {items.map((item) => (
      <div key={item.name} className="relative group/sub">
        {item.dropdown ? (
          <>
            <button className="flex justify-between items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">
              <span>{item.name}</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute top-0 left-full w-64 bg-white border rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
              {renderDropdownItems(item.dropdown)}
            </div>
          </>
        ) : item.external ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
          >
            {item.name}
          </a>
        ) : (
          <Link
            to={item.href}
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
          >
            {item.name}
          </Link>
        )}
      </div>
    ))}
  </div>
    
  );

  const renderMobileDropdown = (items: NavigationItem[], level = 0) => (
    <div className={`${level > 0 ? 'ml-4 mt-2 bg-gray-50 p-2 rounded' : ''}`}>
      {items.map((item) => (
        <div key={item.name}>
          {item.dropdown ? (
            <>
              <button
                onClick={() => handleDropdownToggle(item.name)}
                className="flex items-center justify-between w-full py-2 px-2 text-sm text-gray-700 hover:text-yellow-600"
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                />
              </button>
              {activeDropdown === item.name && renderMobileDropdown(item.dropdown, level + 1)}
            </>
          ) : (
            <Link
              to={item.href}
              className="block py-2 px-3 text-sm text-gray-600 hover:text-yellow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed top-10 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg top-0' : 'bg-white/95 backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Titles */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="bg-white p-1 rounded-lg shadow-md">
              <img src="/Logo.jpg" alt="Logo" className="h-16 w-auto object-contain" />
            </div>
            <div className="hidden lg:block">
              <div className="text-xl font-bold text-yellow-600 leading-tight">{collegeName}</div>
              <div className="text-xs font-bold text-gray-600 leading-tight">{collegeSubtitle.split(';')[0]}</div>
              <div className="text-xs text-gray-600 leading-tight">{collegeSubtitle.split(';')[1]}</div>
            </div>
            <div className="lg:hidden">
              <div className="text-sm font-bold text-yellow-600 leading-tight">
                Hindusthan Institute
                <br />
                of Technology
              </div>
              <div className="text-xs font-semibold text-gray-500 leading-tight">An Autonomous Institution</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                        location.pathname === item.href ||
                        item.dropdown.some((sub) => location.pathname === sub.href)
                          ? 'text-yellow-600 bg-yellow-50'
                          : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {renderDropdownItems(item.dropdown)}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                      location.pathname === item.href
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Desktop Hamburger Dropdown Menu */}
            <div className="relative ml-4">
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => handleDropdownToggle('hamburger')}
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
              {activeDropdown === 'hamburger' && (
                <div className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-xl z-50">
                  <Link
                    to="/online-fees"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Online Fees Payment
                  </Link>
                  <Link
                    to="/clubs"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Clubs and Societies
                  </Link>
                  <Link
                    to="/ecampus"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    onClick={() => setActiveDropdown(null)}
                  >
                    E-Campus Login
                  </Link>
                  <Link
                    to="/media"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Media
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl border-t max-h-[70vh] overflow-y-auto z-50">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && renderMobileDropdown(item.dropdown)}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-3 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
