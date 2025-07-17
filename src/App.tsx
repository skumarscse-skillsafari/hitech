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
import InnovativeMethods from './pages/InnovativeMethods';
import Objectives from './pages/objectives';
import Management from './pages/Management';
import PrincipalsDesk from './pages/PrincipalsDesk';
import FacultyProfilePage from './pages/FacultyProfilePage';
import GoverningCouncilPage from './pages/GoverningCouncilPage'; // ✅ NEW PAGE IMPORTED

// JSON data imports
import topNavBarData from './data/topNavBarData.json';
import headerData from './data/headerData.json';
import newsTickerData from './data/newsTickerData.json';
import contactData from './data/contactData.json';

function App() {
  return (
    <HelmetProvider>
      <CMSProvider>
        <Router>
          <div className="min-h-screen bg-white flex flex-col">
            {/* Top Navbar */}
            <TopNavBar
              socialMedia={topNavBarData?.topNavBar?.socialMedia || []}
              menuItems={topNavBarData?.topNavBar?.menuItems || []}
            />

            {/* Header */}
            <Header
              collegeName={headerData?.header?.collegeName || 'College Name'}
              collegeSubtitle={headerData?.header?.collegeSubtitle || 'Subtitle'}
              navigationItems={headerData?.header?.navigationItems || []}
            />

            {/* News Ticker */}
            <NewsTicker
              newsItems={newsTickerData?.newsTicker?.newsItems || []}
              speed={newsTickerData?.newsTicker?.settings?.speed ?? 50}
              pauseOnHover={newsTickerData?.newsTicker?.settings?.pauseOnHover ?? true}
            />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/department/:departmentId" element={<DepartmentPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/placements" element={<PlacementsPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/reuse" element={<ReusePage />} />
              <Route path="/innovative-methods" element={<InnovativeMethods />} />
              <Route path="/about/objectives" element={<Objectives />} />
              <Route path="/vision-mission" element={<Management />} />
              <Route path="/leadership" element={<PrincipalsDesk />} />
              <Route path="/governing-council" element={<GoverningCouncilPage />} /> {/* ✅ NEW ROUTE */}
              <Route path="/profile/:id" element={<FacultyProfilePage />} />
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
