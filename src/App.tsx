import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CMSProvider } from './components/admin/CMSProvider';
import TopNavBar from './components/TopNavBar';
import Header from './components/Header';
import NewsTicker from './components/NewsTicker';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DepartmentPage from './pages/DepartmentPage';
import GalleryPage from './pages/GalleryPage';
import PlacementsPage from './pages/PlacementsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import ReusePage from './pages/ReusePage';
import AboutTrustPage from './pages/AboutTrustPage';

// Import JSON data files
import topNavBarData from './data/topNavBarData.json';
import headerData from './data/headerData.json';
import newsTickerData from './data/newsTickerData.json';
import contactData from './data/contactData.json';

function App() {
  return (
    <HelmetProvider>
      <CMSProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <TopNavBar 
              socialMedia={topNavBarData.topNavBar.socialMedia} 
              menuItems={topNavBarData.topNavBar.menuItems}
            />
            <Header 
              collegeName={headerData.header.collegeName} 
              collegeSubtitle={headerData.header.collegeSubtitle}
              navigationItems={headerData.header.navigationItems}
            />
            <NewsTicker 
              newsItems={newsTickerData.newsTicker.newsItems}
              speed={newsTickerData.newsTicker.settings.speed}
              pauseOnHover={newsTickerData.newsTicker.settings.pauseOnHover}
            />
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/department/:departmentId" element={<DepartmentPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/placements" element={<PlacementsPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/reuse" element={<ReusePage />} />
              <Route path="/about-trust" element={<AboutTrustPage />} />
              {/* Add more routes as needed */}
            </Routes>
            
            <Footer 
              collegeName={headerData.header.collegeName} 
              contact={contactData.contact} 
            />
          </div>
        </Router>
      </CMSProvider>
    </HelmetProvider>
  );
}

export default App;