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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className={`sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="bg-white p-1 rounded-lg shadow-md">
              <img 
                src="/Logo.jpg" 
                alt="Hindusthan Institute of Technology Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="hidden lg:block">
              <div className="text-xl font-bold text-yellow-600 leading-tight">{collegeName}</div>
              <div className="text-xs font-bold text-gray-600 leading-tight">{collegeSubtitle.split(";")[0]}</div>
              <div className="text-xs text-gray-600 leading-tight">{collegeSubtitle.split(";")[1]}</div>
            </div>
            <div className="lg:hidden">
              <div className="text-sm font-bold text-yellow-600 leading-tight">
                Hindusthan Institute<br />of Technology
              </div>
              <div className="text-xs font-semibold text-gray-500 leading-tight">
                (An Autonomous Institution)
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                        location.pathname === item.href || item.dropdown.some(sub => location.pathname === sub.href)
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
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.name} className="relative group/sub">
                            {subItem.dropdown ? (
                              <>
                                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 cursor-pointer">
                                  {subItem.name}
                                  <ChevronDown className="h-4 w-4 ml-2" />
                                </div>
                                <div className="absolute top-0 left-full mt-0 ml-1 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                                  <div className="py-2">
                                    {subItem.dropdown.map((nestedItem) => (
                                      <Link
                                        key={nestedItem.name}
                                        to={nestedItem.href}
                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <Link
                                to={subItem.href}
                                className={`block px-4 py-3 text-sm transition-colors hover:bg-yellow-50 ${
                                  location.pathname === subItem.href
                                    ? 'text-yellow-600 bg-yellow-50 border-r-2 border-yellow-500'
                                    : 'text-gray-700 hover:text-yellow-600'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
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
          </nav>

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

        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl border-t max-h-96 overflow-y-auto">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-lg p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-yellow-600 hover:bg-white rounded transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-3 text-gray-700 hover:text-yellow-600 font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
