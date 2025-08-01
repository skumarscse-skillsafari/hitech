import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  ExternalLink, ChevronDown, ChevronRight, Menu, X
} from 'lucide-react';

interface SubMenuItem {
  name: string;
  href: string;
  external?: boolean;
  dropdown?: Array<{ name: string; href: string; external?: boolean }>;
}

interface MenuItem {
  name: string;
  href: string;
  external?: boolean;
  dropdown?: SubMenuItem[];
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
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
    youtube: Youtube,
  };

  const toggleDropdown = (name: string) => setActiveDropdown(activeDropdown === name ? null : name);
  const toggleSubDropdown = (name: string) => setActiveSubDropdown(activeSubDropdown === name ? null : name);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const isExternal = (href: string) => href.startsWith('http');

  return (
    <nav className="relative z-[999] bg-yellow-500 text-gray-900 border-b border-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-12 md:h-10">
          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-yellow-600 rounded"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-wrap items-center space-x-0">
            {/* ERP Button with External Link Icon */}
            <a
              href="https://erp.hindusthan.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm font-medium hover:bg-yellow-600 border-r border-yellow-600 last:border-r-0 h-10 transition"
            >
              ERP
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>

            {/* Render other menu items (excluding ERP) */}
            {menuItems
              .filter((item) => item.name.toLowerCase() !== 'erp')
              .map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center space-x-1 px-4 py-2 text-sm font-medium hover:bg-yellow-600 border-r border-yellow-600 last:border-r-0 h-10 transition"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>

                      {activeDropdown === item.name && (
                        <div
                          onMouseLeave={() => {
                            setActiveDropdown(null);
                            setActiveSubDropdown(null);
                          }}
                          className="absolute top-full left-0 w-56 bg-white text-gray-900 shadow-xl border rounded-b-lg z-50"
                        >
                          {item.dropdown.map((subItem) => (
                            <div key={subItem.name} className="relative group">
                              {(subItem.external || isExternal(subItem.href)) ? (
                                <a
                                  href={subItem.href}
                                  onMouseEnter={() => setActiveSubDropdown(subItem.name)}
                                  className="block px-4 py-2 text-sm hover:bg-yellow-100 border-b last:border-b-0"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {subItem.name}
                                  {subItem.dropdown && <ChevronRight className="float-right h-3 w-3 mt-1" />}
                                </a>
                              ) : (
                                <Link
                                  to={subItem.href}
                                  onMouseEnter={() => setActiveSubDropdown(subItem.name)}
                                  className="block px-4 py-2 text-sm hover:bg-yellow-100 border-b last:border-b-0"
                                >
                                  {subItem.name}
                                  {subItem.dropdown && <ChevronRight className="float-right h-3 w-3 mt-1" />}
                                </Link>
                              )}
                              {subItem.dropdown && activeSubDropdown === subItem.name && (
                                <div className="absolute top-0 left-full w-56 bg-white border shadow-lg rounded-lg z-50">
                                  {subItem.dropdown.map((nested) =>
                                    (nested.external || isExternal(nested.href)) ? (
                                      <a
                                        key={nested.name}
                                        href={nested.href}
                                        className="block px-4 py-2 text-sm hover:bg-yellow-100 border-b last:border-b-0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {nested.name}
                                      </a>
                                    ) : (
                                      <Link
                                        key={nested.name}
                                        to={nested.href}
                                        className="block px-4 py-2 text-sm hover:bg-yellow-100 border-b last:border-b-0"
                                      >
                                        {nested.name}
                                      </Link>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (item.external || isExternal(item.href)) ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center px-4 py-2 text-sm font-medium hover:bg-yellow-600 border-r border-yellow-600 last:border-r-0 h-10 transition"
                    >
                      {item.name}
                      {item.external && <ExternalLink className="h-4 w-4 ml-1" />}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center px-4 py-2 text-sm font-medium hover:bg-yellow-600 border-r border-yellow-600 last:border-r-0 h-10 transition"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium hidden md:inline-block">Follow us:</span>
            {Object.entries(socialMedia).map(([platform, url]) => {
              const Icon = socialIcons[platform as keyof typeof socialIcons];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Follow us on ${platform}`}
                  className="p-1.5 rounded hover:bg-yellow-600 hover:scale-110 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-yellow-500 border-t border-yellow-600 shadow-xl max-h-[70vh] overflow-y-auto z-50">
            <div className="px-4 py-4 space-y-2">
              {menuItems
                .filter((item) => item.name.toLowerCase() !== 'erp')
                .map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-sm font-medium py-2 text-left text-gray-900 hover:text-yellow-700"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-1 space-y-2 bg-yellow-400 rounded p-2">
                            {item.dropdown.map((subItem) => (
                              <div key={subItem.name}>
                                <button
                                  onClick={() => toggleSubDropdown(subItem.name)}
                                  className="flex items-center justify-between w-full text-sm text-gray-800 hover:text-yellow-900 py-2"
                                >
                                  {subItem.name}
                                  {subItem.dropdown && (
                                    <ChevronRight
                                      className={`h-4 w-4 transition-transform ${
                                        activeSubDropdown === subItem.name ? 'rotate-90' : ''
                                      }`}
                                    />
                                  )}
                                </button>
                                {subItem.dropdown && activeSubDropdown === subItem.name && (
                                  <div className="ml-4 mt-1 space-y-1">
                                    {subItem.dropdown.map((nested) =>
                                      (nested.external || isExternal(nested.href)) ? (
                                        <a
                                          key={nested.name}
                                          href={nested.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={closeMobileMenu}
                                          className="block text-sm text-gray-700 py-1 px-3 rounded hover:bg-yellow-300 hover:text-yellow-900 transition"
                                        >
                                          {nested.name}
                                        </a>
                                      ) : (
                                        <Link
                                          key={nested.name}
                                          to={nested.href}
                                          onClick={closeMobileMenu}
                                          className="block text-sm text-gray-700 py-1 px-3 rounded hover:bg-yellow-300 hover:text-yellow-900 transition"
                                        >
                                          {nested.name}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                )}
                                {!subItem.dropdown && (subItem.external || isExternal(subItem.href)) ? (
                                  <a
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMobileMenu}
                                    className="block text-sm text-gray-700 py-1 px-3 rounded hover:bg-yellow-300 hover:text-yellow-900 transition"
                                  >
                                    {subItem.name}
                                  </a>
                                ) : !subItem.dropdown ? (
                                  <Link
                                    to={subItem.href}
                                    onClick={closeMobileMenu}
                                    className="block text-sm text-gray-700 py-1 px-3 rounded hover:bg-yellow-300 hover:text-yellow-900 transition"
                                  >
                                    {subItem.name}
                                  </Link>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (item.external || isExternal(item.href)) ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-600 rounded"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={closeMobileMenu}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-yellow-600 rounded"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavBar;
