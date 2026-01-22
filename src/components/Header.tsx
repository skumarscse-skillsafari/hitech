import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: NavigationItem[];
  external?: boolean;
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
  const [showNews, setShowNews] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Hide news when scrolling down
    if (currentScrollY > lastScrollY) {
      setShowNews(false);
    } else {
      setShowNews(true);
    }
    
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 10);
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const renderDropdownItems = (items: NavigationItem[]) => (
    <div className="py-2">
      {items.map((item) => (
        <div key={item.name} className="relative group/sub">
          {item.dropdown ? (
            <>
              <button className="flex justify-between items-center w-full px-4 py-3 text-sm text-gray-900 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300 transform hover:translate-x-1">
                <span>{item.name}</span>
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover/sub:rotate-180" />
              </button>
              <div className="absolute top-0 left-full w-64 bg-white border rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-y-2 group-hover/sub:translate-y-0 z-50">
                {renderDropdownItems(item.dropdown)}
              </div>
            </>
          ) : item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm text-gray-900 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300 transform hover:translate-x-1"
            >
              {item.name}
            </a>
          ) : (
            <Link
              to={item.href}
              className="block px-4 py-3 text-sm text-gray-900 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300 transform hover:translate-x-1"
              onClick={closeAllMenus}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
  

  const renderMobileDropdown = (items: NavigationItem[], level = 0) => (
    <div className={`${level > 0 ? 'ml-4 mt-2 bg-gray-50 p-2 rounded transition-all duration-300' : ''}`}>
      {items.map((item) => (
        <div key={item.name}>
          {item.dropdown ? (
            <>
              <button
                onClick={() => handleDropdownToggle(item.name)}
                className="flex items-center justify-between w-full py-2 px-2 text-sm text-gray-900 hover:text-yellow-600 transition-colors duration-200"
              >
                <span>{item.name}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-96' : 'max-h-0'}`}>
                {activeDropdown === item.name && renderMobileDropdown(item.dropdown, level + 1)}
              </div>
            </>
          ) : (
            <Link
              to={item.href}
              className="block py-2 px-3 text-sm text-gray-600 hover:text-yellow-600 transition-colors duration-200"
              onClick={closeAllMenus}
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
  className={`fixed top-10 w-full z-40 transition-all duration-500 ${
    isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-xl top-0 py-2' 
      : 'bg-white/90 backdrop-blur-sm shadow-lg py-2'
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4rem] gap-2 lg:gap-8">
          {/* Logo and Titles */}
          <Link 
            to="/" 
            className="flex items-center gap-3 flex-shrink-0 group/logo max-w-[70%] lg:max-w-[320px] xl:max-w-[400px]"
            onClick={closeAllMenus}
          >
            <div className="bg-white p-1 rounded-lg shadow-md transition-all duration-300 group-hover/logo:shadow-lg group-hover/logo:ring-2 group-hover/logo:ring-yellow-200 flex-shrink-0">
              <img src="/Logo.jpg" alt="Logo" className="h-10 w-auto sm:h-12 object-contain" />
            </div>
            
            {/* Desktop Title */}
            <div className="hidden lg:block transition-transform duration-300 ease-out group-hover/logo:scale-[1.02] origin-left transform-gpu">
              <div className="text-lg xl:text-xl font-bold text-yellow-600 leading-tight transition-colors duration-300 group-hover/logo:text-yellow-700 whitespace-normal">
                {collegeName}
              </div>
              <div className="text-[10px] xl:text-xs font-bold text-gray-600 leading-tight mt-0.5 whitespace-normal">
                {collegeSubtitle.split(';')[0]}
              </div>
              <div className="text-[10px] text-gray-500 leading-tight whitespace-normal">
                {collegeSubtitle.split(';')[1]}
              </div>
            </div>

            {/* Mobile Title */}
            <div className="lg:hidden">
              <div className="text-sm font-bold text-yellow-600 leading-tight transition-colors duration-300 group-hover/logo:text-yellow-700 line-clamp-2">
                Hindusthan Institute of Technology
              </div>
              <div className="text-[10px] font-semibold text-gray-500 leading-tight">
                An Autonomous Institution
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-shrink-0">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm xl:text-base ${
                        location.pathname === item.href ||
                        item.dropdown.some((sub) => location.pathname === sub.href)
                          ? 'text-yellow-600 bg-yellow-50 shadow-inner'
                          : 'text-gray-900 hover:text-yellow-600 hover:bg-yellow-50'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div
                      className="absolute top-full right-0 mt-1 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {renderDropdownItems(item.dropdown)}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm xl:text-base ${
                      location.pathname === item.href
                        ? 'text-yellow-600 bg-yellow-50 shadow-inner'
                        : 'text-gray-900 hover:text-yellow-600 hover:bg-yellow-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Desktop Hamburger Dropdown Menu */}
            <div className="relative ml-2">
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
                onClick={() => handleDropdownToggle('hamburger')}
                onMouseEnter={() => setActiveDropdown('hamburger')}
              >
                <Menu className="h-6 w-6 text-gray-900 transition-colors duration-300 hover:text-yellow-600" />
              </button>
              {activeDropdown === 'hamburger' && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-xl z-50 opacity-0 animate-fadeIn"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to="/online-fees"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Online Fees Payment
                  </Link>
                  <Link
                    to="/clubs"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Clubs and Societies
                  </Link>
                  <Link
                    to="/ecampus"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    E-Campus Login
                  </Link>
                  <Link
                    to="/media"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-300"
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
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900 transition-colors duration-300 hover:text-red-500" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900 transition-colors duration-300 hover:text-yellow-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="px-4 py-4 space-y-2 bg-white border-t rounded-b-lg shadow-md">
            {navigationItems.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center justify-between w-full py-3 text-gray-900 hover:text-yellow-600 font-medium transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {renderMobileDropdown(item.dropdown)}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-3 text-gray-900 hover:text-yellow-600 font-medium transition-colors duration-300 transform hover:translate-x-2"
                  onClick={closeAllMenus}
                >
                  {item.name}
                </Link>
              )
            )}
            
            {/* Mobile Hamburger Menu Items */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                to="/online-fees"
                className="block py-2 text-gray-900 hover:text-yellow-600 transition-colors duration-300 transform hover:translate-x-2"
                onClick={closeAllMenus}
              >
                Online Fees Payment
              </Link>
              <Link
                to="/clubs"
                className="block py-2 text-gray-900 hover:text-yellow-600 transition-colors duration-300 transform hover:translate-x-2"
                onClick={closeAllMenus}
              >
                Clubs and Societies
              </Link>
              <Link
                to="/ecampus"
                className="block py-2 text-gray-900 hover:text-yellow-600 transition-colors duration-300 transform hover:translate-x-2"
                onClick={closeAllMenus}
              >
                E-Campus Login
              </Link>
              <Link
                to="/media"
                className="block py-2 text-gray-900 hover:text-yellow-600 transition-colors duration-300 transform hover:translate-x-2"
                onClick={closeAllMenus}
              >
                Media
              </Link>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </header>
   
  );
  
};

export default Header;