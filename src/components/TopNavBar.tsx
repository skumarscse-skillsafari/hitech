import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

interface MenuItem {
  name: string;
  href: string;
  external?: boolean;
  dropdown?: Array<{
    name: string;
    href: string;
  }>;
}

interface TopNavBarProps {
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
  menuItems: MenuItem[];
}

const TopNavBar: React.FC<TopNavBarProps> = ({ socialMedia, menuItems }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
    youtube: Youtube,
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMouseEnter = (itemName: string) => {
    if (window.innerWidth >= 1024) { // Only on desktop
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) { // Only on desktop
      setActiveDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="bg-yellow-500 text-gray-900 border-b border-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-yellow-600 rounded transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center space-x-0">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 px-4 py-2 hover:bg-yellow-600 transition-colors h-10 border-r border-yellow-600 last:border-r-0 text-sm font-medium"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    
                    {/* Desktop Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-0 w-56 bg-white text-gray-800 rounded-b-lg shadow-xl border border-gray-200 z-50"
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm hover:bg-yellow-50 hover:text-yellow-700 transition-colors border-b border-gray-100 last:border-b-0"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-2 hover:bg-yellow-600 transition-colors h-10 border-r border-yellow-600 last:border-r-0 text-sm font-medium"
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <span>{item.name}</span>
                    {item.external && <ExternalLink className="h-3 w-3 ml-1" />}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Social Media - Always Visible */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-800 hidden md:block font-medium text-xs">Follow us:</span>
            <div className="flex items-center space-x-2">
              {Object.entries(socialMedia).map(([platform, url]) => {
                const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-yellow-600 transition-all duration-200 p-1.5 rounded hover:scale-110"
                    title={`Follow us on ${platform}`}
                  >
                    <IconComponent className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-10 left-0 right-0 bg-yellow-500 border-t border-yellow-600 shadow-xl z-50 max-h-96 overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full py-3 text-gray-900 hover:text-yellow-700 font-medium transition-colors text-sm"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2 bg-yellow-400 rounded-lg p-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 px-3 text-sm text-gray-700 hover:text-yellow-800 hover:bg-yellow-300 rounded transition-colors"
                              onClick={closeMobileMenu}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center justify-between py-3 text-gray-900 hover:text-yellow-700 font-medium transition-colors text-sm"
                      onClick={closeMobileMenu}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      <span>{item.name}</span>
                      {item.external && <ExternalLink className="h-3 w-3" />}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;